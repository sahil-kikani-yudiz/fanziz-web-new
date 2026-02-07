"use client";

import Image from "next/image";
import { ArrowRight, Trophy, CircleDot } from "lucide-react";

export type SeriesSport = "cricket" | "football";

export interface SeriesWidgetProps {
  sport: SeriesSport;
  name: string;
  subtitle: string;
  /** e.g. "IND vs ENG • 5 Tests" or "20 teams" */
  detail: string;
  /** e.g. "12/45" or "Matchday 12" */
  progress: string;
  status: "live" | "ongoing" | "upcoming";
  flag1?: string;
  flag2?: string;
}

export function SeriesWidget({
  sport,
  name,
  subtitle,
  detail,
  progress,
  status,
  flag1,
  flag2,
}: SeriesWidgetProps) {
  const isCricket = sport === "cricket";
  const hasFlags = isCricket && flag1 && flag2;

  return (
    <article className="min-w-[260px] sm:min-w-[300px] p-5 rounded-2xl bg-white dark:bg-neutral-75 border border-transparent dark:border-neutral-160 flex flex-col gap-4 shadow-lg dark:shadow-none relative overflow-hidden group shrink-0 transition-colors duration-300 hover:shadow-xl dark:hover:shadow-none cursor-pointer">
      <div className="absolute top-[-10%] right-[-10%] w-full h-full bg-[radial-gradient(circle_at_85%_15%,_rgba(129,31,228,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_85%_15%,_rgba(129,31,228,0.12),transparent_50%)] pointer-events-none" />

      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 flex items-center justify-center">
            {isCricket ? (
              <Trophy size={20} className="text-primary-500" />
            ) : (
              <CircleDot size={20} className="text-state-completed" />
            )}
          </div>
          <div>
            <span className="text-[9px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
              {isCricket ? "Cricket" : "Football"}
            </span>
            <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400">
              {subtitle}
            </span>
          </div>
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${
            status === "live"
              ? "bg-state-live text-white"
              : status === "ongoing"
                ? "bg-primary-500/20 dark:bg-primary-500/20 text-primary-500"
                : "bg-neutral-200 dark:bg-neutral-160 text-neutral-500 dark:text-neutral-400"
          }`}
        >
          {status === "live" ? "Live" : status === "ongoing" ? "Ongoing" : "Upcoming"}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="text-base font-black text-neutral-100 dark:text-white tracking-tight mb-1 line-clamp-1 group-hover:text-primary-500 transition-colors">
          {name}
        </h3>
        <p className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 mb-3">
          {detail}
        </p>
        {hasFlags && (
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-160 border border-transparent dark:border-neutral-75">
              <Image src={flag1} alt="" width={24} height={24} className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400">vs</span>
            <div className="w-6 h-6 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-160 border border-transparent dark:border-neutral-75">
              <Image src={flag2} alt="" width={24} height={24} className="w-full h-full object-cover" />
            </div>
          </div>
        )}
        <p className="text-[10px] font-black text-primary-500 uppercase tracking-widest">
          {progress}
        </p>
      </div>

      <button
        type="button"
        className="relative z-10 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-[10px] font-black text-neutral-100 dark:text-white uppercase tracking-widest hover:bg-primary-500 hover:text-white hover:border-transparent transition-all mt-auto"
      >
        View Series <ArrowRight size={12} />
      </button>
    </article>
  );
}
