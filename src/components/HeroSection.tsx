"use client";

import { motion } from "framer-motion";
import SpringInteractiveCard from "./SpringInteractiveCard";

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8 },
};

export default function HeroSection() {
  return (
    <>
      {/* Hero / Title Screen */}
      <section
        id="section-hero"
        data-timeline-year="1848"
        data-timeline-era="Communist Manifesto"
        className="scroll-section w-screen min-h-[140vh] py-24 flex flex-col items-center justify-center relative bg-inverse-surface text-surface overflow-hidden"
      >
        {/* Dark, moody cinematic background setup */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 flex items-center justify-center mix-blend-luminosity"
        >
          <img
            className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.25]"
            src="/images/time.gif"
            alt="Vast chronological cycle of time struggle"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/80 via-transparent to-inverse-surface z-0"></div>
        
        {/* Premium React Spring 3D Interactive Title Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 w-full px-4"
        >
          <SpringInteractiveCard className="max-w-2xl w-full mx-auto px-8 py-16 bg-[#000]/70 border border-white/10 backdrop-blur-md rounded-sm shadow-2xl flex flex-col items-center gap-8 group transition-all duration-500 hover:border-primary/50">
            <p className="font-data-mono text-data-mono text-primary uppercase tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              Manifesto MCMXVII
            </p>
            <h1 className="font-headline-xl text-4xl md:text-6xl text-surface uppercase text-center tracking-tighter leading-none transition-transform duration-500 group-hover:scale-[1.02]">
              CUỘN SÁCH
              <br />
              <span className="text-primary group-hover:text-white transition-colors duration-500">ĐẤU TRANH GIAI CẤP</span>
            </h1>
            <div className="w-16 h-[2px] bg-primary/40 group-hover:bg-primary group-hover:w-28 transition-all duration-500"></div>
            <p className="font-label-caps text-label-caps text-surface/40 group-hover:text-surface/80 uppercase mt-4 tracking-widest text-[10px]">
              Cuộn xuống để trải nghiệm
            </p>
          </SpringInteractiveCard>
        </motion.div>
      </section>

      {/* Fragment 1: The Quote */}
      <section className="scroll-section w-screen h-screen flex items-center justify-center relative bg-background border-y-8 border-primary">
        <motion.div
          {...fadeIn}
          className="max-w-4xl mx-auto px-8 text-center relative z-10 flex flex-col items-center"
        >
          <span
            className="material-symbols-outlined text-6xl text-primary mb-8 opacity-20"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_quote
          </span>
          <p className="font-headline-lg-mobile text-3xl md:font-headline-lg md:text-5xl font-bold mb-12 text-on-background leading-tight">
            Giai cấp vô sản không có gì để mất ngoài những xiềng xích của họ.
            <br />
            <span className="text-primary italic mt-4 block">
              Họ có một thế giới để giành lấy.
            </span>
          </p>
          <footer className="font-data-mono text-data-mono text-on-surface-variant flex items-center justify-center gap-4 uppercase tracking-widest">
            <span className="w-12 h-px bg-on-surface-variant block"></span>
            Karl Marx, 1848
            <span className="w-12 h-px bg-on-surface-variant block"></span>
          </footer>
        </motion.div>
      </section>

      {/* --- SECTION 2: INDUSTRIAL REVOLUTION 1.0 (Detailed) --- */}

      {/* Hero Section with Background Image */}
      <section className="scroll-section w-screen h-screen relative bg-on-surface overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDbF73yc63zrMSpze8PZXlh2FpP7XokDc2KTghz0TcNqXGgiUmb7pDwxZiOgI-9sZRJ3F3ufDLy2afzogOm453saJN8YeUZpE6jkZGJ_O14CxkSKHdWGHAVxcIXGnLi-NxhGXStI6EI7R7Qik5EPQ3549cVz1XeGafmVTcramGk39XhvuDV01Rxhqo6B0hvmLxjb1pZ_L83csgpbKGFfTRZ355Bo2sTzLIRDJ73dSn_Dx8ytMi203DtE8nprPNyN739S4DkiceZLDY')",
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        <motion.div
          {...fadeIn}
          className="relative z-10 w-full max-w-4xl p-margin-page text-center"
        >
          <p className="font-data-mono text-xs md:text-sm text-primary uppercase tracking-[0.45em] mb-6 drop-shadow-md">
            — CHƯƠNG II: THẾ KỶ XIX —
          </p>
          <h1 className="font-headline-xl text-[5rem] md:text-[8rem] leading-[0.95] text-surface mb-8 uppercase break-words mix-blend-difference tracking-tighter">
            XIỀNG XÍCH
            <br />
            VẬT LÝ
          </h1>
          <p className="font-body-md text-xl md:text-3xl text-surface max-w-3xl mx-auto drop-shadow-md italic">
            Kỷ nguyên của hơi nước và sắt thép không giải phóng con người; nó
            rèn nên những xiềng xích mới.
          </p>
        </motion.div>
      </section>
    </>
  );
}
