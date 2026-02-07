"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Lingo } from "@/components/ui/constants";

interface BottomBarProps {
  activeLingo: Lingo;
  onOpenLingoPicker: () => void;
}

export function BottomBar({ activeLingo, onOpenLingoPicker }: BottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 py-4 bg-white/95 dark:bg-neutral-0/90 backdrop-blur-xl border-t border-transparent dark:border-neutral-160 transition-colors duration-300 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-none">
      <Container>
      <button
        type="button"
        onClick={onOpenLingoPicker}
        className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-neutral-100 dark:text-white font-black text-[11px] uppercase tracking-widest hover:bg-neutral-750 dark:hover:bg-neutral-75 transition-colors"
      >
        <Image
          src={activeLingo.avatar}
          alt={activeLingo.name}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full object-cover border-2 border-transparent dark:border-neutral-75"
        />
        Pick your Lingos
        <ChevronDown size={18} />
      </button>
      </Container>
    </div>
  );
}
