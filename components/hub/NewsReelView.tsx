"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Lingo } from "@/components/ui/constants";
import type { ReelArticle } from "@/components/ui/sportData";
import { Container } from "@/components/ui/Container";
import { NewsReelSlide } from "./NewsReelSlide";
import { NewsReelLeftSidebar } from "./NewsReelLeftSidebar";

interface NewsReelViewProps {
  articles: ReelArticle[];
  activeLingo: Lingo;
}

const SCROLL_SENSITIVITY = 0.18;
const SNAP_THRESHOLD = 50;
const SNAP_DURATION = 280;
const IDLE_RESET_DELAY = 150;

export function NewsReelView({ articles, activeLingo }: NewsReelViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollOffsetPercent, setScrollOffsetPercent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleResetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    if (currentIndex >= articles.length - 1 || isTransitioning) return;
    
    if (idleResetTimeout.current) clearTimeout(idleResetTimeout.current);
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    
    setIsTransitioning(true);
    setScrollOffsetPercent(-100);
    
    transitionTimeout.current = setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setScrollOffsetPercent(0);
      setIsTransitioning(false);
    }, SNAP_DURATION);
  }, [articles.length, currentIndex, isTransitioning]);

  const commitPrev = useCallback(() => {
    if (currentIndex <= 0 || isTransitioning) return;
    
    if (idleResetTimeout.current) clearTimeout(idleResetTimeout.current);
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    
    setIsTransitioning(true);
    setScrollOffsetPercent(100);
    
    transitionTimeout.current = setTimeout(() => {
      setCurrentIndex((i) => i - 1);
      setScrollOffsetPercent(0);
      setIsTransitioning(false);
    }, SNAP_DURATION);
  }, [currentIndex, isTransitioning]);

  const handleWheelOnArticle = useCallback(
    (e: React.WheelEvent) => {
      if (isTransitioning) return;
      
      if (idleResetTimeout.current) clearTimeout(idleResetTimeout.current);
      
      const delta = -e.deltaY * SCROLL_SENSITIVITY;
      
      setScrollOffsetPercent((prev) => {
        let next = prev + delta;
        
        // Strict bounds: prevent scrolling into blank areas
        const isAtFirst = currentIndex === 0;
        const isAtLast = currentIndex === articles.length - 1;
        
        if (isAtFirst && next > 0) {
          next = 0; // No upward scroll on first article
        }
        if (isAtLast && next < 0) {
          next = 0; // No downward scroll on last article
        }
        
        // Clamp to reasonable range for middle articles
        if (!isAtFirst && !isAtLast) {
          next = Math.max(-100, Math.min(100, next));
        } else if (isAtFirst) {
          next = Math.max(-100, Math.min(0, next));
        } else if (isAtLast) {
          next = Math.max(0, Math.min(100, next));
        }
        
        // Auto-commit when threshold crossed
        if (next <= -SNAP_THRESHOLD && currentIndex < articles.length - 1) {
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
    [isTransitioning, currentIndex, articles.length, commitNext, commitPrev, resetToCenter]
  );

  const goNext = useCallback(() => {
    commitNext();
  }, [commitNext]);

  const goPrev = useCallback(() => {
    commitPrev();
  }, [commitPrev]);

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
      if (idleResetTimeout.current) clearTimeout(idleResetTimeout.current);
    };
  }, []);

  if (articles.length === 0) {
    return (
      <Container className="flex-1 flex items-center justify-center min-h-[50vh] text-neutral-400 dark:text-neutral-500 text-sm font-medium">
        No articles yet.
      </Container>
    );
  }

  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  const hasPrev = prevIndex >= 0;
  const hasNext = nextIndex < articles.length;

  const article = articles[currentIndex];
  const articlesForYou = articles.filter((a) => a.id !== article.id);

  const transitionClass = isTransitioning ? "transition-transform duration-[280ms] ease-out" : "";

  const centerContent = (
    <div className="relative min-h-0 flex-1 overflow-hidden">
      {/* Three stacked slides: prev, current, next – scroll moves them together */}
      {hasPrev && (
        <div
          className={`absolute inset-0 flex flex-col bg-neutral-995 dark:bg-neutral-0 ${transitionClass}`}
          style={{
            transform: `translateY(${-100 + scrollOffsetPercent}%)`,
          }}
        >
          <NewsReelSlide
            article={articles[prevIndex]}
            activeLingo={activeLingo}
            articlesForYou={articles.filter((a) => a.id !== articles[prevIndex].id)}
            onPrev={goPrev}
            onNext={goNext}
            currentIndex={prevIndex}
            totalCount={articles.length}
          />
        </div>
      )}
      <div
        className={`absolute inset-0 flex flex-col bg-neutral-995 dark:bg-neutral-0 ${transitionClass}`}
        style={{
          transform: `translateY(${scrollOffsetPercent}%)`,
        }}
      >
        <NewsReelSlide
          article={article}
          activeLingo={activeLingo}
          articlesForYou={articlesForYou}
          onPrev={goPrev}
          onNext={goNext}
          currentIndex={currentIndex}
          totalCount={articles.length}
        />
      </div>
      {hasNext && (
        <div
          className={`absolute inset-0 flex flex-col bg-neutral-995 dark:bg-neutral-0 ${transitionClass}`}
          style={{
            transform: `translateY(${100 + scrollOffsetPercent}%)`,
          }}
        >
          <NewsReelSlide
            article={articles[nextIndex]}
            activeLingo={activeLingo}
            articlesForYou={articles.filter((a) => a.id !== articles[nextIndex].id)}
            onPrev={goPrev}
            onNext={goNext}
            currentIndex={nextIndex}
            totalCount={articles.length}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
      <Container className="flex-1 min-h-0 flex flex-col py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_40%_30%] flex-1 min-h-0 min-w-0 overflow-hidden">
          <div className="hidden lg:flex flex-col min-h-0 min-w-0  overflow-y-auto scroll-smooth transition-colors no-scrollbar">
            <NewsReelLeftSidebar />
          </div>
          <div
            className="min-h-0 overflow-hidden flex flex-col"
            onWheel={handleWheelOnArticle}
          >
            {centerContent}
          </div>
          <div className="hidden lg:flex flex-col min-h-0 min-w-0  overflow-y-auto scroll-smooth transition-colors no-scrollbar">
            <div className="p-6 flex flex-col gap-6">
              <NewsReelSlide.Sidebar
                activeLingo={activeLingo}
                articlesForYou={articlesForYou}
                currentArticle={article}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
