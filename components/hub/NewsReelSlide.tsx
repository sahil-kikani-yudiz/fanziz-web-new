"use client";

import Image from "next/image";
import { Share2, Bookmark, ChevronUp, ChevronDown } from "lucide-react";
import type { Lingo } from "@/components/ui/constants";
import type { ReelArticle } from "@/components/ui/sportData";
import { QuickRundownWidget } from "./QuickRundownWidget";
import { ArticleCardCompact } from "./ArticleCardCompact";
import { ArticleAudioPlayer } from "./ArticleAudioPlayer";

interface NewsReelSlideProps {
  article: ReelArticle;
  activeLingo: Lingo;
  articlesForYou: ReelArticle[];
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

/** Left 70%: single article content only (no scroll; reel changes via wheel/buttons) */
export function NewsReelSlide({
  article,
  activeLingo,
  articlesForYou,
  onPrev,
  onNext,
  currentIndex = 0,
  totalCount = 1,
}: NewsReelSlideProps) {
  return (
    <div className="relative flex flex-col h-full px-6 py-4 pb-32 overflow-hidden bg-neutral-995 dark:bg-neutral-0 transition-colors">
     
   
      

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-160 mb-3 shrink-0">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <p className="absolute top-3 left-3 bg-primary-500/20 px-2 rounded-lg text-white text-[10px] font-black uppercase tracking-widest mb-3 ">
        {article.category.toUpperCase().replace(/\s+/g, " ")}
        
      </p>

      </div>
         {/* Credits and actions UNDER image */}
         <div className="flex items-center -mt-8 z-50 justify-between gap-4 mb-3 px-4">
        {/* Left: Credits badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-995 dark:bg-neutral-0 ">
          <span className="text-[10px] font-bold text-neutral-100 dark:text-white">
            © CricTracker
          </span>
        </div>
        {/* Right: Share and Save buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-neutral-995 dark:bg-neutral-75 flex items-center justify-center text-neutral-700 dark:text-neutral-400 hover:text-primary-500 transition-colors"
            aria-label="Save"
          >
            <Bookmark size={18} />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-neutral-995 dark:bg-neutral-75 flex items-center justify-center text-neutral-700 dark:text-neutral-400 hover:text-primary-500 transition-colors"
            aria-label="Share"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-500 text-white text-[9px] font-black uppercase tracking-widest">
          <Image
            src={activeLingo.avatar}
            alt=""
            width={18}
            height={18}
            className="w-[18px] h-[18px] rounded-full bg-white/20 object-cover"
          />
          {activeLingo.name}&apos;s Insight
        </div>
        <span className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
          {article.readTime}
        </span>
      </div>



      {/* Title UNDER image */}
      <h1 className="text-xl font-bold text-neutral-100 dark:text-white leading-snug mb-3">
        {article.title}
      </h1>

      {/* Body text */}
      <p className="text-neutral-100 dark:text-white text-[15px] leading-[1.55] line-clamp-[9] transition-colors mb-3">
        {article.bodyShort}
        {article.bodyShort}
        {article.bodyShort}
        {article.bodyShort}
      </p>

      {/* Author and time metadata */}
      <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mb-4">
        Few minutes ago | Ajay Kaushik
      </p>

      {/* Reaction emoji icons */}
      <div className="flex items-center gap-2 mb-4">
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white dark:bg-neutral-75 border border-neutral-200 dark:border-neutral-160 hover:bg-neutral-200 dark:hover:bg-neutral-160 transition-colors"
          aria-label="Like"
        >
          <span className="text-base">👍</span>
          <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">18</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white dark:bg-neutral-75 border border-neutral-200 dark:border-neutral-160 hover:bg-neutral-200 dark:hover:bg-neutral-160 transition-colors"
          aria-label="Love"
        >
          <span className="text-base">❤️</span>
          <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">10</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white dark:bg-neutral-75 border border-neutral-200 dark:border-neutral-160 hover:bg-neutral-200 dark:hover:bg-neutral-160 transition-colors"
          aria-label="Laugh"
        >
          <span className="text-base">😂</span>
          <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">9</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white dark:bg-neutral-75 border border-neutral-200 dark:border-neutral-160 hover:bg-neutral-200 dark:hover:bg-neutral-160 transition-colors"
          aria-label="Celebrate"
        >
          <span className="text-base">🙌</span>
          <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">5</span>
        </button>
      </div>

      {/* Fixed audio player at bottom */}
      <ArticleAudioPlayer articleTitle={article.title} />
    </div>
  );
}

/** Right 30%: scrollable sidebar content (Quick rundown + Related Articles) */
function SidebarContent({
  activeLingo,
  articlesForYou,
  currentArticle,
}: {
  activeLingo: Lingo;
  articlesForYou: ReelArticle[];
  currentArticle: ReelArticle;
}) {
  const quickRundownPoints = currentArticle.quickRundown || [
    "Key point from this article.",
    "Important detail you should know.",
    "Context that matters.",
    "What to watch for next.",
  ];

  return (
    <>
      <QuickRundownWidget points={quickRundownPoints} />
      <div>
        <h4 className="text-[12px] font-black text-neutral-100 dark:text-white uppercase tracking-widest mb-4 transition-colors">
          Related Articles
        </h4>
        <div className="space-y-3">
          {articlesForYou.slice(0, 4).map((a) => (
            <div key={a.id} className="group cursor-pointer">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-160 mb-2">
                <Image
                  src={a.image}
                  alt={a.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="300px"
                />
              </div>
              <h5 className="text-[13px] font-bold text-neutral-100 dark:text-white leading-tight line-clamp-2 mb-1 group-hover:opacity-75 transition-opacity">
                {a.title}
              </h5>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500">
                {a.readTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

NewsReelSlide.Sidebar = SidebarContent;
