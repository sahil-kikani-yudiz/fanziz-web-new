import { Nav } from "@/components/layout/Nav";
import { SubHeader } from "@/components/layout/SubHeader";
import { Footer } from "@/components/layout/Footer";
import { ReelView } from "@/components/reels/ReelView";
import { GameZoneWidget } from "@/components/hub/GameZoneWidget";
import { DownloadAppWidget } from "@/components/hub/DownloadAppWidget";
import { Container } from "@/components/ui/Container";
import { getVideoReels } from "@/components/ui/sportData";

export default function ReelsPage() {
  const reels = getVideoReels();

  return (
    <div className="min-h-screen bg-neutral-995 dark:bg-neutral-0 flex flex-col transition-colors duration-300">
      <Nav />
      <SubHeader />

      <Container as="main" className="flex-1 py-4">
        <div className="h-[calc(100vh-200px)] grid grid-cols-1 lg:grid-cols-[20%_80%] gap-6">
          {/* Left Sidebar: Game Zone + Download App */}
          <div className="hidden lg:flex flex-col gap-6 h-full overflow-y-auto no-scrollbar">
            <GameZoneWidget />
            <DownloadAppWidget />
          </div>

          {/* Main Reel View with Suggestions */}
          <div className="h-full overflow-hidden">
            <ReelView reels={reels} showSuggestions={true} />
          </div>
        </div>
      </Container>
    </div>
  );
}
