"use client";

import Image from "next/image";
import { ChevronLeft, ChevronDown, CheckCircle2, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LINGOS } from "@/components/ui/constants";
import type { Lingo } from "@/components/ui/constants";

interface LingoSelectionProps {
  onClose: () => void;
  selectedId: string;
  onSelect: (id: string) => void;
}

export function LingoSelection({
  onClose,
  selectedId,
  onSelect,
}: LingoSelectionProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-white/98 dark:bg-neutral-0/95 backdrop-blur-xl flex flex-col animate-in transition-colors">
      <div className="border-b border-transparent dark:border-neutral-160 py-4 transition-colors">
      <Container className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-neutral-995 dark:hover:bg-neutral-160 rounded-full transition-colors text-neutral-100 dark:text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-xl font-black text-neutral-100 dark:text-white tracking-tight uppercase transition-colors">
            Pick your Lingos
          </h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-neutral-995 dark:bg-neutral-160 rounded-full text-[11px] font-black text-neutral-100 dark:text-white uppercase tracking-widest border border-transparent dark:border-neutral-75 transition-colors"
        >
          Asia <ChevronDown size={14} />
        </button>
      </Container>
      </div>

      <div className="p-6 flex items-center gap-3 bg-primary-500/10 dark:bg-primary-500/5 text-primary-500 transition-colors">
        <Container className="flex items-center gap-3">
        <Info size={16} />
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
          Long-Press any character to see their description.
        </span>
        </Container>
      </div>

      <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
        <Container>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {LINGOS.map((lingo) => (
            <div
              key={lingo.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(lingo.id)}
              onKeyDown={(e) => e.key === "Enter" && onSelect(lingo.id)}
              className={`relative group cursor-pointer p-4 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
                selectedId === lingo.id
                  ? "bg-primary-900/10 border-primary-500 shadow-[0_0_20px_rgba(129,31,228,0.2)]"
                  : "bg-neutral-100 dark:bg-neutral-160/30 border-transparent dark:border-neutral-160 hover:border-transparent dark:hover:border-neutral-75"
              }`}
            >
              <div
                className={`absolute top-2 right-2 transition-opacity ${
                  selectedId === lingo.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <CheckCircle2
                  size={16}
                  className="text-primary-500 fill-white"
                />
              </div>
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-neutral-996 dark:bg-white border-2 overflow-hidden transition-transform group-hover:scale-105 ${
                  selectedId === lingo.id ? "border-primary-500" : "border-transparent dark:border-neutral-75"
                }`}
              >
                <Image
                  src={lingo.avatar}
                  alt={lingo.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-[11px] font-black tracking-tight text-center transition-colors ${
                  selectedId === lingo.id ? "text-primary-500" : "text-neutral-500 dark:text-neutral-500"
                }`}
              >
                {lingo.name}
              </span>
            </div>
          ))}
        </div>
        </Container>
      </div>

      <div className="p-8 border-t border-transparent dark:border-neutral-160 bg-white dark:bg-neutral-0 transition-colors">
        <Container>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-primary-500 text-white py-4 rounded-full font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-400 transition-all"
        >
          Confirm Selection
        </button>
        </Container>
      </div>
    </div>
  );
}
