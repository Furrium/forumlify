/** @type {import('next').NextConfig} */
const nextConfig = {
  // Docker 部署用 standalone 输出；serverless（Vercel/CF Pages）不需要
  ...(process.env.DOCKER ? { output: 'standalone' } : {}),
  // /uploads/* 由 API 路由提供（上传文件运行时新增，不进 public 构建快照）
  async rewrites() {
    return [
      { source: '/uploads/:name', destination: '/api/uploads/:name' },
    ];
  },
  // 缓存策略：动态页面/API no-cache（浏览器每次验证 → 304）；
  // 静态资源（_next/static）immutable 长缓存（Next.js 默认，但需在 no-cache 之后覆盖）
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, must-revalidate' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
