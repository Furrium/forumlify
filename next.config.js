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
  // 论坛是动态内容：HTML 页面不缓存，避免 CDN/浏览器拿到旧版本
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
