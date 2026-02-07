"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";

interface ArticleAudioPlayerProps {
  articleTitle: string;
}

export function ArticleAudioPlayer({ articleTitle }: ArticleAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(160); // 2:40 as shown in the image
  const progressRef = useRef<HTMLDivElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    setCurrentTime(percentage * duration);
  };

  // Simulate playback
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= duration) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const progress = (currentTime / duration) * 100;

  return (
    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-white/80 dark:bg-neutral-50/80 px-6 py-3 transition-colors rounded-2xl mx-6 mb-4 shadow-lg ">
      {/* Progress bar */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(129,31,228,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,_rgba(129,31,228,0.15),transparent_50%)] pointer-events-none" />
      <div
        ref={progressRef}
        className="w-full h-1 bg-neutral-200/60 dark:bg-neutral-160/60 rounded-full mb-3 cursor-pointer relative overflow-hidden"
        onClick={handleProgressClick}
      >
        <div
          className="absolute top-0 left-0 h-full bg-primary-500 rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Time display */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300">
          {formatTime(currentTime)}
        </span>
        <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300">
          {formatTime(duration)}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label="Shuffle"
        >
          <Shuffle size={18} />
        </button>
        <button
          type="button"
          className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label="Previous"
        >
          <SkipBack size={20} fill="currentColor" />
        </button>
        <button
          type="button"
          onClick={handlePlayPause}
          className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/30"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
        </button>
        <button
          type="button"
          className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label="Next"
        >
          <SkipForward size={20} fill="currentColor" />
        </button>
        <button
          type="button"
          className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label="Repeat"
        >
          <Repeat size={18} />
        </button>
      </div>
    </div>
  );
}
