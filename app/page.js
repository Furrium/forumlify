// 主页：Server Component，路径页面共用同一个客户端应用外壳。
import ForumPage from './ForumPage';

// cookies() 是动态 API：禁止静态优化，每次请求 SSR
export const dynamic = 'force-dynamic';

export default function Home() {
  return <ForumPage />;
}
