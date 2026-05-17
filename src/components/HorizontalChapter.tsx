"use client";

import * as Scrollytelling from "@bsmnt/scrollytelling";
import React, { useEffect, useRef } from "react";

interface HorizontalChapterProps {
  /** The pages inside this chapter — each one should be full-screen (w-screen h-screen) */
  pages: React.ReactNode[];
  /** Optional className for the outer scroll container */
  className?: string;
  /** Background color/class for the sticky viewport */
  bgClassName?: string;
}

/**
 * HorizontalChapter — wraps N full-screen pages into a horizontal scroll chapter.
 * The user scrolls DOWN, but the visual transition slides LEFT (horizontal page change).
 * Powered by @bsmnt/scrollytelling (GSAP ScrollTrigger).
 */
export function HorizontalChapter({
  pages,
  className = "",
  bgClassName = "bg-background",
}: HorizontalChapterProps) {
  const count = pages.length;

  // Replace colons from useId to make it fully safe for both DOM ID and CSS selectors
  const rawId = React.useId();
  const trackId = `track-${rawId.replace(/:/g, "-")}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const dingAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Pre-load Ding audio to avoid latency
    dingAudioRef.current = new Audio("/audio/Ding.mp3");
    dingAudioRef.current.volume = 0.35;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play the Ding sound exactly when the user reaches this horizontal chapter
          if (dingAudioRef.current) {
            const audio = dingAudioRef.current;
            audio.currentTime = 0;
            audio.play().catch(() => {});
          }
        }
      },
      {
        threshold: 0.05, // Trigger as soon as the horizontal chapter starts entering the viewport
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Scrollytelling.Root
      // Start when top of spacer hits top of viewport, end when bottom hits bottom
      start="top top"
      end="bottom bottom"
      scrub={1}
    >
      <div
        ref={containerRef}
        className={`relative ${className}`}
        style={{ height: `${count * 100}vh` }}
      >
        {/* Sticky viewport — stays fixed while user scrolls through the spacer */}
        <div className={`sticky top-0 h-screen overflow-hidden ${bgClassName}`}>
          {/* Animated horizontal track */}
          <Scrollytelling.Animation
            tween={{
              target: `#${trackId}`,
              from: { xPercent: 0 },
              to: { xPercent: -((count - 1) / count * 100) },
              start: 0,
              end: 100,
            }}
          />
          <div
            id={trackId}
            className="flex h-full"
            style={{ width: `${count * 100}vw` }}
          >
            {pages.map((page, i) => (
              <div
                key={i}
                className="w-screen h-full shrink-0 relative"
              >
                {page}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Scrollytelling.Root>
  );
}
