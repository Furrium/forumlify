const enableCodecovBundleAnalysis = process.env.CODECOV_BUNDLE_ANALYSIS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 本地开发允许的来源：默认本机；局域网/其他设备通过环境变量追加
  // ALLOWED_DEV_ORIGINS=192.168.x.x,10.0.0.x （仅开发用，不写死具体 IP）
  allowedDevOrigins: [
    '127.0.0.1',
    ...(process.env.ALLOWED_DEV_ORIGINS ? process.env.ALLOWED_DEV_ORIGINS.split(',').map((s) => s.trim()) : []),
  ],
  // Docker 部署用 standalone 输出；serverless（Vercel/CF Pages）不需要
  ...(process.env.DOCKER ? { output: 'standalone' } : {}),
  // /uploads/* 由 API 路由提供（上传文件运行时新增，不进 public 构建快照）
  async rewrites() {
    return [
      { source: '/uploads/:name', destination: '/api/uploads/:name' },
    ];
  },
  ...(enableCodecovBundleAnalysis ? {
    webpack(config) {
      const { codecovWebpackPlugin } = require('@codecov/webpack-plugin');
      config.plugins.push(codecovWebpackPlugin({
        enableBundleAnalysis: true,
        bundleName: 'forumlify-next',
        gitService: 'github',
        dryRun: process.env.GITHUB_ACTIONS !== 'true',
        oidc: { useGitHubOIDC: true },
      }));

      return config;
    },
  } : {}),
};

module.exports = nextConfig;
