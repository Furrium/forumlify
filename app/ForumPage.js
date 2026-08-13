import { cookies } from 'next/headers';
import HomeClient from './HomeClient';

export default async function ForumPage() {
  let cachedName = '';
  try {
    const cookieStore = await cookies();
    cachedName = decodeURIComponent(cookieStore.get('forumlify-name')?.value || '');
  } catch {
    cachedName = '';
  }
  return <HomeClient cachedName={cachedName} />;
}
