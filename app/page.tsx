"use client";

import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { SubHeader } from "@/components/layout/SubHeader";
import { Footer } from "@/components/layout/Footer";
import { LiveScoresSection } from "@/components/score/LiveScoresSection";
import { HubSection } from "@/components/hub/HubSection";
import { LingoSelection } from "@/components/lingo/LingoSelection";
import { Container } from "@/components/ui/Container";
import { LINGOS } from "@/components/ui/constants";

export default function Home() {
  const [activeLingoId, setActiveLingoId] = useState("10");
  const [showLingoPicker, setShowLingoPicker] = useState(false);

  const activeLingo =
    LINGOS.find((l) => l.id === activeLingoId) ?? LINGOS[0];

  return (
    <div className="min-h-screen bg-neutral-995 dark:bg-neutral-0 flex flex-col transition-colors duration-300">
      <Nav />
      <SubHeader />

      <Container as="main" className="flex-1 py-8 space-y-14">
        <LiveScoresSection />
        <HubSection activeLingo={activeLingo} />
      </Container>

      <Footer />

      {showLingoPicker && (
        <LingoSelection
          onClose={() => setShowLingoPicker(false)}
          selectedId={activeLingoId}
          onSelect={(id) => {
            setActiveLingoId(id);
          }}
        />
      )}
    </div>
  );
}
