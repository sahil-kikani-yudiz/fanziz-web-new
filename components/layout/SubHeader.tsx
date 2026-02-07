"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, FileText, Radio, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";

const TABS = [
  { name: "All", icon: LayoutGrid, getHref: (pathname: string) => (pathname.startsWith("/cricket") ? "/cricket" : pathname.startsWith("/soccer") ? "/soccer" : pathname.startsWith("/tennis") ? "/tennis" : pathname.startsWith("/esports") ? "/esports" : "/") },
  { name: "News", icon: FileText, getHref: (pathname: string) => (pathname.startsWith("/cricket") ? "/cricket/news" : pathname.startsWith("/soccer") ? "/soccer/news" : pathname.startsWith("/tennis") ? "/tennis/news" : pathname.startsWith("/esports") ? "/esports/news" : "/news") },
  { name: "Reels", icon: Radio, getHref: () => "/reels" },
  { name: "Videos", icon: Play, getHref: () => "/videos" },
] as const;

export function SubHeader() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-white dark:bg-neutral-0 border-b border-transparent dark:border-neutral-160 sticky top-20 z-40 transition-colors duration-300">
      <Container className="py-3 flex items-center gap-1">
        {TABS.map((tab, index) => {
          const Icon = tab.icon;
          const href = tab.getHref(pathname);
          const isNewsTab = tab.name === "News";
          const isReelsTab = tab.name === "Reels";
          const isVideosTab = tab.name === "Videos";
          const isActive = isNewsTab
            ? pathname === "/news" || pathname.endsWith("/news")
            : isReelsTab
            ? pathname === "/reels"
            : isVideosTab
            ? pathname === "/videos"
            : index === 0 && (pathname === "/" || pathname === "/cricket" || pathname === "/soccer" || pathname === "/tennis" || pathname === "/esports");
          if (href === "#") {
            return (
              <button
                key={tab.name}
                type="button"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  isActive
                    ? "bg-primary-500 text-white shadow-lg"
                    : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-300 dark:hover:text-neutral-400"
                }`}
              >
                <Icon size={14} className={isActive ? "text-white" : "text-neutral-400 dark:text-neutral-400"} />
                {tab.name}
              </button>
            );
          }
          return (
            <Link
              key={tab.name}
              href={href}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                isActive
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-300 dark:hover:text-neutral-400"
              }`}
            >
              <Icon size={14} className={isActive ? "text-white" : "text-neutral-400 dark:text-neutral-400"} />
              {tab.name}
            </Link>
          );
        })}
      </Container>
    </div>
  );
}
