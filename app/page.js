// 主页：Server Component —— 从 cookie 读取缓存论坛名（SSR 首帧即输出），
// 其余逻辑在客户端 HomeClient 中
import { cookies } from 'next/headers';
import HomeClient from './HomeClient';

// cookies() 是动态 API：禁止静态优化，每次请求 SSR
export const dynamic = 'force-dynamic';

export default async function Home() {
  let cachedName = '';
  try {
    // Next 15+：cookies() 返回 Promise，必须 await
    const cookieStore = await cookies();
    cachedName = decodeURIComponent(cookieStore.get('forumlify-name')?.value || '');
  } catch (e) {
    cachedName = '';
  }
  return <HomeClient cachedName={cachedName} />;
}
