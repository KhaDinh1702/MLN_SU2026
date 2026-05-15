"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function AutoScrollButton() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const reqRef = useRef<number | null>(null);

  const scrollAccumulator = useRef(0);

  useEffect(() => {
    const scrollStep = () => {
      // Trình duyệt thường bỏ qua giá trị scroll lẻ (ví dụ 0.25px). 
      // Dùng accumulator để cộng dồn đến khi >= 1px thì mới thực hiện cuộn.
      scrollAccumulator.current += 0.45;

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
  }, [isAutoScrolling]);

  // Tạm dừng auto scroll nếu người dùng chủ động kéo chuột mạnh (tùy chọn)
  // Trong phiên bản này, chỉ cho phép bật/tắt thủ công bằng nút bấm để rõ ràng thao tác.

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsAutoScrolling(!isAutoScrolling)}
      className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 backdrop-blur-md border shrink-0 ${isAutoScrolling
        ? "bg-primary/20 text-primary border-primary shadow-[0_0_20px_rgba(108,27,24,0.4)]"
        : "bg-surface-variant/20 text-surface-variant border-surface-variant/30 hover:bg-surface-variant/40 hover:text-surface"
        }`}
      title={isAutoScrolling ? "Tắt tự động cuộn" : "Bật tự động cuộn"}
    >
      <span
        className="material-symbols-outlined text-xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {isAutoScrolling ? "pause_circle" : "play_circle"}
      </span>
    </motion.button>
  );
}
