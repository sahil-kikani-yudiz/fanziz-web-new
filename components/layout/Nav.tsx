"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { PRIMARY_NAV } from "@/components/ui/constants";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white dark:bg-neutral-0 border-b border-transparent dark:border-neutral-160 sticky top-0 z-50 transition-colors duration-300 shadow-sm dark:shadow-none">
      <Container className="py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center shadow-xl shrink-0">
              <Activity size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black text-neutral-100 dark:text-white tracking-tighter shrink-0 transition-colors">
              FANZIZ
            </span>
          </Link>
        </div>

        <nav
          className="flex items-center gap-8 overflow-x-auto no-scrollbar py-1 shrink-0"
          aria-label="Primary navigation"
        >
          {PRIMARY_NAV.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[13px] font-black uppercase tracking-widest whitespace-nowrap pb-1 transition-colors ${
                  isActive
                    ? "text-neutral-100 dark:text-white"
                    : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-300 dark:hover:text-neutral-400"
                }`}
              >
                {link.name}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <div className="relative hidden sm:block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
            />
            <input
              type="search"
              placeholder="Search matches &"
              aria-label="Search matches"
              className="w-48 lg:w-56 h-11 pl-10 pr-4 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-neutral-100 dark:text-white text-[13px] placeholder:text-neutral-500 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-colors"
            />
          </div>
          <ThemeToggle />
          <Link
            href="/profile"
            className="flex items-center gap-3 p-1 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 hover:bg-neutral-992 dark:hover:bg-neutral-75 transition-colors"
            aria-label="Profile"
          >
            <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center text-white text-[11px] font-black uppercase shrink-0">
              SK
            </div>
          </Link>
        </div>
      </Container>
    </header>
  );
}
