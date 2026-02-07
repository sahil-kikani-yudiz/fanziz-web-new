"use client";

import Image from "next/image";
import { Play, Video } from "lucide-react";
import type { Sport } from "@/components/ui/constants";
import { isCategoryForSport } from "@/components/ui/sportContent";
import { getVideosBySport } from "@/components/ui/sportData";

export interface VideoCard {
  image: string;
  imageAlt: string;
  title: string;
  duration: string;
  views: string;
  tag?: string;
  tagColor?: string;
}

const VIDEOS: VideoCard[] = [
  { image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400&h=225", imageAlt: "Football match", title: "UCL Semi-Final: Full Match Highlights", duration: "8:42", views: "2.1M views", tag: "Soccer", tagColor: "bg-state-upcoming" },
  { image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400&h=225", imageAlt: "Basketball game", title: "NBA Finals Game 5: Last 2 Minutes", duration: "5:20", views: "1.8M views", tag: "NBA", tagColor: "bg-accent-orange" },
  { image: "https://images.unsplash.com/photo-1531415074968-036fe1c16737?auto=format&fit=crop&q=80&w=400&h=225", imageAlt: "Cricket match", title: "IND vs PAK: Full Match Recap", duration: "12:05", views: "3.2M views", tag: "Cricket", tagColor: "bg-primary-500" },
  { image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=400&h=225", imageAlt: "Tennis match", title: "Wimbledon 2025: Best Points", duration: "6:30", views: "890K views", tag: "Tennis", tagColor: "bg-state-completed" },
  { image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400&h=225", imageAlt: "NFL", title: "NFL Week 12: Top Plays", duration: "5:00", views: "1.2M views", tag: "Football", tagColor: "bg-state-live" },
  { image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=225", imageAlt: "Esports", title: "Worlds 2025: Finals Highlights", duration: "10:00", views: "2.5M views", tag: "Esports", tagColor: "bg-primary-500" },
  { image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=400&h=225", imageAlt: "Cycling", title: "Tour de France: Stage 12 Highlights", duration: "9:15", views: "456K views", tag: "Cycling", tagColor: "bg-state-completed" },
  { image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=400&h=225", imageAlt: "Rugby", title: "RWC 2025: Top 10 Tries", duration: "7:00", views: "612K views", tag: "Rugby", tagColor: "bg-primary-500" },
];

export function VideosSection({ sport }: { sport?: Sport }) {
  const videos = sport ? getVideosBySport(sport) : VIDEOS;
  return (
    <section className="pt-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-state-live flex items-center justify-center shrink-0">
            <Video size={14} className="text-white" />
          </div>
          <h3 className="text-xl font-black text-neutral-100 dark:text-white tracking-tight transition-colors">
            Videos
          </h3>
        </div>
        <button
          type="button"
          className="text-primary-500 font-black text-[10px] uppercase tracking-widest hover:underline transition-colors"
        >
          View All
        </button>
      </div>
      <div className="w-full overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-12 lg:px-12">
        <div className="flex gap-5 min-w-0 w-max max-w-full">
          {videos.map((video) => (
            <article
              key={video.title}
              className="group w-[280px] sm:w-[320px] shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-xl dark:hover:shadow-none bg-white dark:bg-neutral-75 border border-transparent dark:border-neutral-160"
            >
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <Image
                  src={video.image}
                  alt={video.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, 320px"
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] ring-2 ring-white/30 group-hover:scale-110 group-hover:bg-black/70 transition-all flex-shrink-0">
                    <Play size={22} className="text-white fill-white ml-0.5 sm:ml-1" strokeWidth={2} />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold">
                  {video.duration}
                </span>
                {video.tag && (
                  <span
                    className={`absolute top-2 left-2 px-2.5 py-0.5 rounded-lg text-[9px] font-black text-white uppercase tracking-widest ${video.tagColor ?? "bg-primary-500"}`}
                  >
                    {video.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-sm font-black text-neutral-100 dark:text-white leading-tight line-clamp-2 transition-colors group-hover:text-primary-500">
                  {video.title}
                </h4>
                <p className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 mt-1">
                  {video.views}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
