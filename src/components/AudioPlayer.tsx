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
        className={`flex items-center justify-center w-11 h-11 rounded-full border-2 transition-all duration-300 backdrop-blur-md shrink-0 shadow-[3px_3px_0px_#271902] cursor-pointer ${
          isPlaying
            ? "bg-primary text-white border-primary hover:bg-primary/95"
            : "bg-background text-on-background border-on-surface hover:bg-surface"
        }`}
      >
        {isPlaying ? (
          <svg 
            className="w-5.5 h-5.5 text-current fill-current" 
            viewBox="0 0 24 24"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        ) : (
          <svg 
            className="w-5.5 h-5.5 text-current fill-current" 
            viewBox="0 0 24 24"
          >
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        )}
      </motion.button>
    </>
  );
}
