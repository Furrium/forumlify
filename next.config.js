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
};

module.exports = nextConfig;
