import React from 'react';
import { useCart } from '../../context/CartContext';
import { Check, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between p-4 bg-[#111116]/95 border border-[#d4ff00]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl rounded-lg animate-in slide-in-from-bottom-2 duration-300"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-7 h-7 rounded-full bg-[#d4ff00] text-black flex items-center justify-center shrink-0">
              <Check size={14} strokeWidth={3} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono-tech tracking-wider uppercase text-[#d4ff00]">
                {toast.title}
              </p>
              <p className="text-sm font-medium text-white truncate">{toast.description}</p>
            </div>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="p-1 rounded text-white/40 hover:text-white transition ml-2 shrink-0"
            aria-label="Dismiss toast"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};
