"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  thumbnail: string;
  category: string;
  categoryColor?: string;
  views: string;
  timestamp: string;
  autoplay?: boolean;
}

export function VideoPlayer({
  videoId,
  title,
  thumbnail,
  category,
  categoryColor = "bg-primary-500",
  views,
  timestamp,
  autoplay = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-950">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-160 group cursor-pointer" onClick={handlePlay}>
      <Image src={thumbnail} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 70vw" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      {/* Category badge */}
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-white ${categoryColor}`}>{category}</span>
      </div>

      {/* Duration badge */}
      <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/70 backdrop-blur-sm">
        <span className="text-white text-xs font-bold">{timestamp}</span>
      </div>

      {/* Play button */}
      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-2xl" type="button">
        <Play size={32} fill="currentColor" className="ml-1" />
      </button>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 text-white/80 text-xs">
          <span>{views} views</span>
          <span>•</span>
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
}
