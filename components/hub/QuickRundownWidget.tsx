"use client";

interface QuickRundownWidgetProps {
  points: string[];
}

export function QuickRundownWidget({ points }: QuickRundownWidgetProps) {
  return (
    <div>
      <h4 className="text-[12px] font-black text-neutral-100 dark:text-white uppercase tracking-widest mb-4 transition-colors">
        Quick rundown
      </h4>
      <ol className="space-y-3">
        {points.map((point, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 shrink-0">
              {idx + 1}.
            </span>
            <span className="text-[13px] text-neutral-100 dark:text-white leading-snug">
              {point}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
