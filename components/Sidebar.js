'use client';

// 侧边栏：社区统计 + 友情链接
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';
import { Icon } from './Icons';

const emptyStats = { posts: 0, users: 0, topics: 0, online: 0 };
let cachedStats = null;
let cachedLinks = null;

export default function Sidebar({ id = 'sidebar' }) {
  const [stats, setStats] = useState(() => cachedStats || emptyStats);
  const [links, setLinks] = useState(() => cachedLinks || []);

  useEffect(() => {
    if (!cachedStats) {
      API.getStats().then((nextStats) => {
        cachedStats = nextStats;
        setStats(nextStats);
      }).catch(() => {});
    }
    if (!cachedLinks) {
      API.getLinks().then((nextLinks) => {
        cachedLinks = nextLinks;
        setLinks(nextLinks);
      }).catch(() => {});
    }
  }, []);

  return (
    <aside id={id} className="sidebar">
      <div className="stats-box">
        <h4>
          <Icon name="book" size={14} /> 社区统计
        </h4>
        <div className="stat-item"><span>主题</span><span>{stats.topics || 0}</span></div>
        <div className="stat-item"><span>帖子</span><span>{stats.posts || 0}</span></div>
        <div className="stat-item"><span>用户</span><span>{stats.users || 0}</span></div>
        <div className="stat-item"><span>在线</span><span>{stats.online || 0}</span></div>
      </div>
      <div className="links-box">
        <h4>
          <Icon name="link" size={14} /> 友情链接
        </h4>
        <ul id={id === 'sidebar' ? 'friendlyLinks' : undefined} className="friendly-links">
          {links.length === 0 ? (
            <li style={{ color: '#94a3b8', fontSize: 13 }}>暂无链接</li>
          ) : (
            links.map((l) => (
              <li key={l.id}><a href={l.url} target="_blank" rel="noreferrer">{l.title}</a></li>
            ))
          )}
        </ul>
      </div>
    </aside>
  );
}
