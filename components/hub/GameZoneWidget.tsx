"use client";

import { LayoutGrid, Puzzle, HelpCircle, Dices } from "lucide-react";
import g1 from "./../../assets/g1.jpg"
import g2 from "./../../assets/g2.jpg"
import g3 from "./../../assets/g3.jpg"
import g4 from "./../../assets/g4.jpg"

const GAME_ZONE_ITEMS = [
  { icon: Puzzle, name: "Zip Puzzle", image: g1, colorClass: "text-accent-cyan" },
  { icon: LayoutGrid, name: "Tic Tac Toe", image: g2, colorClass: "text-state-completed" },
  { icon: HelpCircle, name: "Quiz", image: g3, colorClass: "text-accent-orange" },
  { icon: Dices, name: "Predict", image: g4, colorClass: "text-primary-500" },
] as const;

export function GameZoneWidget() {
  return (
    <div className="rounded-[2rem] bg-white dark:bg-neutral-75 overflow-hidden relative transition-colors shadow-lg dark:shadow-none border border-transparent dark:border-neutral-160">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(129,31,228,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,_rgba(129,31,228,0.15),transparent_50%)] pointer-events-none" />
      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h5 className="text-[12px] font-black text-neutral-100 dark:text-white uppercase tracking-widest transition-colors">
            Game Zone
          </h5>
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl text-[10px] font-black text-white uppercase tracking-widest bg-gradient-to-r bg-primary-500 hover:opacity-90 transition-opacity shadow-lg"
          >
            Play & Win
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {GAME_ZONE_ITEMS.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.name}
                className="relative overflow-hidden min-h-28 flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-neutral-995 dark:bg-neutral-160/40 border border-transparent dark:border-neutral-75 hover:bg-neutral-160/40 dark:hover:bg-neutral-160/60 transition-all cursor-pointer group"
                style={{ backgroundImage: `url(${g.image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
    
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
