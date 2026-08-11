'use client';

// 图片验证码：用 canvas 绘制算式（带噪点/干扰线，挡一部分人机）
// 点击图片可刷新验证码
import { useEffect, useRef } from 'react';

export default function CaptchaImage({ captcha, onRefresh }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !captcha) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    // 背景（半透明玻璃感）
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(91, 155, 213, 0.10)';
    ctx.fillRect(0, 0, W, H);

    // 干扰线
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = `rgba(${80 + Math.random() * 120}, ${80 + Math.random() * 120}, 200, ${0.2 + Math.random() * 0.3})`;
      ctx.lineWidth = 1 + Math.random();
      ctx.beginPath();
      ctx.moveTo(Math.random() * W, Math.random() * H);
      ctx.lineTo(Math.random() * W, Math.random() * H);
      ctx.stroke();
    }

    // 噪点
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 200}, ${Math.random() * 200}, 220, ${0.3 + Math.random() * 0.5})`;
      ctx.beginPath();
      ctx.arc(Math.random() * W, Math.random() * H, 1 + Math.random() * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 算式文字（每个字符轻微旋转/位移，增加识别难度）
    const text = (captcha.text || captcha.question || '').replace(' = ?', '');
    const chars = text.split('');
    const fontSize = Math.floor(H * 0.52);
    const step = W / (chars.length + 1);
    chars.forEach((ch, i) => {
      ctx.save();
      ctx.translate(step * (i + 1) + (Math.random() - 0.5) * 6, H / 2 + (Math.random() - 0.5) * 6);
      ctx.rotate((Math.random() - 0.5) * 0.25);
      ctx.font = `bold ${fontSize}px -apple-system, "SF Pro Display", "Segoe UI", Roboto, sans-serif`;
      ctx.fillStyle = `rgba(${40 + Math.random() * 60}, ${50 + Math.random() * 50}, 90, 0.9)`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(ch, 0, 0);
      ctx.restore();
    });
  }, [captcha]);

  return (
    <canvas
      ref={canvasRef}
      width={120}
      height={40}
      onClick={onRefresh}
      title="看不清？点击刷新"
      style={{ cursor: 'pointer', borderRadius: 6, border: '1px solid var(--glass-border)', verticalAlign: 'middle' }}
    />
  );
}
