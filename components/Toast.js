'use client';

// Toast 通知系统：右上角弹出，自动消失（替代 alert）
// 用法：const { toast } = useToast(); toast('发布成功', 'success');
// 注意：不用 createPortal（SSR 时 document 不存在会造成 hydration mismatch，
// 导致整树重建）。toast-container 是 position:fixed，渲染位置不影响视觉。
import { createContext, useContext, useState, useCallback, useRef } from 'react';

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

let idCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  const toast = useCallback((message, type = 'success', duration = 3000) => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, message, type }]);
    if (timersRef.current[id]) clearTimeout(timersRef.current[id]);
    timersRef.current[id] = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      delete timersRef.current[id];
    }, duration);
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timersRef.current[id]) { clearTimeout(timersRef.current[id]); delete timersRef.current[id]; }
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={'toast toast-' + t.type} onClick={() => dismiss(t.id)}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
