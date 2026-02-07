"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Heart, Share2, Play, Pause } from "lucide-react";
import type { VideoReel } from "@/components/ui/sportData";

interface ReelViewProps {
  reels: VideoReel[];
  showSuggestions?: boolean;
}

export function ReelView({ reels, showSuggestions = false }: ReelViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollOffsetPercent, setScrollOffsetPercent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleResetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentReel = reels[currentIndex];
  const SCROLL_SENSITIVITY = 0.18;
  const SNAP_THRESHOLD = 50;
  const SNAP_DURATION = 500;
  const IDLE_RESET_DELAY = 150;

  const resetToCenter = useCallback(() => {
    if (isTransitioning) return;
    if (Math.abs(scrollOffsetPercent) < 1) return;
    
    setIsTransitioning(true);
    setScrollOffsetPercent(0);
    
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    transitionTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, SNAP_DURATION);
  }, [isTransitioning, scrollOffsetPercent]);

  const commitNext = useCallback(() => {
    if (currentIndex >= reels.length - 1 || isTransitioning) return;
    
    if (idleResetTimeout.current) clearTimeout(idleResetTimeout.current);
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    
    // Pause current video
    const currentVideo = videoRefs.current[reels[currentIndex].id];
    if (currentVideo) currentVideo.pause();
    
    setIsTransitioning(true);
    setScrollOffsetPercent(-100);
    
    transitionTimeout.current = setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setScrollOffsetPercent(0);
      setIsTransitioning(false);
      setIsPlaying(true);
    }, SNAP_DURATION);
  }, [reels, currentIndex, isTransitioning]);

  const commitPrev = useCallback(() => {
    if (currentIndex <= 0 || isTransitioning) return;
    
    if (idleResetTimeout.current) clearTimeout(idleResetTimeout.current);
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    
    // Pause current video
    const currentVideo = videoRefs.current[reels[currentIndex].id];
    if (currentVideo) currentVideo.pause();
    
    setIsTransitioning(true);
    setScrollOffsetPercent(100);
    
    transitionTimeout.current = setTimeout(() => {
      setCurrentIndex((i) => i - 1);
      setScrollOffsetPercent(0);
      setIsTransitioning(false);
      setIsPlaying(true);
    }, SNAP_DURATION);
  }, [reels, currentIndex, isTransitioning]);

  const handleWheelOnReel = useCallback(
    (e: React.WheelEvent) => {
      if (isTransitioning) return;
      
      if (idleResetTimeout.current) clearTimeout(idleResetTimeout.current);
      
      const delta = -e.deltaY * SCROLL_SENSITIVITY;
      
      setScrollOffsetPercent((prev) => {
        let next = prev + delta;
        
        // Strict bounds: prevent scrolling into blank areas
        const isAtFirst = currentIndex === 0;
        const isAtLast = currentIndex === reels.length - 1;
        
        if (isAtFirst && next > 0) {
          next = 0; // No upward scroll on first reel
        }
        if (isAtLast && next < 0) {
          next = 0; // No downward scroll on last reel
        }
        
        // Clamp to reasonable range for middle reels
        if (!isAtFirst && !isAtLast) {
          next = Math.max(-100, Math.min(100, next));
        } else if (isAtFirst) {
          next = Math.max(-100, Math.min(0, next));
        } else if (isAtLast) {
          next = Math.max(0, Math.min(100, next));
        }
        
        // Auto-commit when threshold crossed
        if (next <= -SNAP_THRESHOLD && currentIndex < reels.length - 1) {
          commitNext();
          return prev;
        }
        if (next >= SNAP_THRESHOLD && currentIndex > 0) {
          commitPrev();
          return prev;
        }
        
        return next;
      });
      
      // Auto-reset to center if user stops mid-scroll
      idleResetTimeout.current = setTimeout(() => {
        resetToCenter();
      }, IDLE_RESET_DELAY);
    },
    [currentIndex, reels.length, isTransitioning, commitNext, commitPrev, resetToCenter]
  );

  useEffect(() => {
    return () => {
      if (idleResetTimeout.current) clearTimeout(idleResetTimeout.current);
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    };
  }, []);

  // Auto-play current video when index changes
  useEffect(() => {
    const currentVideo = videoRefs.current[reels[currentIndex]?.id];
    if (currentVideo && isPlaying) {
      currentVideo.play().catch(() => {
        // Auto-play might be blocked, ignore error
      });
    }
  }, [currentIndex, reels, isPlaying]);

  const handlePlayPause = useCallback(() => {
    const currentVideo = videoRefs.current[reels[currentIndex]?.id];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play().catch(() => {});
      }
    }
    setIsPlaying(!isPlaying);
  }, [currentIndex, reels, isPlaying]);

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev" && currentIndex > 0) {
      commitPrev();
    } else if (direction === "next" && currentIndex < reels.length - 1) {
      commitNext();
    }
  };

  const renderReelSlide = (reel: VideoReel | undefined, offset: number) => {
    if (!reel) return null;

    return (
      <div
        key={reel.id}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offset}%)`,
          transition: isTransitioning ? `transform ${SNAP_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)` : "none",
        }}
      >
        <div className="relative w-full h-[calc(100%-16px)] bg-neutral-950 dark:bg-neutral-0 rounded-3xl overflow-hidden my-2">
          {/* Video or Image */}
          {reel.videoUrl ? (
            <video
              ref={(el) => {
                videoRefs.current[reel.id] = el;
              }}
              src={reel.videoUrl}
              poster={reel.thumbnail}
              className="w-full h-full object-cover"
              loop
              playsInline
              muted={false}
            />
          ) : (
            <Image src={reel.thumbnail} alt={reel.thumbnailAlt} fill className="object-cover" sizes="70vw" priority />
          )}

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

          {/* Right side: Action buttons - Only Like and Share */}
          <div className="absolute right-6 bottom-32 flex flex-col gap-6">
            <button className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform" type="button">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Heart size={24} />
              </div>
              <span className="text-xs font-bold">{reel.likes}</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform" type="button">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Share2 size={24} />
              </div>
              <span className="text-xs font-bold">Share</span>
            </button>
          </div>

          {/* Bottom: Video title and credits */}
          <div className="absolute bottom-6 left-6 right-24 flex flex-col gap-3">
            <h3 className="text-white font-bold text-lg line-clamp-2">{reel.title}</h3>
            
            <div className="flex items-center gap-2">
              <span className="text-white/80 text-xs">© CricTracker</span>
              <span className="text-white/60 text-xs">•</span>
              <span className="text-white/60 text-xs">{reel.duration}</span>
            </div>
          </div>

          {/* Center: Play/Pause button */}
          {reel.videoUrl && (
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:scale-110 transition-all opacity-0 hover:opacity-100"
              type="button"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
          )}
        </div>
      </div>
    );
  };

  const prevReel = currentIndex > 0 ? reels[currentIndex - 1] : undefined;
  const nextReel = currentIndex < reels.length - 1 ? reels[currentIndex + 1] : undefined;

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/* Main Reel Player */}
      <div ref={containerRef} onWheel={handleWheelOnReel} className="relative w-full lg:max-w-[400px] h-full overflow-hidden mx-auto lg:mx-0">
        {renderReelSlide(prevReel, 100 + scrollOffsetPercent)}
        {renderReelSlide(currentReel, scrollOffsetPercent)}
        {renderReelSlide(nextReel, -100 + scrollOffsetPercent)}
      </div>

      {/* Suggested Reels */}
      {showSuggestions && (
        <div className="flex-1 h-full overflow-y-auto no-scrollbar bg-white dark:bg-neutral-50 rounded-2xl border border-transparent dark:border-neutral-160 transition-colors">
          <div className="p-6">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar">
              <button className="px-4 py-2 text-sm font-bold text-neutral-100 dark:text-white border-b-2 border-primary-500 transition-colors whitespace-nowrap" type="button">
                For You
              </button>
              <button className="px-4 py-2 text-sm font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-100 dark:hover:text-white transition-colors whitespace-nowrap" type="button">
                Live Now
              </button>
              <button className="px-4 py-2 text-sm font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-100 dark:hover:text-white transition-colors whitespace-nowrap" type="button">
                Premier League
              </button>
              <button className="px-4 py-2 text-sm font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-100 dark:hover:text-white transition-colors whitespace-nowrap" type="button">
                NBA Highlights
              </button>
            </div>

            {/* Reels Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {reels.map((reel, index) => (
                <button
                  key={reel.id}
                  onClick={() => {
                    if (!isTransitioning) {
                      setCurrentIndex(index);
                      setScrollOffsetPercent(0);
                    }
                  }}
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
      )}
    </div>
  );
}
