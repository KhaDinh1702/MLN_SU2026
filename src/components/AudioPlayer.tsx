"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Cố gắng phát nhạc ngay lập tức khi trang vừa tải
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Trình duyệt chặn autoplay, chờ tương tác
      });
    }

    // Dự phòng: Phát nhạc khi người dùng tương tác lần đầu nếu chưa phát
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Trình duyệt chặn autoplay nếu tương tác chưa đủ mạnh
        });
      }
      
      // Xóa sự kiện sau khi đã tương tác
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài gây trigger handleInteraction
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/Background.mp3" loop autoPlay onCanPlay={(e) => { e.currentTarget.volume = 0.3; }} />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 backdrop-blur-md border shrink-0 ${
          isPlaying
            ? "bg-primary/20 text-primary border-primary shadow-[0_0_20px_rgba(108,27,24,0.4)]"
            : "bg-surface-variant/20 text-surface-variant border-surface-variant/30 hover:bg-surface-variant/40 hover:text-surface"
        }`}
      >
        <span
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {isPlaying ? "volume_up" : "volume_off"}
        </span>
      </motion.button>
    </>
  );
}
