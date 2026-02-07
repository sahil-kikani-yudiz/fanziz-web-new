"use client";

import Image from "next/image";
import { Play } from "lucide-react";

interface RelatedVideoCardProps {
  videoId: string;
  thumbnail: string;
  title: string;
  views: string;
  duration: string;
  category: string;
  categoryColor?: string;
  onVideoSelect?: (videoId: string) => void;
}

export function RelatedVideoCard({
  videoId,
  thumbnail,
  title,
  views,
  duration,
  category,
  categoryColor = "bg-primary-500",
  onVideoSelect,
}: RelatedVideoCardProps) {
  return (
    <button
      onClick={() => onVideoSelect?.(videoId)}
      className="group flex gap-3 rounded-xl bg-white dark:bg-neutral-50 border border-transparent dark:border-neutral-160 p-3 cursor-pointer transition-colors hover:bg-neutral-995 dark:hover:bg-neutral-75/50 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none w-full text-left"
      type="button"
    >
      <div className="relative w-40 shrink-0 aspect-video rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-160">
        <Image src={thumbnail} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="160px" />

        {/* Duration */}
        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm">
          <span className="text-white text-[9px] font-bold">{duration}</span>
        </div>

        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
            <Play size={16} fill="currentColor" className="text-primary-500 ml-0.5" />
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="mb-1">
          <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider text-white ${categoryColor}`}>{category}</span>
        </div>
        <h3 className="text-sm font-bold text-neutral-100 dark:text-white leading-tight line-clamp-2 mb-1 group-hover:opacity-75 transition-opacity">{title}</h3>
        <p className="text-[10px] text-neutral-400 dark:text-neutral-500">{views} views</p>
      </div>
    </button>
  );
}
