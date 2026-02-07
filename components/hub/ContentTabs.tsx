"use client";

import { LayoutGrid, FileText, Radio, Play } from "lucide-react";

const TABS = [
  { name: "All", icon: LayoutGrid },
  { name: "News", icon: FileText },
  { name: "Reels", icon: Radio },
  { name: "Videos", icon: Play },
] as const;

export function ContentTabs() {
  return (
    <div className="flex gap-2 p-1 rounded-2xl bg-neutral-50 border border-neutral-160 w-fit">
      {TABS.map((tab, index) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.name}
            type="button"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              index === 0
                ? "bg-primary-500 text-white shadow-lg"
                : "text-neutral-500 hover:text-white"
            }`}
          >
            <Icon size={14} />
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}
