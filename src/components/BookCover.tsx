"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

export default function BookCover() {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedRef = useRef(false);
  const [isInteracted, setIsInteracted] = useState(false);

  useEffect(() => {
    if (lenis) {
      if (!isInteracted) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, isInteracted]);

  useEffect(() => {
    // Khởi tạo âm thanh Alert
    audioRef.current = new Audio("/Alert.mp3");
  }, []);

  // Lắng nghe sự kiện cuộn để phát âm thanh duy nhất 1 lần khi bắt đầu tách sách
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10 && !hasPlayedRef.current) {
      hasPlayedRef.current = true;
      if (audioRef.current) {
        audioRef.current.volume = 1.0; // Mở max âm lượng để tiếng Alert kêu to rõ ràng
        audioRef.current.play().catch(() => {
          // Bỏ qua lỗi nếu trình duyệt chặn autoplay do thiếu tương tác
          console.warn("Autoplay bị chặn bởi trình duyệt, sẽ thử lại...");
          hasPlayedRef.current = false; // Đặt lại để thử tiếp khi user cuộn sau khi đã click
        });
      }
    }
  });

  // Hiệu ứng tách đôi: scroll từ 0 đến 800px (khoảng 1 màn hình)
  // Nửa trên sẽ trượt lên (-100%), nửa dưới trượt xuống (100%)
  const topY = useTransform(scrollY, [0, 800], ["0%", "-100%"]);
  const bottomY = useTransform(scrollY, [0, 800], ["0%", "100%"]);

  // Làm mờ dần để tránh các lỗi click ảo khi đã mở hoàn toàn
  const coverOpacity = useTransform(scrollY, [700, 800], [1, 0]);

  // Đảm bảo không block click xuống trang bên dưới sau khi bìa đã tách
  const pointerEvents = useTransform(scrollY, [0, 700, 800], ["auto", "auto", "none"]);

  const handleInteraction = () => {
    if (!isInteracted) {
      setIsInteracted(true);
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col"
      style={{ opacity: coverOpacity, pointerEvents: pointerEvents as any }}
      onClick={handleInteraction}
    >
      {/* Lời nhắc click để mở khóa Audio */}
      {!isInteracted && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <motion.p 
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/90 font-label-caps tracking-[0.4em] text-sm md:text-base"
          >
            CLICK CHUỘT ĐỂ KÍCH HOẠT TRẢI NGHIỆM
          </motion.p>
        </div>
      )}

      {/* Nửa Trên */}
      <motion.div
        style={{
          y: topY,
          backgroundColor: "#000000",
        }}
        className="w-full h-1/2 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] border-b border-white/10 z-20 relative"
      >
        {/* Lớp filter làm tối nhẹ */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Nửa Dưới */}
      <motion.div
        style={{
          y: bottomY,
          backgroundColor: "#000000",
        }}
        className="w-full h-1/2 drop-shadow-[0_-20px_30px_rgba(0,0,0,0.8)] border-t border-white/10 z-10 relative"
      >
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
    </motion.div>
  );
}
