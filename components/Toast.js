'use client';

// Toast 通知系统：右上角弹出，自动消失（替代 alert）
// 用法：const { toast } = useToast(); toast('发布成功', 'success');
// 注意：不用 createPortal（SSR 时 document 不存在会造成 hydration mismatch，
// 导致整树重建）。toast-container 是 position:fixed，渲染位置不影响视觉。
import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { Icon } from './Icons';

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

let idCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [dialog, setDialog] = useState(null);
  const timersRef = useRef({});
  const dialogTimerRef = useRef(null);
  const dialogResolverRef = useRef(null);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
    delete timersRef.current[id];
  }, []);

  const dismiss = useCallback((id) => {
    if (timersRef.current[id]) clearTimeout(timersRef.current[id]);
    setToasts((prev) => prev.map((item) => item.id === id ? { ...item, closing: true } : item));
    timersRef.current[id] = setTimeout(() => removeToast(id), 220);
  }, [removeToast]);

  const toast = useCallback((message, type = 'success', duration = 3000) => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, message, type, closing: false }]);
    if (timersRef.current[id]) clearTimeout(timersRef.current[id]);
    timersRef.current[id] = setTimeout(() => dismiss(id), duration);
  }, [dismiss]);

  const confirmAction = useCallback((message, options = {}) => {
    if (dialogResolverRef.current) dialogResolverRef.current(false);
    const isEnglish = localStorage.getItem('forumlify-lang') === 'en';
    setDialog({
      message,
      title: options.title || (isEnglish ? 'Confirm action' : '确认操作'),
      confirmLabel: options.confirmLabel || (isEnglish ? 'Confirm' : '确定'),
      cancelLabel: options.cancelLabel || (isEnglish ? 'Cancel' : '取消'),
      danger: options.danger !== false,
      closing: false,
    });
    return new Promise((resolve) => {
      dialogResolverRef.current = resolve;
    });
  }, []);

  const closeDialog = useCallback((result) => {
    setDialog((current) => current ? { ...current, closing: true } : current);
    if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
    dialogTimerRef.current = setTimeout(() => {
      setDialog(null);
      const resolve = dialogResolverRef.current;
      dialogResolverRef.current = null;
      if (resolve) resolve(result);
    }, 340);
  }, []);

  useEffect(() => () => {
    Object.values(timersRef.current).forEach(clearTimeout);
    if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
    if (dialogResolverRef.current) dialogResolverRef.current(false);
  }, []);

  return (
    <ToastContext.Provider value={{ toast, confirmAction }}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={'toast toast-' + t.type + (t.closing ? ' closing' : '')} onClick={() => dismiss(t.id)} role="status">
            <Icon name={t.type === 'error' ? 'error' : t.type === 'warning' ? 'warning' : 'success'} size={16} />
            <span>{t.message}</span>
          </div>
        ))}
      </div>
      {dialog && (
        <div className={'modal active feedback-confirm' + (dialog.closing ? ' closing' : '')} onClick={(e) => { if (e.target === e.currentTarget) closeDialog(false); }}>
          <div className="modal-content" role="alertdialog" aria-modal="true" aria-labelledby="feedbackConfirmTitle" aria-describedby="feedbackConfirmMessage">
            <h2 id="feedbackConfirmTitle"><Icon name="warning" size={20} /> {dialog.title}</h2>
            <p id="feedbackConfirmMessage">{dialog.message}</p>
            <div className="feedback-confirm-actions">
              <button className={dialog.danger ? 'btn-danger' : 'btn-primary'} onClick={() => closeDialog(true)}>{dialog.confirmLabel}</button>
              <button className="btn-secondary" onClick={() => closeDialog(false)}>{dialog.cancelLabel}</button>
            </div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}
