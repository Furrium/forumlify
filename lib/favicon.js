export function applyFavicon(url, version = '') {
  if (typeof document === 'undefined' || !url) return;

  let href = url;
  try {
    const resolved = new URL(url, window.location.href);
    if (version) resolved.searchParams.set('v', version);
    href = resolved.href;
  } catch {
    href = url;
  }

  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = href;
}
