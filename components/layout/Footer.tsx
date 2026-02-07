"use client";

import Link from "next/link";
import { Activity, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

const FOOTER_LINKS = {
  product: [
    { label: "Live Scores", href: "#" },
    { label: "News Hub", href: "#" },
    { label: "Reels", href: "#" },
    { label: "Game Zone", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
} as const;

const SOCIAL = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
] as const;

export function Footer() {
  return (
    <footer
      className="mt-8 pt-14 pb-8 border-t border-transparent dark:border-neutral-160 bg-neutral-900 dark:bg-neutral-0/50 transition-colors duration-300"
      role="contentinfo"
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand + tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-neutral-100 dark:text-white hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shrink-0">
                <Activity size={20} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter">FANZIZ</span>
            </Link>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 max-w-xs leading-relaxed">
              Your daily sports digest. Live scores, news, reels, and games—all in one place.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-primary-500 hover:bg-primary-500/10 dark:hover:bg-primary-500/10 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4 transition-colors">
              Product
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-semibold text-neutral-100 dark:text-white hover:text-primary-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4 transition-colors">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-semibold text-neutral-100 dark:text-white hover:text-primary-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4 transition-colors">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-semibold text-neutral-100 dark:text-white hover:text-primary-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4 transition-colors">
              Stay updated
            </h4>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-4">
              Get the best of Fanziz in your inbox.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 min-w-0 h-11 px-4 rounded-xl bg-white dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-neutral-100 dark:text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-11 w-11 shrink-0 rounded-xl bg-primary-500 text-white flex items-center justify-center hover:bg-primary-400 transition-colors"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-transparent dark:border-neutral-160">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Fanziz. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-600">
            Made for fans, by fans.
          </p>
        </div>
      </Container>
    </footer>
  );
}
