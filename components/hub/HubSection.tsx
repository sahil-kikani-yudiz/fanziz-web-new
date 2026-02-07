"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ArticleCardHorizontal } from "./ArticleCardHorizontal";
import { ArticleCardVertical } from "./ArticleCardVertical";
import { ArticleCardCompact } from "./ArticleCardCompact";
import { TrendingShorts } from "./TrendingShorts";
import { VideosSection } from "./VideosSection";
import { NewsArticlesSection } from "./NewsArticlesSection";
import { GameZoneWidget } from "./GameZoneWidget";
import { SeriesSidebar } from "@/components/score/SeriesWidgetCompact";
import type { Lingo } from "@/components/ui/constants";
import type { Sport } from "@/components/ui/constants";
import { getHeroContent, getHubGridBySport } from "@/components/ui/sportContent";

interface HubSectionProps {
  activeLingo: Lingo;
  /** When set, show sport-specific hero + grid and hide category labels */
  sport?: Sport;
}

export function HubSection({ activeLingo, sport }: HubSectionProps) {
  const hero = getHeroContent(sport);
  const hubGrid = sport ? getHubGridBySport(sport) : null;
  const hideCategory = !!sport;

  return (
    <div className="space-y-10 -mt-8">
      <Container>
      <div className="flex justify-between items-end mb-4 -mt-8">
        <div>
          <h2 className="text-2xl font-black text-neutral-100 dark:text-white tracking-tighter transition-colors">
            News Hub
          </h2>
          <p className="text-neutral-400 dark:text-neutral-500 text-sm font-medium">
            Your daily editorial digest
          </p>
        </div>
        <div className="flex bg-neutral-995 dark:bg-neutral-50 p-1 rounded-2xl border border-transparent dark:border-neutral-160 transition-colors">
          <button
            type="button"
            className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-primary-500 text-white shadow-lg"
          >
            Latest
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 hover:text-neutral-100 dark:hover:text-white transition-colors"
          >
            Trending
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="w-full h-[480px] rounded-[2.5rem] bg-white dark:bg-neutral-50 border border-transparent dark:border-neutral-160 relative overflow-hidden group cursor-pointer transition-colors shadow-lg dark:shadow-none">
            <Image
              src={hero.image}
              alt={sport ?? "Featured"}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary-500 text-white text-[9px] font-black uppercase tracking-widest">
                  <Image
                    src={activeLingo.avatar}
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded-full bg-white/20"
                  />
                  {activeLingo.name}&apos;s Insight
                </div>
                <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">
                  5 Min Read
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 max-w-2xl uppercase">
                {hero.title}
              </h3>
              <p className="text-white/90 text-base md:text-lg font-medium max-w-2xl mb-6 leading-relaxed">
                {hero.description}
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="bg-white text-black px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-all"
                >
                  Read Full Article
                </button>
                <button
                  type="button"
                  className="p-3.5 rounded-full border border-transparent dark:border-neutral-75 text-neutral-100 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-all"
                >
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {hubGrid ? (
            <>
              <div className="lg:col-span-6">
                <ArticleCardVertical
                  image={hubGrid.vertical.image}
                  imageAlt={hubGrid.vertical.imageAlt}
                  category={hubGrid.vertical.category}
                  categoryColor={hubGrid.vertical.categoryColor}
                  title={hubGrid.vertical.title}
                  excerpt={hubGrid.vertical.excerpt}
                  readTime={hubGrid.vertical.readTime}
                  lingoName={activeLingo.name}
                  lingoAvatar={activeLingo.avatar}
                  hideCategory={hideCategory}
                />
              </div>
              <div className="lg:col-span-6 space-y-4">
                {hubGrid.compacts.map((c) => (
                  <ArticleCardCompact
                    key={c.title}
                    image={c.image}
                    imageAlt={c.imageAlt}
                    title={c.title}
                    excerpt={c.excerpt}
                    category={c.category}
                    readTime={c.readTime}
                    lingoName={activeLingo.name}
                    lingoAvatar={activeLingo.avatar}
                    hideCategory={hideCategory}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="lg:col-span-6">
                <ArticleCardVertical
                  image="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600"
                  imageAlt="Basketball game action"
                  category="Basketball"
                  categoryColor="bg-state-upcoming"
                  title="NBA Finals 2025: What the Stats Say About the Underdogs"
                  excerpt="Data-driven breakdown of why this year's playoffs could surprise everyone. We ran the numbers on pace, defence, and clutch performance—here's what the stats say about the underdogs and who might lift the trophy."
                  readTime="5 Min Read"
                  lingoName={activeLingo.name}
                  lingoAvatar={activeLingo.avatar}
                />
              </div>
              <div className="lg:col-span-6 space-y-4">
                <ArticleCardCompact
                  image="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=200"
                  imageAlt="Soccer match"
                  title="Champions League Draw: Group of Death Explained"
                  excerpt="Why this group is the toughest in the competition and how the big clubs will need to navigate a brutal fixture list."
                  category="Soccer"
                  readTime="2 min"
                  lingoName={activeLingo.name}
                  lingoAvatar={activeLingo.avatar}
                />
                <ArticleCardCompact
                  image="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600"
                  imageAlt="Stadium at night"
                  title="Stadium Tech: How Venues Are Going Green in 2025"
                  excerpt="From solar panels to rainwater systems, how major stadiums are cutting carbon and what it means for matchday."
                  category="Features"
                  readTime="3 min"
                  lingoName={activeLingo.name}
                  lingoAvatar={activeLingo.avatar}
                />
                <ArticleCardCompact
                  image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=200"
                  imageAlt="Athlete running"
                  title="Olympic Preview: Top 10 Moments to Watch in Paris"
                  excerpt="The events, rivalries, and storylines you can't miss when the Games kick off in the French capital."
                  category="Olympics"
                  readTime="4 min"
                  lingoName={activeLingo.name}
                  lingoAvatar={activeLingo.avatar}
                />
              </div>
            </>
          )}
          </div>

        </div>

        <div className="space-y-8">
          <GameZoneWidget />
          <SeriesSidebar />

        </div>
      </div>

      <TrendingShorts sport={sport} />
      <VideosSection sport={sport} />
      <NewsArticlesSection activeLingo={activeLingo} sport={sport} hideCategoryLabel={hideCategory} />
      </Container>
    </div>
  );
}
