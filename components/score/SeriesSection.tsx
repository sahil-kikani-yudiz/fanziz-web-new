"use client";

import { Container } from "@/components/ui/Container";
import { SeriesWidget } from "./SeriesWidget";
import type { SeriesWidgetProps } from "./SeriesWidget";

const CRICKET_SERIES: SeriesWidgetProps[] = [
  {
    sport: "cricket",
    name: "ICC T20 World Cup 2025",
    subtitle: "Group Stage",
    detail: "IND, PAK, AUS, ENG + 16",
    progress: "18/45 matches",
    status: "ongoing",
    flag1: "https://flagcdn.com/in.svg",
    flag2: "https://flagcdn.com/pk.svg",
  },
  {
    sport: "cricket",
    name: "The Ashes 2025",
    subtitle: "Test Series",
    detail: "AUS vs ENG • 5 Tests",
    progress: "2/5 Tests",
    status: "live",
    flag1: "https://flagcdn.com/au.svg",
    flag2: "https://flagcdn.com/gb.svg",
  },
  {
    sport: "cricket",
    name: "India vs England",
    subtitle: "5-Match Test Series",
    detail: "IND vs ENG • Home",
    progress: "Starts Jan 2026",
    status: "upcoming",
    flag1: "https://flagcdn.com/in.svg",
    flag2: "https://flagcdn.com/gb.svg",
  },
];

const FOOTBALL_SERIES: SeriesWidgetProps[] = [
  {
    sport: "football",
    name: "Premier League",
    subtitle: "2025/26",
    detail: "20 teams",
    progress: "Matchday 12",
    status: "live",
  },
  {
    sport: "football",
    name: "UEFA Champions League",
    subtitle: "Group Stage",
    detail: "32 teams",
    progress: "Matchday 4",
    status: "ongoing",
  },
  {
    sport: "football",
    name: "FIFA World Cup 2026",
    subtitle: "Qualifiers",
    detail: "CONCACAF Host",
    progress: "Qualifying Round",
    status: "upcoming",
  },
];

export function SeriesSection() {
  return (
    <section className="space-y-8">
      <Container>
        <h2 className="text-2xl font-black text-neutral-100 dark:text-white tracking-tighter transition-colors">
          Series
        </h2>
        <p className="text-neutral-400 dark:text-neutral-500 text-sm font-medium mt-1 transition-colors">
          Cricket & football series and leagues
        </p>
      </Container>

      {/* Cricket series */}
      <div className="space-y-4">
        <Container>
          <h3 className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest transition-colors">
            Cricket
          </h3>
        </Container>
        <div className="w-full overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-12 lg:px-12">
          <div className="flex gap-5 min-w-0">
            {CRICKET_SERIES.map((s) => (
              <SeriesWidget key={`cricket-${s.name}`} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* Football series */}
      <div className="space-y-4">
        <Container>
          <h3 className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest transition-colors">
            Football
          </h3>
        </Container>
        <div className="w-full overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-12 lg:px-12">
          <div className="flex gap-5 min-w-0">
            {FOOTBALL_SERIES.map((s) => (
              <SeriesWidget key={`football-${s.name}`} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
