import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#111111] text-white border border-[#3B82F6]/60 shadow-2xl rounded-none font-mono-code text-xs tracking-wider animate-in slide-in-from-top-4 fade-in duration-200">
      <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="p-1 hover:text-[#3B82F6] transition-colors cursor-pointer ml-2"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
