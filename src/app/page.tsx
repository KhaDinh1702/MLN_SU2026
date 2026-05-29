"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

import AutoScrollButton from "@/components/AutoScrollButton";
import BookCover from "@/components/BookCover";
import AudioPlayer from "@/components/AudioPlayer";

import HeroSection from "@/components/HeroSection";
import IndustrialChapter from "@/components/IndustrialChapter";
import DigitalChapter from "@/components/DigitalChapter";
import StruggleSection from "@/components/StruggleSection";
import FinaleSection from "@/components/FinaleSection";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [activeTimeline, setActiveTimeline] = useState({
    year: "1848",
    era: "Communist Manifesto",
  });
  const [showTimeline, setShowTimeline] = useState(false);
  const [isTimelineCollapsed, setIsTimelineCollapsed] = useState(false);


  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTimeline(latest > 300);
  });

  // Track active year and era dynamically on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const year = visibleEntry.target.getAttribute("data-timeline-year");
          const era = visibleEntry.target.getAttribute("data-timeline-era");
          if (year && era) {
            setActiveTimeline({ year, era });
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const elements = document.querySelectorAll("[data-timeline-year]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <main className="w-full flex flex-col">
      <BookCover />
      {/* Spacer to allow user to scroll to open book cover */}
      <div className="h-[120vh] w-full shrink-0"></div>

      {/* Subtle Brand Indicator */}
      <div className="fixed top-margin-page left-margin-page z-40">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline-lg text-[10px] md:text-[12px] font-extrabold text-surface drop-shadow-md tracking-tighter mix-blend-difference"
        >
          COLLECTIVE STRUGGLE
        </motion.div>
      </div>

      {/* Narrative Sections */}
      <HeroSection />
      <IndustrialChapter />
      <DigitalChapter />
      <StruggleSection />
      <FinaleSection onStartGame={() => router.push("/game")} />

      {/* Floating Menu (Fixed bottom left, only shows when book is opened) */}
      <div className="fixed bottom-8 left-8 z-40 flex flex-col gap-4 items-start pointer-events-none">
        <div className="pointer-events-auto">
          <AudioPlayer activeYear={activeTimeline.year} />
        </div>
        <div className="pointer-events-auto">
          <AutoScrollButton />
        </div>
      </div>

      {/* Floating Timeline Badge (Fixed bottom right, only shows when book is opened) */}
      <AnimatePresence>
        {showTimeline && (
          <AnimatePresence mode="wait">
            {isTimelineCollapsed ? (
              <motion.button
                key="collapsed"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 0.8, scale: 1, x: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsTimelineCollapsed(false)}
                className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-background border-2 border-on-surface flex flex-col items-center justify-center shadow-[3px_3px_0px_#271902] pointer-events-auto hover:bg-primary transition-colors cursor-pointer group"
                title="Mở rộng dòng thời gian"
              >
                <span className="text-[8px] uppercase tracking-tighter opacity-50 font-bold group-hover:text-white/80">ERA</span>
                <span className="font-data-mono text-[9px] font-extrabold text-on-background group-hover:text-white leading-none -mt-0.5">
                  {activeTimeline.year.includes(" - ") ? activeTimeline.year.split(" - ")[0] : activeTimeline.year}
                </span>
              </motion.button>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 0.75, scale: 1, x: 0 }}
                whileHover={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.2 }}
                className="fixed bottom-8 right-8 z-40 bg-background/90 backdrop-blur-md border-2 border-on-surface p-4 flex flex-col items-end gap-1 shadow-[4px_4px_0px_#271902] pointer-events-auto transition-opacity duration-200"
              >
                <button
                  onClick={() => setIsTimelineCollapsed(true)}
                  className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full bg-background border border-on-surface flex items-center justify-center hover:bg-error hover:text-white shadow-[1px_1px_0px_#271902] transition-colors cursor-pointer"
                  title="Thu gọn"
                >
                  <span className="text-[10px] leading-none select-none font-bold">✕</span>
                </button>
                <span className="text-[10px] uppercase tracking-[0.25em] opacity-40 text-on-background font-data-mono font-bold">
                  Historical Era
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeTimeline.year}
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl md:text-2xl font-extrabold text-on-surface tracking-tighter font-data-mono"
                  >
                    {activeTimeline.year}
                  </motion.span>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeTimeline.era}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[9px] uppercase tracking-widest text-on-surface font-semibold text-right font-data-mono"
                  >
                    {activeTimeline.era}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </AnimatePresence>
    </main>
  );
}
