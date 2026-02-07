"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Camera, Save } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { LingoMultiSelect } from "@/components/lingo/LingoMultiSelect";

const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("Sports Fan");
  const [email, setEmail] = useState("fan@fanziz.com");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [avatarUrl, setAvatarUrl] = useState(DEFAULT_AVATAR);
  const [selectedLingoIds, setSelectedLingoIds] = useState<string[]>(["10"]);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-995 dark:bg-neutral-0 flex flex-col transition-colors duration-300">
      <Nav />

      <Container as="main" className="flex-1 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 dark:text-neutral-500 hover:text-neutral-100 dark:hover:text-white text-sm font-semibold transition-colors"
          >
            <ChevronLeft size={18} />
            Back to Home
          </Link>
        </div>

        <div className="max-w-2xl mx-auto space-y-10">
          {/* Profile card */}
          <section
            className="rounded-[2rem] bg-white dark:bg-neutral-75 overflow-hidden shadow-lg dark:shadow-none border border-transparent dark:border-neutral-160 transition-colors"
            aria-labelledby="profile-heading"
          >
            <div className="p-6 sm:p-8">
              <h2
                id="profile-heading"
                className="text-[12px] font-black text-neutral-100 dark:text-white uppercase tracking-widest mb-6 transition-colors"
              >
                Profile
              </h2>

              <form onSubmit={handleSave} className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="relative group shrink-0">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-neutral-995 dark:bg-neutral-160 border-2 border-transparent dark:border-neutral-75">
                      <Image
                        src={avatarUrl}
                        alt="Profile"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute bottom-0 right-0 w-8 h-8 rounded-lg bg-primary-500 text-white flex items-center justify-center shadow-lg hover:bg-primary-400 transition-colors"
                      aria-label="Change photo"
                    >
                      <Camera size={14} />
                    </button>
                  </div>
                  <div className="flex-1 w-full space-y-4">
                    <div>
                      <label
                        htmlFor="profile-name"
                        className="block text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 transition-colors"
                      >
                        Full Name
                      </label>
                      <input
                        id="profile-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-neutral-100 dark:text-white text-sm font-medium placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="profile-email"
                        className="block text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 transition-colors"
                      >
                        Email
                      </label>
                      <input
                        id="profile-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-neutral-100 dark:text-white text-sm font-medium placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="profile-phone"
                        className="block text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 transition-colors"
                      >
                        Phone
                      </label>
                      <input
                        id="profile-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-neutral-995 dark:bg-neutral-160 border border-transparent dark:border-neutral-75 text-neutral-100 dark:text-white text-sm font-medium placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-500 text-white text-[11px] font-black uppercase tracking-widest hover:bg-primary-400 transition-colors shadow-lg"
                >
                  <Save size={16} />
                  {saved ? "Saved!" : "Save changes"}
                </button>
              </form>
            </div>
          </section>

          {/* Lingo selection */}
          <section aria-labelledby="lingo-heading">
            <h2
              id="lingo-heading"
              className="text-[12px] font-black text-neutral-100 dark:text-white uppercase tracking-widest mb-4 transition-colors"
            >
              News preferences
            </h2>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-6 transition-colors">
              Choose which Lingos deliver your news and commentary. You can select multiple.
            </p>
            <LingoMultiSelect
              initialSelectedIds={selectedLingoIds}
              onSelectionChange={setSelectedLingoIds}
            />
          </section>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
