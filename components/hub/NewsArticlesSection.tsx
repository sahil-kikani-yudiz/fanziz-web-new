"use client";

import { ArrowRight } from "lucide-react";
import { ArticleCardHorizontal } from "./ArticleCardHorizontal";
import { ArticleCardVertical } from "./ArticleCardVertical";
import { ArticleCardCompact } from "./ArticleCardCompact";
import type { Lingo } from "@/components/ui/constants";
import type { Sport } from "@/components/ui/constants";
import { getNewsBySport } from "@/components/ui/sportData";

const U = "https://images.unsplash.com";

interface ArticleHorizontal {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
}
interface ArticleVertical {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
}
interface ArticleCompact {
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const HORIZONTAL_ARTICLES: ArticleHorizontal[] = [
  { image: `${U}/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Grand Slam 2025: The Draw That Changed Everything", excerpt: "Seeding shocks, early blockbusters, and why experts are calling this the most open major in decades. We break down the biggest first-round clashes and which dark horses could go deep.", readTime: "6 Min Read" },
  { image: `${U}/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "UCL Semi-Final: Tactical Breakdown of the First Leg", excerpt: "How the managers set up, where the game was won and lost, and what to expect in the return fixture. A deep dive into the key moments and tactical shifts that decided the tie.", readTime: "5 Min Read" },
  { image: `${U}/photo-1531415074968-036fe1c16737?auto=format&fit=crop&q=80&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "IPL 2025: Top 5 Performers at the Halfway Stage", excerpt: "Stats, impact, and who's leading the race for MVP. We analyse run rates, strike rates, and match-winning contributions so far.", readTime: "4 Min Read" },
];
const VERTICAL_ARTICLES: ArticleVertical[] = [
  { image: `${U}/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600`, imageAlt: "Soccer", category: "Soccer", categoryColor: "bg-state-upcoming", title: "UCL Semi-Final: Tactical Breakdown of the First Leg", excerpt: "How the managers set up, where the game was won and lost, and what to expect in the return fixture.", readTime: "5 Min Read" },
  { image: `${U}/photo-1531415074968-036fe1c16737?auto=format&fit=crop&q=80&w=600`, imageAlt: "Cricket", category: "Cricket", categoryColor: "bg-primary-500", title: "IPL 2025: Top 5 Performers at the Halfway Stage", excerpt: "Stats, impact, and who's leading the race for MVP. We analyse run rates, strike rates, and match-winning contributions so far.", readTime: "4 Min Read" },
  { image: `${U}/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=600`, imageAlt: "Tennis", category: "Tennis", categoryColor: "bg-state-completed", title: "Wimbledon 2025: Best Points of the Week", excerpt: "The rallies and shots that had the crowd on their feet.", readTime: "3 Min Read" },
];
const COMPACT_ARTICLES: ArticleCompact[] = [
  { image: `${U}/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=200`, imageAlt: "Basketball", title: "NBA Playoffs: Injury Report Shakes Up Western Conference", excerpt: "Key absences and return timelines that could reshape the race for the Finals.", category: "NBA", readTime: "2 min" },
  { image: `${U}/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=200`, imageAlt: "Athletics", title: "Paris 2025: New Qualifying Standards Explained", excerpt: "What changed, who's in the frame, and how athletes are adapting.", category: "Olympics", readTime: "3 min" },
  { image: `${U}/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=200`, imageAlt: "Soccer", title: "Transfer Window: Biggest Deals So Far This Summer", excerpt: "The fees, the clauses, and what each move means.", category: "Soccer", readTime: "4 min" },
  { image: `${U}/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=200`, imageAlt: "Tennis", title: "Wimbledon 2025: Wildcards and Dark Horses to Watch", excerpt: "Unexpected names in the draw and the form players who could cause upsets.", category: "Tennis", readTime: "3 min" },
  { image: `${U}/photo-1531415074968-036fe1c16737?auto=format&fit=crop&q=80&w=200`, imageAlt: "Cricket", title: "WTC Final Venue Announced: Everything You Need to Know", excerpt: "Dates, venue, format, and how the teams are shaping up for the ultimate Test.", category: "Cricket", readTime: "2 min" },
  { image: `${U}/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=200`, imageAlt: "Football", title: "Ballon d'Or Shortlist: Top 10 Contenders This Year", excerpt: "Form, trophies, and narrative: who's in the running for the biggest individual prize.", category: "Soccer", readTime: "5 min" },
];
const VERTICAL_ROW2: ArticleVertical[] = [
  { image: `${U}/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=600`, imageAlt: "Cycling", category: "Cycling", categoryColor: "bg-state-completed", title: "Tour de France 2025: Route and Key Stages Revealed", excerpt: "From the Alps to the Champs-Élysées, here's the full parcours.", readTime: "4 Min Read" },
  { image: `${U}/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600`, imageAlt: "Golf", category: "Golf", categoryColor: "bg-state-upcoming", title: "Masters 2025: Who Can Stop the Defending Champion?", excerpt: "Expert picks, dark horses for Augusta.", readTime: "5 Min Read" },
  { image: `${U}/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=600`, imageAlt: "Rugby", category: "Rugby", categoryColor: "bg-primary-500", title: "Rugby World Cup 2027: Host Nation and Format Update", excerpt: "Everything we know about the next global showpiece.", readTime: "3 Min Read" },
  { image: `${U}/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&q=80&w=600`, imageAlt: "Boxing", category: "Boxing", categoryColor: "bg-state-live", title: "Heavyweight Unification: Date and Venue Confirmed", excerpt: "The fight the world has been waiting for is finally set.", readTime: "2 Min Read" },
];

interface NewsArticlesSectionProps {
  activeLingo: Lingo;
  sport?: Sport;
  hideCategoryLabel?: boolean;
}

export function NewsArticlesSection({ activeLingo, sport, hideCategoryLabel }: NewsArticlesSectionProps) {
  const sportNews = sport ? getNewsBySport(sport) : null;
  const horizontal = sportNews ? sportNews.horizontal : (sport ? [] : HORIZONTAL_ARTICLES);
  const vertical = sportNews ? sportNews.vertical : (sport ? [] : VERTICAL_ARTICLES);
  const compact = sportNews ? sportNews.compact : (sport ? [] : COMPACT_ARTICLES);
  const vertical2 = sportNews ? sportNews.verticalRow2 : (sport ? [] : VERTICAL_ROW2);

  return (
    <section className="pt-14">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-black text-neutral-100 dark:text-white tracking-tighter transition-colors">
          Latest News
        </h3>
        <button
          type="button"
          className="text-primary-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
        >
          View All <ArrowRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-7 space-y-4 min-h-0">
          {horizontal.slice(0, 2).map((a) => (
            <ArticleCardHorizontal
              key={a.title}
              image={a.image}
              imageAlt={a.imageAlt}
              category={a.category}
              categoryColor={a.categoryColor}
              title={a.title}
              excerpt={a.excerpt}
              readTime={a.readTime}
              lingoName={activeLingo.name}
              lingoAvatar={activeLingo.avatar}
              hideCategory={hideCategoryLabel}
            />
          ))}
        </div>
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start min-h-0">
          {vertical.slice(0, 2).map((a) => (
            <ArticleCardVertical
              key={a.title}
              image={a.image}
              imageAlt={a.imageAlt}
              category={a.category}
              categoryColor={a.categoryColor}
              title={a.title}
              excerpt={a.excerpt}
              readTime={a.readTime}
              lingoName={activeLingo.name}
              lingoAvatar={activeLingo.avatar}
              hideCategory={hideCategoryLabel}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {compact.slice(0, 6).map((a) => (
          <ArticleCardCompact
            key={a.title}
            image={a.image}
            imageAlt={a.imageAlt}
            title={a.title}
            excerpt={a.excerpt}
            category={a.category}
            readTime={a.readTime}
            lingoName={activeLingo.name}
            lingoAvatar={activeLingo.avatar}
            hideCategory={hideCategoryLabel}
          />
        ))}
      </div>

      {vertical2.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vertical2.map((a) => (
            <ArticleCardVertical
              key={a.title}
              image={a.image}
              imageAlt={a.imageAlt}
              category={a.category}
              categoryColor={a.categoryColor}
              title={a.title}
              excerpt={a.excerpt}
              readTime={a.readTime}
              lingoName={activeLingo.name}
              lingoAvatar={activeLingo.avatar}
              hideCategory={hideCategoryLabel}
            />
          ))}
        </div>
      )}
    </section>
  );
}
