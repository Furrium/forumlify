'use client';

// 侧边栏：社区统计 + 友情链接
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';
import { Icon } from './Icons';

export default function Sidebar() {
  const [stats, setStats] = useState({ posts: 0, users: 0, topics: 0, online: 0 });
  const [links, setLinks] = useState([]);

  useEffect(() => {
    API.getStats().then(setStats).catch(() => {});
    API.getLinks().then(setLinks).catch(() => {});
  }, []);

  return (
    <aside id="sidebar">
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
        <ul id="friendlyLinks">
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
