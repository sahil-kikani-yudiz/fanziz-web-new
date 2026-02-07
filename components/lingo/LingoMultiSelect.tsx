"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Info, MapPin, ChevronDown, Check } from "lucide-react";
import { LINGOS } from "@/components/ui/constants";
import type { Lingo } from "@/components/ui/constants";

interface LingoMultiSelectProps {
  /** Initial set of selected Lingo IDs (e.g. for news feed). */
  initialSelectedIds?: string[];
  /** Called when the user changes selection. */
  onSelectionChange?: (selectedIds: string[]) => void;
}

export function LingoMultiSelect({
  initialSelectedIds = ["10"],
  onSelectionChange,
}: LingoMultiSelectProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(initialSelectedIds)
  );

  const toggle = useCallback(
    (id: string) => {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        onSelectionChange?.(Array.from(next));
        return next;
      });
    },
    [onSelectionChange]
  );

  return (
    <div className="rounded-[2rem] bg-white dark:bg-neutral-75 overflow-hidden relative transition-colors shadow-lg dark:shadow-none border border-transparent dark:border-neutral-160">
      <div className="relative z-10 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h5 className="text-[12px] font-black text-neutral-100 dark:text-white uppercase tracking-widest transition-colors">
            Pick your Lingos
          </h5>
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-[10px] font-black text-neutral-100 dark:text-white uppercase tracking-widest transition-colors hover:bg-neutral-992 dark:hover:bg-neutral-160/80"
          >
            <MapPin size={12} className="shrink-0" />
            Asia <ChevronDown size={12} />
          </button>
        </div>



        <div className="grid grid-cols-3 gap-3">
          {LINGOS.map((lingo) => {
            const selected = selectedIds.has(lingo.id);
            return (
              <button
                key={lingo.id}
                type="button"
                onClick={() => toggle(lingo.id)}
                title={lingo.description}
                className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all text-left ${
                  selected
                    ? "border-primary-500 bg-primary-900/10 dark:bg-primary-500/10 shadow-[0_0_0_1px_rgba(129,31,228,0.3)]"
                    : "border-transparent dark:border-neutral-160 bg-neutral-996 dark:bg-neutral-160/40 hover:border-neutral-300 dark:hover:border-neutral-75"
                }`}
              >
                <div
                  className={`absolute top-2 right-2 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                    selected
                      ? "border-primary-500 bg-primary-500/10"
                      : "border-neutral-300 dark:border-neutral-75 bg-white dark:bg-neutral-75"
                  }`}
                >
                  {selected ? (
                    <Check size={12} className="text-primary-500 stroke-[3]" />
                  ) : null}
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-75 shrink-0 ring-2 ring-transparent transition-all">
                  <Image
                    src={lingo.avatar}
                    alt={lingo.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className={`text-[10px] font-black tracking-tight text-center leading-tight transition-colors ${
                    selected
                      ? "text-primary-500 dark:text-primary-400"
                      : "text-neutral-100 dark:text-white"
                  }`}
                >
                  {lingo.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
