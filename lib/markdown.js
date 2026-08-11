// Markdown 渲染工具（对齐上游 marked 行为 + XSS 清理）
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

// 允许的 markdown 元素/属性白名单（对齐上游安全策略：禁止 script/iframe/style/事件属性）
const SANITIZE_OPTS = {
  allowedTags: [
    'p', 'br', 'hr', 'strong', 'em', 'b', 'i', 'u', 's', 'del', 'ins',
    'a', 'img', 'code', 'pre', 'blockquote', 'ul', 'ol', 'li',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'span', 'div',
  ],
  allowedAttributes: {
    a: ['href', 'target', 'rel', 'title'],
    img: ['src', 'alt', 'title', 'width', 'height'],
    code: ['class'],
    pre: ['class'],
    span: ['class'],
    div: ['class'],
    th: ['align', 'colspan', 'rowspan'],
    td: ['align', 'colspan', 'rowspan'],
    table: ['align', 'border', 'cellpadding', 'cellspacing'],
  },
  // URL 白名单：仅 http/https/相对路径，图片同样限制，禁止 javascript: 等
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesByTag: { img: ['http', 'https'] },
  allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
  allowProtocolRelative: false,
  // 事件属性（on*）默认被 sanitize-html 移除，无需额外配置
  disallowedTagsMode: 'discard',
};

// 渲染 markdown 为 HTML（已消毒，防存储型 XSS）；失败时回退为纯文本换行
export function renderMarkdown(text) {
  if (!text) return '';
  try {
    const raw = marked.parse(text);
    return sanitizeHtml(raw, SANITIZE_OPTS);
  } catch {
    return sanitizeHtml(text.replace(/\n/g, '<br>'), SANITIZE_OPTS);
  }
}
