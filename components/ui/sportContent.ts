import type { Sport } from "./constants";
import { getNewsBySport } from "./sportData";

const U = "https://images.unsplash.com";

/** Hero content for main article - by sport or default (home) */
export function getHeroContent(sport?: Sport) {
  const bySport: Record<Sport, { image: string; title: string; description: string }> = {
    cricket: {
      image: `${U}/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaWNrZXQlMjBmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww`,
      title: "India vs Pakistan: The T20 World Cup Clash That Broke Records",
      description: "Full breakdown of the thriller, the key moments, and what it means for both teams going into the knockouts.",
    },
    soccer: {
      image: `${U}/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200`,
      title: "The Multi-Billion Dollar Transfer That Redefined Football",
      description: "How one record-breaking move changed the market, what it means for the clubs involved, and why pundits are calling it the deal that reshaped the modern game.",
    },
    tennis: {
      image: `${U}/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=1200`,
      title: "Grand Slam 2025: The Draw That Changed Everything",
      description: "Seeding shocks, early blockbusters, and why experts are calling this the most open major in decades.",
    },
    football: {
      image: `${U}/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200`,
      title: "Super Bowl LIX: The Tactical Battle Nobody Saw Coming",
      description: "How both teams adjusted at the half, the plays that decided it, and what the stats say about the result.",
    },
    esports: {
      image: `${U}/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200`,
      title: "Worlds 2025: The Meta Shift That Defined the Finals",
      description: "Draft trends, the picks that dominated, and why analysts are calling this the most strategic finals yet.",
    },
  };
  if (sport) return bySport[sport];
  return {
    image: `${U}/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200`,
    title: "The Multi-Billion Dollar Transfer That Redefined Football",
    description: "How one record-breaking move changed the market, what it means for the clubs involved, and why pundits are calling it the deal that reshaped the modern game.",
  };
}

/** Map category string to sport for filtering */
export function categoryToSport(category: string): Sport | null {
  const map: Record<string, Sport> = {
    Cricket: "cricket",
    Soccer: "soccer",
    Tennis: "tennis",
    Football: "football",
    Esports: "esports",
    NBA: "esports",
  };
  return map[category] ?? null;
}

export function isCategoryForSport(category: string, sport: Sport): boolean {
  if (sport === "esports") return category === "Esports" || category === "NBA";
  return categoryToSport(category) === sport;
}

export interface HubVerticalItem {
  image: string;
  imageAlt: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
}
export interface HubCompactItem {
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export function getHubGridBySport(sport: Sport): { vertical: HubVerticalItem; compacts: HubCompactItem[] } {
  const news = getNewsBySport(sport);
  return {
    vertical: news.vertical[0],
    compacts: news.compact.slice(0, 3),
  };
}
