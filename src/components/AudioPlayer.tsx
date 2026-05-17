"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  activeYear?: string;
}

export default function AudioPlayer({ activeYear = "1848" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState("/audio/time.mp3");

  // Determine target audio source based on active scroll section
  const targetSrc = activeYear === "1848" ? "/audio/time.mp3" : "/audio/Background.mp3";

  // Initial autoplay setup
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay blocked, waiting for user interaction
      });
    }

    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
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

  // Cinematic audio crossfader when active source changes
  useEffect(() => {
    if (targetSrc !== currentSrc) {
      const audio = audioRef.current;
      if (audio && isPlaying) {
        // Fade out current track
        let vol = audio.volume;
        const fadeOutInterval = setInterval(() => {
          vol = Math.max(vol - 0.05, 0);
          audio.volume = vol;
          if (vol <= 0) {
            clearInterval(fadeOutInterval);
            
            // Switch source safely
            audio.src = targetSrc;
            audio.load();
            setCurrentSrc(targetSrc);

            // Play and fade in new track
            audio.play().then(() => {
              let newVol = 0;
              const fadeInInterval = setInterval(() => {
                newVol = Math.min(newVol + 0.05, 0.3);
                audio.volume = newVol;
                if (newVol >= 0.3) clearInterval(fadeInInterval);
              }, 40);
            }).catch(() => {});
          }
        }, 40);
      } else {
        // If not playing, just switch the source instantly
        setCurrentSrc(targetSrc);
        if (audio) {
          audio.src = targetSrc;
          audio.load();
        }
      }
    }
  }, [targetSrc, currentSrc, isPlaying]);


  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={currentSrc} 
        loop 
        autoPlay 
        onCanPlay={(e) => { 
          // Keep target volume at 0.3 when successfully loaded
          e.currentTarget.volume = 0.3; 
        }} 
      />
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
