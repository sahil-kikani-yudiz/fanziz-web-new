"use client";

import { GameZoneWidget } from "./GameZoneWidget";
import { DownloadAppWidget } from "./DownloadAppWidget";

/** Left 30%: scrollable sidebar – Game Zone + Download our app */
export function NewsReelLeftSidebar() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <GameZoneWidget />
      <DownloadAppWidget />
    </div>
  );
}
