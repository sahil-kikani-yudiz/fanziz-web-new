"use client";

import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { SubHeader } from "@/components/layout/SubHeader";
import { NewsReelView } from "@/components/hub/NewsReelView";
import { LINGOS } from "@/components/ui/constants";
import { getReelArticles } from "@/components/ui/sportData";

export default function NewsPage() {
  const [activeLingoId, setActiveLingoId] = useState("10");
  const activeLingo = LINGOS.find((l) => l.id === activeLingoId) ?? LINGOS[0];
  const articles = getReelArticles(undefined);

  return (
    <div className="h-screen overflow-hidden bg-neutral-995 dark:bg-neutral-0 flex flex-col transition-colors duration-300">
      <Nav />
      <SubHeader />
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <NewsReelView articles={articles} activeLingo={activeLingo} />
      </div>
    </div>
  );
}
