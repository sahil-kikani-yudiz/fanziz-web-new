"use client";

import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { SubHeader } from "@/components/layout/SubHeader";
import { Footer } from "@/components/layout/Footer";
import { VideoPlayer } from "@/components/videos/VideoPlayer";
import { RelatedVideoCard } from "@/components/videos/RelatedVideoCard";
import { GameZoneWidget } from "@/components/hub/GameZoneWidget";
import { DownloadAppWidget } from "@/components/hub/DownloadAppWidget";
import { Container } from "@/components/ui/Container";
import { getYouTubeVideos } from "@/components/ui/sportData";

export default function VideosPage() {
  const videos = getYouTubeVideos();
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const currentVideo = videos[selectedVideoIndex];
  const relatedVideos = videos.filter((_, index) => index !== selectedVideoIndex);

  const handleVideoSelect = (videoId: string) => {
    const index = videos.findIndex((v) => v.videoId === videoId);
    if (index !== -1) {
      setSelectedVideoIndex(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-995 dark:bg-neutral-0 flex flex-col transition-colors duration-300">
      <Nav />
      <SubHeader />

      <Container as="main" className="flex-1 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[20%_55%_25%] gap-6">
          {/* Left Sidebar: Widgets */}
          <div className="hidden lg:flex flex-col gap-6 overflow-y-auto no-scrollbar">
            <GameZoneWidget />
            <DownloadAppWidget />
          </div>

          {/* Center: Main Video Player & Info */}
          <div className="flex flex-col gap-6">
            {/* Video Player */}
            <VideoPlayer
              videoId={currentVideo.videoId}
              title={currentVideo.title}
              thumbnail={currentVideo.thumbnail}
              category={currentVideo.category}
              categoryColor={currentVideo.categoryColor}
              views={currentVideo.views}
              timestamp={currentVideo.duration}
              autoplay={false}
            />

            {/* Video Info */}
            <div className="rounded-2xl bg-white dark:bg-neutral-50 border border-transparent dark:border-neutral-160 p-6 transition-colors shadow-lg dark:shadow-none">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-black text-neutral-100 dark:text-white mb-2 uppercase tracking-tight">
                    {currentVideo.title}
                  </h1>
                  <div className="flex items-center gap-3 text-sm text-neutral-400 dark:text-neutral-500">
                    <span className="font-bold">{currentVideo.views} views</span>
                    <span>•</span>
                    <span>{currentVideo.uploadedAt}</span>
                  </div>
                </div>
              </div>

              <p className="text-neutral-400 dark:text-neutral-500 text-sm leading-relaxed">
                {currentVideo.description}
              </p>

            </div>
          </div>

          {/* Right Sidebar: Related Videos */}
          <div className="hidden lg:flex flex-col gap-4">
            <h2 className="text-sm font-black text-neutral-100 dark:text-white uppercase tracking-widest px-3">
              Related Videos
            </h2>
            <div className="flex flex-col gap-3 overflow-y-auto no-scrollbar max-h-[calc(100vh-200px)]">
              {relatedVideos.map((video) => (
                <RelatedVideoCard
                  key={video.id}
                  videoId={video.videoId}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  views={video.views}
                  duration={video.duration}
                  category={video.category}
                  categoryColor={video.categoryColor}
                  onVideoSelect={handleVideoSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
