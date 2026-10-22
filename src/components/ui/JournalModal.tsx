import React, { useEffect } from 'react';
import type { JournalArticle } from '../../types';
import { X, Clock, Calendar, Bookmark, Share2 } from 'lucide-react';

interface JournalModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && article) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[85vh] bg-[#0c0c10] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-10"
        role="dialog"
        aria-label={article.title}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/60 text-white/70 hover:text-white border border-white/10 transition"
          aria-label="Close article"
        >
          <X size={18} />
        </button>

        {/* Metadata Header */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech text-white/50 mb-4">
          <span className="text-[#d4ff00] uppercase font-semibold">{article.category}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {article.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {article.date}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-white leading-tight mb-6">
          {article.title}
        </h2>

        {/* Author Credit */}
        <div className="flex items-center gap-3 pb-6 mb-8 border-b border-white/10">
          <div className="w-10 h-10 rounded-full bg-[#181820] border border-white/10 flex items-center justify-center font-mono-tech text-xs text-[#d4ff00]">
            NF
          </div>
          <div>
            <p className="text-sm font-bold text-white">{article.author}</p>
            <p className="text-xs font-mono-tech text-white/50">{article.authorRole} · NOIR//FORM LABS</p>
          </div>
        </div>

        {/* Pull Quote */}
        {article.quote && (
          <blockquote className="p-6 my-6 bg-[#121218] border-l-2 border-[#d4ff00] rounded-r-lg italic text-lg text-white font-serif">
            "{article.quote}"
          </blockquote>
        )}

        {/* Article Body */}
        <div className="space-y-5 text-white/80 leading-relaxed text-base sm:text-lg">
          {article.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono-tech text-white/40 uppercase tracking-widest">
            NOIR//FORM EDITORIAL DISPATCH
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => alert('Article bookmarked in local reading cache.')}
              className="p-2 rounded bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition"
              title="Bookmark essay"
            >
              <Bookmark size={16} />
            </button>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="p-2 rounded bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition"
              title="Share essay"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
