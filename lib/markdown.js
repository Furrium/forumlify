// Markdown 渲染工具（对齐上游 marked 行为）
import { marked } from 'marked';

// 渲染 markdown 为 HTML；失败时回退为纯文本换行
export function renderMarkdown(text) {
  if (!text) return '';
  try {
    return marked.parse(text);
  } catch {
    return text.replace(/\n/g, '<br>');
  }
}
