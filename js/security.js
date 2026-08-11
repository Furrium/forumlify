// ============================================================
//  Safe rendering helpers
// ============================================================

function escapeHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeURL(value, { allowRelative = true, image = false } = {}) {
  if (!value) return image ? '' : '#';

  try {
    const raw = String(value).trim();
    const parsed = new URL(raw, window.location.origin);
    const isRelative = parsed.origin === window.location.origin && !/^[a-z][a-z0-9+.-]*:/i.test(raw);
    const allowedProtocol = parsed.protocol === 'http:' || parsed.protocol === 'https:';

    if (!allowedProtocol || (!allowRelative && isRelative)) return image ? '' : '#';
    return isRelative ? parsed.pathname + parsed.search + parsed.hash : parsed.href;
  } catch (error) {
    return image ? '' : '#';
  }
}

function sanitizeHTML(html) {
  const template = document.createElement('template');
  template.innerHTML = String(html ?? '');

  // Application templates contain legitimate controls. Raw user HTML is escaped
  // before Markdown parsing, while this pass removes executable/embed elements.
  const forbidden = 'script,iframe,object,embed,link,meta,base,style';
  template.content.querySelectorAll(forbidden).forEach(node => node.remove());

  template.content.querySelectorAll('*').forEach(node => {
    for (const attribute of Array.from(node.attributes)) {
      const name = attribute.name.toLowerCase();
      if (name.startsWith('on') || name === 'srcdoc') {
        node.removeAttribute(attribute.name);
      }
    }

    if (node.hasAttribute('href')) {
      const href = safeURL(node.getAttribute('href'));
      if (href === '#') node.removeAttribute('href');
      else node.setAttribute('href', href);
    }

    if (node.hasAttribute('src')) {
      const src = safeURL(node.getAttribute('src'), { image: true });
      if (!src) node.removeAttribute('src');
      else node.setAttribute('src', src);
    }

    if (node.tagName === 'A' && node.getAttribute('target') === '_blank') {
      node.setAttribute('rel', 'noopener noreferrer');
    }
  });

  return template.innerHTML;
}

function renderMarkdown(value) {
  const escaped = escapeHTML(value);
  if (typeof marked !== 'undefined' && marked.parse) {
    return sanitizeHTML(marked.parse(escaped));
  }
  return escaped.replace(/\r?\n/g, '<br>');
}

function renderPlainText(value) {
  return escapeHTML(value).replace(/\r?\n/g, '<br>');
}
