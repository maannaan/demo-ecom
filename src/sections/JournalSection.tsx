import React from 'react';
import type { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../data/journal';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="journal" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={14} className="text-[#d4ff00]" />
              <span className="text-xs font-mono-tech tracking-widest text-[#d4ff00] uppercase">
                THE DISPATCH // EDITORIAL
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-editorial tracking-tight text-white uppercase">
              JOURNAL.
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-md font-mono-tech leading-relaxed">
            Essays on architectural fashion, ergonomic theory, and the philosophy behind our underground laboratory.
          </p>
        </div>

        {/* 3 Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group relative flex flex-col justify-between bg-[#111116] border border-white/10 hover:border-[#d4ff00]/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              <div>
                {/* Meta Top */}
                <div className="flex items-center justify-between text-xs font-mono-tech text-white/40 mb-4 pb-3 border-b border-white/5">
                  <span className="text-[#d4ff00] font-semibold uppercase">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {article.readTime}
                  </span>
                </div>

                <span className="text-[10px] font-mono-tech text-white/30 uppercase tracking-widest block mb-2">
                  DISPATCH 0{idx + 1} // {article.date}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-editorial text-white group-hover:text-[#d4ff00] transition leading-snug mb-4">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Author & Read Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">{article.author}</span>
                  <span className="text-[10px] font-mono-tech text-white/40">{article.authorRole}</span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono-tech text-[#d4ff00] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  READ ESSAY <ArrowUpRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
