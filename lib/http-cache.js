const REVALIDATE_CACHE_CONTROL = 'public, max-age=0, must-revalidate';

function matchesEtag(ifNoneMatch, etag) {
  if (!ifNoneMatch) return false;

  const normalized = etag.replace(/^W\//, '');
  return ifNoneMatch.split(',').some((candidate) => {
    const value = candidate.trim();
    return value === '*' || value.replace(/^W\//, '') === normalized;
  });
}

async function createEtag(body) {
  const bytes = new TextEncoder().encode(body);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hash = Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0')
  ).join('');
  return `"${hash}"`;
}

export async function jsonWithEtag(req, data, init = {}) {
  const body = JSON.stringify(data);
  const etag = await createEtag(body);
  const headers = new Headers(init.headers);

  headers.set('Cache-Control', REVALIDATE_CACHE_CONTROL);
  headers.set('ETag', etag);

  if (matchesEtag(req.headers.get('if-none-match'), etag)) {
    return new Response(null, { status: 304, headers });
  }

  headers.set('Content-Type', 'application/json; charset=utf-8');
  return new Response(body, { ...init, headers });
}
