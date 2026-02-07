"use client";

import Image from "next/image";
import type { VideoReel } from "@/components/ui/sportData";

interface ReelsSidebarProps {
  reels: VideoReel[];
  onReelClick?: (index: number) => void;
}

export function ReelsSidebar({ reels, onReelClick }: ReelsSidebarProps) {
  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-white dark:bg-neutral-50 transition-colors">
      <div className="p-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-6 ">
          <button className="px-4 py-2 text-sm font-bold text-neutral-100 dark:text-white border-b-2 border-primary-500 transition-colors" type="button">
            For You
          </button>
          <button className="px-4 py-2 text-sm font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-100 dark:hover:text-white transition-colors" type="button">
            Live Now
          </button>
          <button className="px-4 py-2 text-sm font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-100 dark:hover:text-white transition-colors" type="button">
            Premier League
          </button>
          <button className="px-4 py-2 text-sm font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-100 dark:hover:text-white transition-colors" type="button">
            NBA Highlights
          </button>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 gap-4">
          {reels.map((reel, index) => (
            <button
              key={reel.id}
              onClick={() => onReelClick?.(index)}
              className="group relative aspect-[9/14] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-160 cursor-pointer"
              type="button"
            >
              <Image src={reel.thumbnail} alt={reel.thumbnailAlt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="250px" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

              {/* Category tag */}
              {reel.categoryTag && (
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider text-white ${
                      reel.categoryTag === "LIVE"
                        ? "bg-red-500"
                        : reel.categoryTag === "EXPLODE"
                        ? "bg-purple-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {reel.categoryTag}
                  </span>
                </div>
              )}

              {/* Views count */}
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] font-bold text-white">{reel.views}</span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white text-xs font-bold mb-1 line-clamp-2 leading-tight">{reel.title}</h3>
                <div className="flex items-center gap-1.5">
                  <Image src={reel.authorAvatar} alt={reel.author} width={16} height={16} className="w-4 h-4 rounded-full object-cover" />
                  <span className="text-white/80 text-[10px] font-medium">{reel.author}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
