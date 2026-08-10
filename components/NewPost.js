'use client';

// 发布新帖页
import { useState, useEffect, useRef } from 'react';
import { API, generateCaptcha, uploadImage } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';

export default function NewPost() {
  const { currentUser, navigate, refresh } = useApp();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]); // 上传后的 URL 列表
  const [previews, setPreviews] = useState([]); // 本地预览 dataURL
  const [captcha, setCaptcha] = useState(null);
  const [captchaInput, setCaptchaInput] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => { setCaptcha(generateCaptcha()); }, []);

  const handleFiles = async (files) => {
    setUploading(true);
    try {
      const newPreviews = [];
      for (const file of files) {
        if (!file.type.startsWith('image/')) continue;
        if (file.size > 5 * 1024 * 1024) {
          alert('图片 ' + file.name + ' 超过 5MB，请压缩后上传');
          continue;
        }
        const dataUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(file);
        });
        newPreviews.push(dataUrl);
        const url = await uploadImage(file);
        setImages((prev) => [...prev, url]);
      }
      setPreviews((prev) => [...prev, ...newPreviews]);
    } catch (err) {
      alert('上传失败：' + err.message);
    } finally {
      setUploading(false);
    }
  };

  // 拖拽上传
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const dropZoneStyle = {
    border: '2px dashed ' + (dragOver ? 'var(--primary)' : 'var(--border)'),
    borderRadius: 8, padding: 24, textAlign: 'center', cursor: 'pointer',
    transition: 'all 0.3s', margin: '8px 0 12px',
    background: dragOver ? 'var(--primary-bg)' : 'var(--bg)',
  };

  const handleSubmit = async () => {
    if (!currentUser || !currentUser.id) {
      alert('请先登录');
      navigate('feed');
      return;
    }
    if (!content.trim()) { alert('请填写内容'); return; }
    if (!captcha || parseInt(captchaInput) !== captcha.answer) {
      alert('验证码错误，请重新计算');
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
      return;
    }
    try {
      await API.createPost(title.trim() || '无标题', content.trim(), images);
      API.logEvent('create_post').catch(() => {});
      alert('发布成功！');
      navigate('feed');
      refresh();
    } catch (err) {
      alert('发布失败：' + err.message);
    }
  };

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="plus" size={20} /> 发布新帖</h2>
      </div>
      <div style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}>
        <input
          type="text"
          placeholder="标题"
          style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #e2e8f0', borderRadius: 6, fontSize: 15, fontWeight: 600, marginBottom: 12, fontFamily: 'inherit' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={6}
          placeholder="说点什么..."
          style={{ width: '100%', padding: 12, border: '1.5px solid #e2e8f0', borderRadius: 6, fontSize: 15, fontFamily: 'inherit', resize: 'vertical' }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div id="imagePreview" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '8px 0' }}>
          {previews.map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4, border: '1px solid var(--border)' }} />
          ))}
        </div>
        <div
          id="dropZone"
          style={dropZoneStyle}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files) handleFiles(Array.from(e.dataTransfer.files)); }}
        >
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            {uploading ? '上传中...' : (dragOver ? '松开上传' : '📷 点击或拖拽上传图片')}
          </div>
        </div>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          multiple
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => { if (e.target.files) handleFiles(Array.from(e.target.files)); }}
        />
        <div className="captcha-row" style={{ margin: '12px 0' }}>
          <span onClick={() => setCaptcha(generateCaptcha())} style={{ cursor: 'pointer' }}>
            {captcha ? captcha.question : ''}
          </span>
          <input
            type="text"
            placeholder="答案"
            style={{ width: 80, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', outline: 'none' }}
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>
        <button className="btn-primary" style={{ padding: '10px 32px', fontSize: 15 }} onClick={handleSubmit}>
          {uploading ? '上传中...' : '发布帖子'}
        </button>
      </div>
    </div>
  );
}
