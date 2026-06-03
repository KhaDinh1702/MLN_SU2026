/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { HorizontalChapter } from "./HorizontalChapter";

const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8 },
};

export default function DigitalChapter() {
  const digitalChapterRef = useRef<HTMLDivElement>(null);
  const digitalAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    digitalAudioRef.current = new Audio("/audio/digital.mp3");
    digitalAudioRef.current.loop = true;
    digitalAudioRef.current.volume = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const audio = digitalAudioRef.current;
        if (!audio) return;
        if (entry.isIntersecting) {
          audio.play().catch(() => {});
          let vol = 0;
          const fadeIn = setInterval(() => {
            vol = Math.min(vol + 0.05, 0.4);
            audio.volume = vol;
            if (vol >= 0.4) clearInterval(fadeIn);
          }, 100);
        } else {
          let vol = audio.volume;
          const fadeOut = setInterval(() => {
            vol = Math.max(vol - 0.05, 0);
            audio.volume = vol;
            if (vol <= 0) {
              clearInterval(fadeOut);
              audio.pause();
            }
          }, 100);
        }
      },
      { threshold: 0.02 }
    );

    if (digitalChapterRef.current) {
      observer.observe(digitalChapterRef.current);
    }

    return () => {
      observer.disconnect();
      if (digitalAudioRef.current) {
        digitalAudioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      {/* Intro CMCN 3.0 (Split Layout) */}
      <section
        ref={digitalChapterRef}
        data-timeline-year="1900 - 1999"
        data-timeline-era="Kỷ nguyên Tự động hóa"
        className="scroll-section w-screen min-h-screen relative bg-[#050505] flex flex-col md:flex-row items-stretch overflow-hidden border-y border-surface/10"
      >
        <div className="absolute inset-0 pointer-events-none z-10 scanlines opacity-20"></div>
        <div className="absolute inset-0 pointer-events-none z-0 noise mix-blend-overlay"></div>

        {/* Left: Title side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 py-16 md:py-24 relative z-10 border-b md:border-b-0 md:border-r border-surface/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="font-data-mono text-data-mono text-amber-500 uppercase tracking-[0.3em] text-xs">
              CMCN 3.0 — Cuối thế kỷ XX
            </p>
            <h1 className="font-headline-xl text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tighter text-surface-container-lowest">
              Kỷ luật<br />
              <span className="text-primary">Kỹ thuật số</span>
            </h1>
            <div className="w-24 h-1 bg-primary mt-4"></div>
            <p className="font-body-md text-base md:text-lg text-surface-variant max-w-md leading-relaxed mt-4">
              Khi máy tính và tự động hóa thay thế máy hơi nước, một cơ chế kiểm soát mới xuất hiện. Sự cưỡng bức không còn là những chiếc xích sắt hữu hình, mà chuyển sang các dòng lệnh, dữ liệu và màn hình điều khiển.
            </p>
          </motion.div>
        </div>

        {/* Right: Image/Gif side */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden flex items-center justify-center bg-black">
          <motion.img
            initial={{ scale: 1.1, filter: "grayscale(1) contrast(1.2)" }}
            whileInView={{ scale: 1, filter: "grayscale(1) contrast(1.5)" }}
            transition={{ duration: 1.5 }}
            alt="Bảng điều khiển kỹ thuật số"
            className="w-full h-full object-cover grayscale contrast-[1.5] brightness-[0.7]"
            src="/images/digital.gif"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent pointer-events-none hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none md:hidden"></div>
        </div>
      </section>

      {/* The Stat - 95% */}
      <section className="scroll-section w-screen min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-20 bg-[#050505]">
        <div className="absolute inset-0 pointer-events-none z-10 scanlines opacity-10"></div>
        <motion.div
          {...scaleUp}
          className="max-w-4xl mx-auto flex flex-col items-center justify-center"
        >
          <p className="font-data-mono text-xl md:text-3xl mb-8 text-surface-container-lowest/60 uppercase tracking-[0.2em]">
            Thời gian nghỉ
          </p>
          <h2 className="font-headline-xl text-[20vw] md:text-[15vw] leading-none text-error font-extrabold tracking-tighter">
            GIẢM 95%
          </h2>
          <div className="w-px h-24 bg-error/50 mt-12 mb-6"></div>
          <p className="font-data-mono text-sm text-surface-container-lowest/40 uppercase tracking-widest">
            HỆ THỐNG ĐÃ GIÁM SÁT
          </p>
        </motion.div>
      </section>

      {/* Glass Cage — 4-page Horizontal Chapter */}
      <div
        data-timeline-year="2000 - 2026"
        data-timeline-era="Kỷ nguyên Số"
      >
        <HorizontalChapter
          bgClassName="bg-[#050505]"
          pages={[
            /* Page 1: Chapter Title */
            <section
              key="g0"
              className="w-full h-full relative flex flex-col items-center justify-center px-8 md:px-24 text-center bg-black overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none scanlines opacity-10 z-0" />
              
              <div className="relative z-10 flex flex-col items-center gap-5">
                <p className="font-data-mono text-sm md:text-base uppercase tracking-[0.4em] text-primary font-bold">
                  CMCN 4.0
                </p>
                <h1 className="font-headline-xl text-5xl md:text-7xl uppercase text-surface-container-lowest font-extrabold tracking-tighter leading-none">
                  Chiếc Lồng
                  <br />
                  <span className="text-primary">Kính</span>
                </h1>

                {/* The Glass Cage Artwork Box - Thu nhỏ để tạo cảm giác nhỏ bé */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-48 h-48 md:w-64 md:h-64 my-2 overflow-hidden border-2 border-on-surface bg-background/50 shadow-[4px_4px_0px_#271902] relative shrink-0"
                >
                  <img
                    alt="Người lao động trong lồng kính kỹ thuật số"
                    className="w-full h-full object-cover contrast-110"
                    src="/images/glassCage.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>

                <p className="font-body-md text-base md:text-xl text-primary-fixed max-w-2xl italic leading-relaxed">
                  Sự bóc lột tự nguyện trong kỷ nguyên số.
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                01 / 04
              </div>
            </section>,
            /* Page 2: Quyền Lực Thuật Toán */
            <section
              key="g1"
              className="w-full h-full flex flex-col items-start justify-center px-8 md:px-24 relative bg-[#050505]"
            >
              <div className="flex flex-col gap-6">
                <p className="font-data-mono text-xs uppercase tracking-[0.4em] text-primary">
                  Bản Chất Quyền Lực
                </p>
                <h2 className="font-headline-xl text-4xl md:text-7xl text-primary font-extrabold uppercase tracking-tight leading-tight">
                  Quyền Lực
                  <br />
                  Thuật Toán
                </h2>
                <div className="w-16 h-px bg-primary" />
                <p className="font-body-md text-lg md:text-2xl text-surface-container-lowest max-w-2xl leading-relaxed">
                  Thuật toán thay thế quản đốc phân xưởng.
                  <br />
                  Nó vô hình, lạnh lùng và <em>không thể thương lượng</em>.
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                02 / 04
              </div>
            </section>,
            /* Page 3: Cô Lập */
            <section
              key="g2"
              className="w-full h-full flex flex-col items-center justify-center px-8 md:px-24 text-center relative bg-[#050505]"
            >
              <div className="flex flex-col items-center gap-6">
                <p className="font-data-mono text-xs uppercase tracking-[0.4em] text-surface/40">
                  Hiệu Quả Kiểm Soát
                </p>
                <p className="font-body-md text-3xl md:text-5xl lg:text-6xl text-surface-variant max-w-4xl leading-snug">
                  Người lao động bị cô lập
                  <br />
                  trong các <span className="text-error italic">ô vuông màn hình</span>,
                  <br />
                  mất đi sự kết nối giai cấp thiết yếu.
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                03 / 04
              </div>
            </section>,
            /* Page 4: Nguyên Tử Rời Rạc */
            <section
              key="g3"
              className="w-full h-full flex flex-col items-end justify-center px-8 md:px-24 text-right relative bg-[#050505]"
            >
              <div className="flex flex-col items-end gap-6">
                <p className="font-data-mono text-xs uppercase tracking-[0.4em] text-surface/40">
                  Kết Quả Cuối Cùng
                </p>
                <p className="font-body-md text-3xl md:text-5xl lg:text-6xl text-primary-fixed max-w-4xl leading-snug">
                  Sự cô lập này biến <span className="text-surface font-semibold">&quot;tập thế&quot;</span>
                  <br />
                  thành những <span className="text-error italic">&quot;nguyên tử&quot; rời rạc</span>,
                  <br />
                  dễ dàng bị thao túng.
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                04 / 04
              </div>
            </section>,
          ]}
        />
      </div>
    </>
  );
}
