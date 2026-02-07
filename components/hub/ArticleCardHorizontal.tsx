"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ArticleCardHorizontalProps {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor?: string;
  title: string;
  excerpt: string;
  readTime?: string;
  /** Lingo name for "X's Insight" label */
  lingoName?: string;
  lingoAvatar?: string;
  /** Hide category pill (e.g. on sport-specific pages) */
  hideCategory?: boolean;
}

export function ArticleCardHorizontal({
  image,
  imageAlt,
  category,
  categoryColor = "bg-primary-500",
  title,
  excerpt,
  readTime = "4 Min Read",
  lingoName,
  lingoAvatar,
  hideCategory,
}: ArticleCardHorizontalProps) {
  return (
    <article className="group flex gap-6 rounded-2xl bg-white dark:bg-neutral-50 border border-transparent dark:border-neutral-160 overflow-hidden cursor-pointer transition-colors shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none">
      <div className="relative w-40 sm:w-48 shrink-0 aspect-[4/3] overflow-hidden rounded-l-2xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 160px, 192px"
        />
      </div>
      <div className="flex flex-col justify-center py-6 pr-6 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {lingoName && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary-500 text-white text-[9px] font-black uppercase tracking-widest">
              {lingoAvatar && (
                <Image
                  src={lingoAvatar}
                  alt=""
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 rounded-full bg-white/20 object-cover shrink-0"
                />
              )}
              {lingoName}&apos;s Insight
            </div>
          )}
          {!hideCategory && (
            <span
              className={`px-2.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest text-white ${categoryColor}`}
            >
              {category}
            </span>
          )}
          <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-black text-neutral-100 dark:text-white leading-tight uppercase tracking-tight mb-2 line-clamp-2 transition-opacity group-hover:opacity-75">
          {title}
        </h3>
        <p className="text-neutral-400 dark:text-neutral-500 text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>
        <span className="text-primary-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-3 transition-all w-fit">
          Read <ArrowRight size={12} />
        </span>
      </div>
    </article>
  );
}
