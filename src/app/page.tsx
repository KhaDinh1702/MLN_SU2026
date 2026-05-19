"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

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

  // Manage reading speed on text-heavy elements using Lenis
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isReading = entries.some((entry) => entry.isIntersecting);
        if (isReading) {
          // Slow down scrolling for narrative sections
          lenis.options.lerp = 0.03;
          lenis.options.wheelMultiplier = 0.5;
        } else {
          // Restore standard snappy fluid smooth scroll
          lenis.options.lerp = 0.1;
          lenis.options.wheelMultiplier = 1.0;
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-15% 0px -15% 0px", // Trigger when center aligned
      }
    );

    const elements = document.querySelectorAll(".text-heavy");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (lenis.options) {
        lenis.options.lerp = 0.1;
        lenis.options.wheelMultiplier = 1.0;
      }
    };
  }, [lenis]);

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
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-40 bg-background/90 backdrop-blur-md border-2 border-on-surface p-4 flex flex-col items-end gap-1 shadow-[4px_4px_0px_#271902] pointer-events-auto"
          >
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
    </main>
  );
}
