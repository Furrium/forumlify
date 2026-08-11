// 构建入口：自动适配部署平台
// - Cloudflare Workers/Pages（CF_PAGES=1 / CF_WORKERS_BUILDS / CLOUDFLARE_ACCOUNT_ID）：OpenNext build
// - 其他（本地/Vercel/Docker）：next build
//
// 注意：OpenNext 内部构建 Next.js 时会调用 `bun run build`（packager 检测），
// 它设置 NEXT_PRIVATE_STANDALONE=true，此时必须走 next build 避免递归。
const { spawnSync } = require('child_process');

const insideOpenNext = process.env.NEXT_PRIVATE_STANDALONE === 'true';
const isCF = !insideOpenNext && (
  process.env.CF_PAGES === '1'
  || process.env.CF_WORKERS_BUILDS === '1'
  || !!process.env.CLOUDFLARE_ACCOUNT_ID
  || !!process.env.CF_ACCOUNT_ID
);

const args = isCF
  ? ['opennextjs-cloudflare', 'build', '--dangerouslyUseUnsupportedNextVersion']
  : ['next', 'build'];

console.log(`[build] 平台: ${isCF ? 'Cloudflare Workers (OpenNext)' : 'Next.js 标准构建'}${insideOpenNext ? ' (OpenNext 内部)' : ''}`);
const r = spawnSync('bun', ['run', ...args], { stdio: 'inherit', shell: false });
if (r.status !== 0) {
  console.error(`[build] 失败 (exit ${r.status})`);
  process.exit(r.status ?? 1);
}
