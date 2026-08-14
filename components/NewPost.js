'use client';

// 发帖页
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { API, uploadImage } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';
import { useToast } from './Toast';
import CaptchaImage from './CaptchaImage';
import { compressImage, DIRECT_IMAGE_LIMIT, MAX_IMAGE_SOURCE_SIZE } from '@/lib/compress-image';

export default function NewPost() {
  const { currentUser, navigate, refresh } = useApp();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]); // 上传后的 URL 列表
  const [previews, setPreviews] = useState([]); // 本地预览 dataURL
  const [captcha, setCaptcha] = useState(null);
  const [captchaInput, setCaptchaInput] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadStage, setUploadStage] = useState('uploading');
  const launchTitle = t('feed.newPost');
  const [headingText, setHeadingText] = useState(launchTitle);
  const [headingPhase, setHeadingPhase] = useState('idle');
  const terminalStartedRef = useRef(false);

  useEffect(() => { API.getCaptcha().then((c) => setCaptcha(c)).catch(() => {}); }, []);

  useEffect(() => {
    if (!terminalStartedRef.current) setHeadingText(launchTitle);
  }, [launchTitle]);

  useEffect(() => {
    if (headingPhase === 'idle') return undefined;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      if (headingText !== title) setHeadingText(title);
      return undefined;
    }

    if (headingPhase === 'erasing') {
      if (!headingText) {
        setHeadingPhase('typing');
        return undefined;
      }
      const timer = window.setTimeout(() => setHeadingText((text) => text.slice(0, -1)), 48);
      return () => window.clearTimeout(timer);
    }

    if (headingText === title) return undefined;

    let commonLength = 0;
    while (
      commonLength < headingText.length
      && commonLength < title.length
      && headingText[commonLength] === title[commonLength]
    ) {
      commonLength += 1;
    }

    const needsErasing = headingText.length > commonLength;
    const timer = window.setTimeout(() => {
      setHeadingText((text) => (
        needsErasing ? text.slice(0, -1) : title.slice(0, text.length + 1)
      ));
    }, needsErasing ? 38 : 64);
    return () => window.clearTimeout(timer);
  }, [headingPhase, headingText, title]);

  const handleTitleChange = (event) => {
    const nextTitle = event.target.value;
    setTitle(nextTitle);

    if (!terminalStartedRef.current && nextTitle.length > 0) {
      terminalStartedRef.current = true;
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        setHeadingText(nextTitle);
        setHeadingPhase('typing');
      } else {
        setHeadingPhase('erasing');
      }
    }
  };

  const handleFiles = async (files) => {
    setUploading(true);
    try {
      const newPreviews = [];
      for (const file of files) {
        if (!file.type.startsWith('image/')) continue;
        if (file.size > MAX_IMAGE_SOURCE_SIZE) {
          toast(t('newPost.imageTooLarge'), 'warning');
          continue;
        }

        let uploadFile = file;
        if (file.size > DIRECT_IMAGE_LIMIT) {
          setUploadStage('compressing');
          try {
            uploadFile = await compressImage(file, { maxDimension: 4096 });
          } catch {
            toast(t('newPost.imageCompressFailed'), 'error');
            continue;
          }
        }

        setUploadStage('uploading');
        const dataUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(uploadFile);
        });
        newPreviews.push(dataUrl);
        const url = await uploadImage(uploadFile);
        setImages((prev) => [...prev, url]);
      }
      setPreviews((prev) => [...prev, ...newPreviews]);
    } catch (err) {
      toast('上传失败：' + err.message, 'error');
    } finally {
      setUploading(false);
      setUploadStage('uploading');
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
      toast('请先登录', 'error');
      navigate('feed');
      return;
    }
    if (!content.trim()) { toast('请填写内容', 'error'); return; }
    if (!captcha || !captchaInput.trim()) { toast('请填写验证码', 'error'); return; }
    try {
      // 答案由服务端 HMAC 校验
      await API.createPost(title.trim() || '无标题', content.trim(), images, { id: captcha.id, answer: captchaInput.trim(), sig: captcha.sig });
      toast('发布成功', 'success');
      navigate('feed');
      refresh();
    } catch (err) {
      toast('发布失败：' + err.message, 'error');
    }
  };

  return (
    <div id="pageNew" className="page-slide active">
      <div className="page-header new-post-page-header" style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}>
        <h2 className="new-post-heading">
          <Icon name="plus" size={20} className="new-post-title-icon" />
          <span className="new-post-title-label">{headingText}</span>
          {headingPhase !== 'idle' && <span className="new-post-terminal-cursor" aria-hidden="true" />}
        </h2>
      </div>
      <div className="new-post-form-body" style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}>
        <input
          type="text"
          placeholder={t('newPost.title')}
          style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border)', borderRadius: 6, fontSize: 15, fontWeight: 600, marginBottom: 12, fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)' }}
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          rows={6}
          placeholder={t('newPost.content')}
          style={{ width: '100%', padding: 12, border: '1.5px solid var(--border)', borderRadius: 6, fontSize: 15, fontFamily: 'inherit', resize: 'vertical', background: 'var(--bg)', color: 'var(--text)' }}
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
          {!uploading && !dragOver && <Icon name="image" size={32} style={{ display: 'block', margin: '0 auto 8px', color: 'var(--text-secondary)' }} />}
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            {uploading ? t(`newPost.${uploadStage}`) : (dragOver ? t('newPost.drop') : t('newPost.dropHint'))}
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
        <div className="captcha-row" style={{ margin: '12px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
          {captcha ? (
            <CaptchaImage captcha={captcha} onRefresh={() => { API.getCaptcha().then((c) => setCaptcha(c)).catch(() => {}); setCaptchaInput(''); }} />
          ) : (
            <span style={{ color: 'var(--text-light)' }}>{t('newPost.captchaLoading')}</span>
          )}
          <input
            type="text"
            placeholder={t('newPost.answer')}
            style={{ width: 80, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', outline: 'none' }}
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>
        <button className="btn-primary" style={{ padding: '10px 32px', fontSize: 15 }} onClick={handleSubmit}>
          {uploading ? t('newPost.uploading') : t('newPost.publish')}
        </button>
      </div>
    </div>
  );
}
