"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CricketScoreCard } from "./CricketScoreCard";
import type { Sport } from "@/components/ui/constants";

/** Simple soccer/football match card for sport pages */
function SoccerMatchCard({
  team1,
  team2,
  score,
  minute,
  flag1,
  flag2,
  tournament,
}: {
  team1: string;
  team2: string;
  score: string;
  minute: string;
  flag1: string;
  flag2: string;
  tournament: string;
}) {
  return (
    <div className="min-w-[280px] md:min-w-[320px] p-5 rounded-2xl bg-white dark:bg-neutral-75 border border-transparent dark:border-neutral-160 flex flex-col gap-4 shadow-lg dark:shadow-none shrink-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-995 dark:bg-neutral-160">
          <div className="w-1.5 h-1.5 rounded-full bg-state-live animate-pulse" />
          <span className="text-[9px] font-black text-neutral-100 dark:text-white uppercase tracking-widest">Live</span>
        </div>
        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600">{tournament}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-160">
            <Image src={flag1} alt={team1} width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-black text-neutral-100 dark:text-white">{team1}</span>
        </div>
        <span className="text-2xl font-black text-neutral-100 dark:text-white">{score}</span>
        <div className="flex items-center gap-3">
          <span className="text-sm font-black text-neutral-100 dark:text-white">{team2}</span>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-160">
            <Image src={flag2} alt={team2} width={40} height={40} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">{minute}</p>
    </div>
  );
}

export function LiveScoresSection({ sport }: { sport?: Sport }) {
  const showCricket = !sport || sport === "cricket";
  const showSoccer = sport === "soccer" || sport === "football";

  return (
    <section className="space-y-6">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex animate-pulse items-center gap-2">
            <div
              className="w-2 h-2 animate-blink rounded-full bg-state-live shrink-0"
              aria-hidden
            />
            <h2 className="text-2xl font-black text-neutral-100 dark:text-white tracking-tighter transition-colors">
              Live Coverage
            </h2>
          </div>
        </div>
      </Container>
      <div className="w-full overflow-x-auto no-scrollbar pb-6 px-6 md:px-12 lg:px-12">
        <div className="flex gap-6 min-w-0">
          {showCricket && (
          <>
          <CricketScoreCard
            team1="IND"
            team2="PAK"
            score="142"
            wickets="3"
            overs="18.2"
            crr="7.75"
            needs="Needs 24 off 10"
            flag1="https://flagcdn.com/in.svg"
            flag2="https://flagcdn.com/pk.svg"
            tournament="T20 Cup"
            battingTeam={1}
          />
          <CricketScoreCard
            team1="AUS"
            team2="ENG"
            score="285"
            wickets="5"
            overs="72.1"
            crr="3.94"
            needs="Session 3"
            flag1="https://flagcdn.com/au.svg"
            flag2="https://flagcdn.com/gb.svg"
            tournament="The Ashes"
            battingTeam={1}
          />
           <CricketScoreCard
            team1="IND"
            team2="PAK"
            score="142"
            wickets="3"
            overs="18.2"
            crr="7.75"
            needs="Needs 24 off 10"
            flag1="https://flagcdn.com/in.svg"
            flag2="https://flagcdn.com/pk.svg"
            tournament="T20 Cup"
            battingTeam={1}
          />
           <CricketScoreCard
            team1="IND"
            team2="PAK"
            score="142"
            wickets="3"
            overs="18.2"
            crr="7.75"
            needs="Needs 24 off 10"
            flag1="https://flagcdn.com/in.svg"
            flag2="https://flagcdn.com/pk.svg"
            tournament="T20 Cup"
            battingTeam={1}
          />
          </>
          )}
          {showSoccer && (
            <>
              <SoccerMatchCard team1="MCI" team2="LIV" score="2-1" minute="67'" flag1="https://flagcdn.com/gb.svg" flag2="https://flagcdn.com/gb.svg" tournament="Premier League" />
              <SoccerMatchCard team1="RMA" team2="BAR" score="1-1" minute="78'" flag1="https://flagcdn.com/es.svg" flag2="https://flagcdn.com/es.svg" tournament="La Liga" />
            </>
          )}
          {sport === "tennis" && (
            <div className="min-w-[280px] p-5 rounded-2xl bg-white dark:bg-neutral-75 border border-transparent dark:border-neutral-160 text-center text-neutral-500 dark:text-neutral-400 text-sm">
              No live tennis matches right now
            </div>
          )}
          {sport === "esports" && (
            <div className="min-w-[280px] p-5 rounded-2xl bg-white dark:bg-neutral-75 border border-transparent dark:border-neutral-160 text-center text-neutral-500 dark:text-neutral-400 text-sm">
              No live esports right now
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
