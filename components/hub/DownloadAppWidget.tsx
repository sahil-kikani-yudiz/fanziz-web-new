"use client";

import { Smartphone, ArrowRight } from "lucide-react";

export function DownloadAppWidget() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary-500/15 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-600/15 border border-primary-500/20 dark:border-primary-500/30 overflow-hidden relative transition-colors">
      <div className="relative z-10 p-5">
        <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-4 shadow-lg">
          <Smartphone size={24} className="text-white" />
        </div>
        <h5 className="text-[12px] font-black text-neutral-100 dark:text-white uppercase tracking-widest mb-1 transition-colors">
          Get the full experience
        </h5>
        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-4">
          Download our app for live scores, reels & more.
        </p>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-500 text-white text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Download our app
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
