"use client";

import Image from "next/image";
import { Volume2, Play, ChevronDown } from "lucide-react";

interface CricketScoreCardProps {
  team1: string;
  team2: string;
  score: string;
  wickets: string;
  overs: string;
  crr: string;
  needs: string;
  flag1: string;
  flag2: string;
  tournament: string;
  battingTeam: 1 | 2;
}

export function CricketScoreCard({
  team1,
  team2,
  score,
  wickets,
  overs,
  crr,
  needs,
  flag1,
  flag2,
  tournament,
  battingTeam,
}: CricketScoreCardProps) {
  return (
    <div className="min-w-[280px] md:min-w-[380px] p-5 rounded-2xl bg-white dark:bg-neutral-75 border border-transparent dark:border-neutral-160 flex flex-col justify-between shadow-lg dark:shadow-xl relative overflow-hidden group shrink-0 transition-colors duration-300">
      <div className="absolute top-[-10%] right-[-10%] w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(129,31,228,0.08),transparent_50%)] pointer-events-none" />

      {/* Top: LIVE NOW + match info */}
      <div className="flex justify-between items-center mb-5 relative z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full  bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-200">
          <div className="w-1.5 h-1.5 rounded-full bg-state-live animate-pulse" />
          <span className="text-[9px] text-neutral-100 dark:text-white uppercase tracking-[0.1em]">
            Live Now
          </span>
        </div>
        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 tracking-wide">
          {tournament} • {overs} Overs
        </span>
      </div>

      {/* Middle: teams + score */}
      <div className="flex justify-between items-center px-0.5 mb-5 relative z-10">
        <div className="flex flex-col items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full bg-neutral-995 dark:bg-neutral-160 flex items-center justify-center overflow-hidden border-2 transition-all ${
              battingTeam === 1
                ? "border-primary-500 shadow-[0_0_12px_rgba(129,31,228,0.25)]"
                : "border-transparent dark:border-neutral-200"
            }`}
          >
            <Image
              src={flag1}
              alt={team1}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={`text-[12px] font-black tracking-widest ${
                battingTeam === 1 ? "text-neutral-100 dark:text-white" : "text-neutral-400 dark:text-neutral-400"
              }`}
            >
              {team1}
            </span>
            {battingTeam === 1 && (
              <div className="w-1 h-1 rounded-full bg-primary-500 animate-pulse" />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex items-baseline gap-0.5">
            <span className="text-3xl font-black text-neutral-100 dark:text-white tracking-tighter transition-colors">
              {score}
            </span>
            <span className="text-xl font-black text-neutral-400 dark:text-neutral-600">/{wickets}</span>
          </div>
          <div className="mt-1 flex flex-col items-center gap-0.5">
            <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest">
              CRR: {crr}
            </span>
            <span className="text-[9px] font-medium text-neutral-400 dark:text-neutral-600">{needs}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full bg-neutral-995 dark:bg-neutral-160 flex items-center justify-center overflow-hidden border-2 transition-all ${
              battingTeam === 2
                ? "border-primary-500 shadow-[0_0_12px_rgba(129,31,228,0.25)]"
                : "border-transparent dark:border-neutral-200"
            }`}
          >
            <Image
              src={flag2}
              alt={team2}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1.5">
            {battingTeam === 2 && (
              <div className="w-1 h-1 rounded-full bg-primary-500 animate-pulse" />
            )}
            <span
              className={`text-[12px] font-black tracking-widest ${
                battingTeam === 2 ? "text-neutral-100 dark:text-white" : "text-neutral-400 dark:text-neutral-400"
              }`}
            >
              {team2}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-160/50 mb-4 relative z-10" />

      {/* Bottom: voice selector + LISTEN LIVE */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 group/voice cursor-pointer">
          <Volume2
            size={14}
            className="text-neutral-500 group-hover/voice:text-primary-500 transition-colors shrink-0"
          />
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-tight">
              Voice:
            </span>
            <span className="text-[10px] font-black text-neutral-100 dark:text-white uppercase tracking-tight transition-colors">
              Sidhu Paaji
            </span>
            <ChevronDown size={12} className="text-neutral-500 shrink-0" />
          </div>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-5 py-2 bg-primary-500 rounded-xl text-white font-black text-[10px] uppercase tracking-wider hover:bg-primary-400 transition-all shadow-lg active:scale-95"
        >
          <div className="bg-white text-primary-500 p-0.5 rounded flex items-center justify-center">
            <Play size={8} fill="currentColor" className="translate-x-0.5" />
          </div>
          Listen Live
        </button>
      </div>
    </div>
  );
}
