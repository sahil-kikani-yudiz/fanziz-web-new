"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ArticleCardCompactProps {
  image: string;
  imageAlt: string;
  title: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  /** Lingo name for "X's Insight" label */
  lingoName?: string;
  lingoAvatar?: string;
  /** Hide category (e.g. on sport-specific pages); when true shows only readTime */
  hideCategory?: boolean;
}

export function ArticleCardCompact({
  image,
  imageAlt,
  title,
  excerpt,
  category = "News",
  readTime = "2 min",
  lingoName,
  lingoAvatar,
  hideCategory,
}: ArticleCardCompactProps) {
  return (
    <article className="group flex gap-4 rounded-xl bg-white dark:bg-neutral-50 border border-transparent dark:border-neutral-160 p-4 cursor-pointer transition-colors shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none hover:bg-neutral-995 dark:hover:bg-neutral-75/50">
      <div className="relative w-20 h-24 shrink-0 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="80px"
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-1.5 mb-1">
          {lingoName && (
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary-500 text-white text-[8px] font-black uppercase tracking-widest">
              {lingoAvatar && (
                <Image
                  src={lingoAvatar}
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3 rounded-full object-cover shrink-0"
                />
              )}
              {lingoName}&apos;s Insight
            </span>
          )}
          <span className="text-[9px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
            {hideCategory ? readTime : `${category} · ${readTime}`}
          </span>
        </div>
        <h3 className="text-sm font-black text-neutral-100 dark:text-white leading-tight uppercase tracking-tight line-clamp-2 transition-opacity group-hover:opacity-75">
          {title}
        </h3>
        {excerpt && (
          <p className="text-neutral-400 dark:text-neutral-500 text-xs line-clamp-2 mt-1">
            {excerpt}
          </p>
        )}
      </div>
      <ArrowRight
        size={16}
        className="text-neutral-400 dark:text-neutral-500 shrink-0 group-hover:opacity-75 group-hover:translate-x-0.5 transition-all self-center"
      />
    </article>
  );
}
