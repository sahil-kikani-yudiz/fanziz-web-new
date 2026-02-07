"use client";

import Image from "next/image";
import { ArrowRight, Trophy, CircleDot } from "lucide-react";

export type SeriesSport = "cricket" | "football";

export interface SeriesWidgetCompactProps {
  sport: SeriesSport;
  name: string;
  /** e.g. "Matchday 12" or "2/5 Tests" */
  progress: string;
  status: "live" | "ongoing" | "upcoming";
  flag1?: string;
  flag2?: string;
}

export function SeriesWidgetCompact({
  sport,
  name,
  progress,
  status,
  flag1,
  flag2,
}: SeriesWidgetCompactProps) {
  const isCricket = sport === "cricket";
  const hasFlags = isCricket && flag1 && flag2;

  return (
    <button
      type="button"
      className="w-full flex items-center gap-3 p-3 rounded-xl bg-neutral-995 dark:bg-neutral-160/40 border border-transparent dark:border-neutral-75 hover:bg-neutral-992 dark:hover:bg-neutral-160/60 transition-colors text-left group"
    >
      <div className="w-9 h-9 rounded-lg bg-neutral-800 dark:bg-neutral-75 flex items-center justify-center shrink-0">
        {isCricket ? (
          <Trophy size={16} className="text-primary-500" />
        ) : (
          <CircleDot size={16} className="text-state-completed" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-black text-neutral-100 dark:text-white truncate group-hover:text-primary-500 transition-colors">
          {name}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          {hasFlags && (
            <>
              <div className="w-4 h-4 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-160 shrink-0">
                <Image src={flag1} alt="" width={16} height={16} className="w-full h-full object-cover" />
              </div>
              <span className="text-[8px] text-neutral-500">vs</span>
              <div className="w-4 h-4 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-160 shrink-0">
                <Image src={flag2} alt="" width={16} height={16} className="w-full h-full object-cover" />
              </div>
              <span className="text-neutral-400 dark:text-neutral-500">·</span>
            </>
          )}
          <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500">{progress}</span>
        </div>
      </div>
      <span
        className={`shrink-0 px-1.5 py-0.5 rounded text-[8px] font-black uppercase ${
          status === "live"
            ? "bg-state-live text-white"
            : status === "ongoing"
              ? "bg-primary-500/20 text-primary-500"
              : "bg-neutral-200 dark:bg-neutral-160 text-neutral-500"
        }`}
      >
        {status === "live" ? "Live" : status === "ongoing" ? "On" : "Up"}
      </span>
      <ArrowRight size={12} className="text-neutral-400 group-hover:text-primary-500 shrink-0 transition-colors" />
    </button>
  );
}

const CRICKET_ITEMS: SeriesWidgetCompactProps[] = [
  { sport: "cricket", name: "T20 World Cup 2025", progress: "18/45", status: "ongoing", flag1: "https://flagcdn.com/in.svg", flag2: "https://flagcdn.com/pk.svg" },
  { sport: "cricket", name: "The Ashes 2025", progress: "2/5 Tests", status: "live", flag1: "https://flagcdn.com/au.svg", flag2: "https://flagcdn.com/gb.svg" },
  { sport: "cricket", name: "T20 World Cup 2025", progress: "18/45", status: "ongoing", flag1: "https://flagcdn.com/in.svg", flag2: "https://flagcdn.com/pk.svg" },
];

const FOOTBALL_ITEMS: SeriesWidgetCompactProps[] = [
  { sport: "football", name: "Premier League", progress: "MD 12", status: "live" },
  { sport: "football", name: "UCL 2025/26", progress: "MD 4", status: "ongoing" },
];

export function SeriesSidebar() {
  return (
    <div className="rounded-[2rem] bg-white dark:bg-neutral-75 overflow-hidden relative transition-colors shadow-lg dark:shadow-none border border-transparent dark:border-neutral-160">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(129,31,228,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,_rgba(129,31,228,0.1),transparent_50%)] pointer-events-none" />
      <div className="relative z-10 p-5 sm:p-6">
        <h5 className="text-[12px] font-black text-neutral-100 dark:text-white uppercase tracking-widest mb-4 transition-colors">
          Series
        </h5>
        <div className="space-y-3">
          <p className="text-[9px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
            Cricket
          </p>
          {CRICKET_ITEMS.map((s) => (
            <SeriesWidgetCompact key={`c-${s.name}`} {...s} />
          ))}
          <p className="text-[9px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pt-2">
            Football
          </p>
          {FOOTBALL_ITEMS.map((s) => (
            <SeriesWidgetCompact key={`f-${s.name}`} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}
