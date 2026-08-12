'use client';

// 自定义页面：以 iframe srcdoc 渲染 HTML 内容（与原版一致）
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';

export default function CustomPage({ pageName }) {
  const [html, setHtml] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setHtml(null);
    setError(null);
    API.getCustomPage(pageName)
      .then((page) => setHtml(page.content))
      .catch((err) => setError(err.message));
  }, [pageName]);

  if (error) {
    return (
      <div style={{ padding: '84px 32px', textAlign: 'center', color: '#ef4444' }}>
        页面加载失败：{error}
      </div>
    );
  }
  if (html === null) {
    return <div style={{ padding: '84px 32px', textAlign: 'center', color: '#94a3b8' }}><span className="spinner-sm" />加载中...</div>;
  }

  const srcdoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: 24px;
    background: var(--bg, #f6f8fc);
    color: var(--text, #0a0e1a);
  }
  @media (prefers-color-scheme: dark) {
    body { background: #0f1117; color: #e8edf5; }
  }
</style>
</head>
<body>${html}</body>
</html>`;

  return (
    <div className="custom-page-container" style={{ padding: '84px 32px 40px', background: 'var(--bg)', minHeight: '100vh' }}>
      <iframe
        style={{ width: '100%', minHeight: '70vh', border: 'none', borderRadius: 8, background: 'var(--surface)' }}
        sandbox="allow-scripts allow-modals allow-same-origin"
        srcDoc={srcdoc}
        title={pageName}
      />
    </div>
  );
}
