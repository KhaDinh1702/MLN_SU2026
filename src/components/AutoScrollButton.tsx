"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AutoScrollButton() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState<0.25 | 0.55 | 1.15>(0.55);
  const [showSpeedControls, setShowSpeedControls] = useState(false);
  const reqRef = useRef<number | null>(null);
  const scrollAccumulator = useRef(0);

  // Thuật toán cuộn mượt bằng RequestAnimationFrame và Accumulator
  useEffect(() => {
    const scrollStep = () => {
      scrollAccumulator.current += scrollSpeed;

      if (scrollAccumulator.current >= 1) {
        const pixels = Math.floor(scrollAccumulator.current);
        window.scrollBy({ top: pixels, behavior: "auto" });
        scrollAccumulator.current -= pixels;
      }

      reqRef.current = requestAnimationFrame(scrollStep);
    };

    if (isAutoScrolling) {
      reqRef.current = requestAnimationFrame(scrollStep);
    } else {
      if (reqRef.current !== null) {
        cancelAnimationFrame(reqRef.current);
      }
    }

    return () => {
      if (reqRef.current !== null) {
        cancelAnimationFrame(reqRef.current);
      }
    };
  }, [isAutoScrolling, scrollSpeed]);

  // UX Tốt Nhất: Tự động tạm dừng khi phát hiện người dùng chủ động lăn chuột hoặc vuốt màn hình
  useEffect(() => {
    const handleUserScroll = () => {
      if (isAutoScrolling) {
        setIsAutoScrolling(false);
      }
    };

    // Lắng nghe cả sự kiện cuộn chuột, vuốt màn hình (mobile) và phím bấm điều hướng
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    window.addEventListener("keydown", handleUserScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
      window.removeEventListener("keydown", handleUserScroll);
    };
  }, [isAutoScrolling]);

  // Tự động đóng speed controls sau 3 giây không tương tác
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowSpeedControls(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowSpeedControls(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="flex items-center gap-2 relative z-50 pointer-events-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Nút kích hoạt chính (Main Action Button) */}
      <div className="relative">
        {/* Pulsing glow ring when active */}
        {isAutoScrolling && (
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping z-0 pointer-events-none"></span>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          className={`relative z-10 flex items-center justify-center w-11 h-11 rounded-full border-2 transition-all duration-300 backdrop-blur-md shrink-0 shadow-[3px_3px_0px_#271902] cursor-pointer ${
            isAutoScrolling
              ? "bg-primary text-white border-primary hover:bg-primary/95"
              : "bg-background text-on-background border-on-surface hover:bg-surface"
          }`}
          title={isAutoScrolling ? "Tắt tự động cuộn (Hoặc lăn chuột để tắt)" : "Bật tự động cuộn"}
        >
          {isAutoScrolling ? (
            /* Pause Icon - SVG */
            <svg 
              className="w-5.5 h-5.5 text-current fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            /* Play/Arrow Icon - SVG */
            <svg 
              className="w-5.5 h-5.5 text-current fill-current ml-0.5" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* 2. Thanh điều khiển tốc độ (Expandable Drawer) */}
      <AnimatePresence>
        {showSpeedControls && (
          <motion.div
            initial={{ opacity: 0, x: 10, width: 0 }}
            animate={{ opacity: 1, x: 0, width: "auto" }}
            exit={{ opacity: 0, x: 10, width: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center bg-background/95 border border-on-surface backdrop-blur-md px-3 py-1.5 shadow-[2px_2px_0px_#271902] h-10 gap-1.5 overflow-hidden"
          >
            <span className="font-data-mono text-[8px] uppercase tracking-wider text-on-background/50 mr-1 select-none font-bold">
              SPEED:
            </span>
            {[
              { label: "Slow", val: 0.25 },
              { label: "Med", val: 0.55 },
              { label: "Fast", val: 1.15 }
            ].map((speedOpt) => {
              const isActive = scrollSpeed === speedOpt.val;
              return (
                <button
                  key={speedOpt.label}
                  onClick={() => {
                    setScrollSpeed(speedOpt.val as any);
                    if (!isAutoScrolling) setIsAutoScrolling(true);
                  }}
                  className={`font-data-mono text-[9px] font-bold px-2 py-0.5 border cursor-pointer transition-colors ${
                    isActive
                      ? "bg-primary text-white border-primary"
                      : "bg-surface/5 border-on-surface/20 text-on-background/60 hover:bg-surface/20 hover:text-on-background hover:border-on-surface/40"
                  }`}
                >
                  {speedOpt.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
