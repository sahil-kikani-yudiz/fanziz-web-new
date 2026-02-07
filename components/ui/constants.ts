import type { ReactNode } from "react";

export type Sport = "cricket" | "soccer" | "tennis" | "football" | "esports";

export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

export interface Tab {
  name: string;
  icon: ReactNode;
}

/** Primary nav with routes: Home and sport pages */
export const PRIMARY_NAV: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Cricket", href: "/cricket" },
  { name: "Soccer", href: "/soccer" },
  { name: "Tennis", href: "/tennis" },
  // { name: "Football", href: "/football" },
  { name: "Esports", href: "/esports" },
];

export interface Lingo {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

const UNSPLASH = "https://images.unsplash.com";

export const LINGOS: Lingo[] = [
  {
    id: "1",
    name: "Original",
    avatar: `${UNSPLASH}/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150`,
    description: "Standard professional commentary.",
  },
  {
    id: "2",
    name: "Doggfather",
    avatar: `${UNSPLASH}/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150`,
    description: "Smooth, rhythmic, and super chill vibes.",
  },
  {
    id: "3",
    name: "Tony",
    avatar: `${UNSPLASH}/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150`,
    description: "Genius, billionaire, playboy commentary.",
  },
  {
    id: "4",
    name: "Sher Shayar",
    avatar: `${UNSPLASH}/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150`,
    description: "Poetic Punjabi flair with high energy.",
  },
  {
    id: "5",
    name: "Delulu",
    avatar: `${UNSPLASH}/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150`,
    description: "Optimistic to a fault. Everyone is winning!",
  },
  {
    id: "6",
    name: "Commentator",
    avatar: `${UNSPLASH}/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150`,
    description: "Classic 90s radio broadcast style.",
  },
  {
    id: "10",
    name: "Potter Head",
    avatar: `${UNSPLASH}/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150`,
    description: "Magical metaphors for every goal.",
  },
  {
    id: "11",
    name: "Mr. Manager",
    avatar: `${UNSPLASH}/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&h=150`,
    description: "Strict tactical breakdown.",
  },
  {
    id: "12",
    name: "Yelley",
    avatar: `${UNSPLASH}/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150`,
    description: "Cooking up the best analysis.",
  },
];
