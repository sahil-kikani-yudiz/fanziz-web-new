"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import type { Sport } from "@/components/ui/constants";
import { getShortsBySport } from "@/components/ui/sportData";

export interface ShortCard {
  image: string;
  imageAlt: string;
  tag: string;
  tagColor: string;
  title: string;
  sport?: Sport;
}

// Portrait aspect (3:4) for reel/shorts cards - w=300&h=400 for proper crop
const TRENDING_SHORTS: ShortCard[] = [
  { image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Cricket batsman", tag: "Highlights", tagColor: "bg-primary-500", title: "Kohli's Masterclass: The winning shot!", sport: "cricket" },
  { image: "https://images.unsplash.com/photo-1531415074968-036fe1c16737?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Cricket", tag: "T20", tagColor: "bg-primary-500", title: "IND vs PAK: Last over drama", sport: "cricket" },
  { image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Football match", tag: "Goal", tagColor: "bg-state-completed", title: "Unbelievable bicycle kick in 90th min", sport: "soccer" },
  { image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Soccer", tag: "UCL", tagColor: "bg-state-upcoming", title: "Champions League: Best goals this week", sport: "soccer" },
  { image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Basketball", tag: "NBA", tagColor: "bg-accent-orange", title: "Lakers buzzer beater compilation", sport: "esports" },
  { image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Esports", tag: "Esports", tagColor: "bg-primary-500", title: "Valorant Finals: Winning Moment", sport: "esports" },
  { image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Tennis", tag: "Wimbledon", tagColor: "bg-state-completed", title: "Wimbledon 2025: Best rally", sport: "tennis" },
  { image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Tennis", tag: "Grand Slam", tagColor: "bg-state-completed", title: "Grand Slam: Shot of the tournament", sport: "tennis" },
  { image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Football", tag: "NFL", tagColor: "bg-state-live", title: "Super Bowl: Game-winning TD", sport: "football" },
  { image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Cycling", tag: "Cycling", tagColor: "bg-state-completed", title: "Tour de France: Best sprint finishes" },
  { image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Golf", tag: "Golf", tagColor: "bg-state-upcoming", title: "Masters: That impossible chip shot" },
  { image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=300&h=400", imageAlt: "Rugby", tag: "Rugby", tagColor: "bg-primary-500", title: "RWC Try of the Tournament so far" },
];

export function TrendingShorts({ sport }: { sport?: Sport }) {
  const shorts = sport ? getShortsBySport(sport) : TRENDING_SHORTS;
  return (
    <section className="pt-10">
      <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
              <Play size={14} className="text-white fill-white ml-0.5" />
            </div>
            <h3 className="text-xl font-black text-neutral-100 dark:text-white tracking-tight transition-colors">
              Trending Shorts
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
          {shorts.map((short) => (
            <article
              key={short.title}
              className="group w-[280px] sm:w-[300px] shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-xl dark:hover:shadow-none"
            >
              <div className="relative aspect-[9/12] overflow-hidden rounded-2xl">
                <Image
                  src={short.image}
                  alt={short.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, 300px"
                />
                {/* Black shadow gradient at bottom for reel-style text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 pt-12 flex flex-col gap-2">
                  <span
                    className={`w-fit px-2.5 py-1 rounded-lg text-[9px] font-black text-white uppercase tracking-widest ${short.tagColor}`}
                  >
                    {short.tag}
                  </span>
                  <h4 className="text-sm font-black text-white leading-tight line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors group-hover:text-primary-300">
                    {short.title}
                  </h4>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
