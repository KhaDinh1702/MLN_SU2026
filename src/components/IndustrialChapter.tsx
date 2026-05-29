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

export default function IndustrialChapter() {
  const workerChapterRef = useRef<HTMLDivElement>(null);
  const workerAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    workerAudioRef.current = new Audio("/audio/worker.mp3");
    workerAudioRef.current.loop = true;
    workerAudioRef.current.volume = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const audio = workerAudioRef.current;
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

    if (workerChapterRef.current) {
      observer.observe(workerChapterRef.current);
    }

    return () => {
      observer.disconnect();
      if (workerAudioRef.current) {
        workerAudioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      {/* Statistics Section — Horizontal Page-Level Transitions */}
      <div
        ref={workerChapterRef}
        data-timeline-year="1800 - 1880"
        data-timeline-era="Industrial Age"
      >
        <HorizontalChapter
          bgClassName="bg-on-surface"
          pages={[
            /* Page 1: Chapter Intro */
            <section
              key="w0"
              className="w-full h-full relative flex flex-col items-center justify-center px-8 md:px-24 text-center"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/worker.gif"
                  alt="Industrial workers"
                  className="w-full h-full object-cover grayscale opacity-30 contrast-125"
                />
                <div className="absolute inset-0 bg-on-surface/60" />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-6">
                <p className="font-data-mono text-xs uppercase tracking-[0.4em] text-amber-500">
                  CMCN 1.0 — Thế kỷ XIX
                </p>
                <h2 className="font-headline-xl text-5xl md:text-8xl uppercase text-surface tracking-tighter leading-none">
                  Sức Mạnh
                  <br />
                  <span className="text-primary">Hơi Nước</span>
                </h2>
                <p className="font-body-md text-base md:text-xl text-surface/60 max-w-xl leading-relaxed italic">
                  Cuộn xuống để xem những con số kinh hoàng
                </p>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                  01 / 04
                </div>
              </div>
            </section>,
            /* Page 2: 800% */
            <section
              key="w1"
              className="w-full h-full flex flex-col items-start justify-center px-8 md:px-24 relative"
            >
              <div className="absolute inset-0 bg-on-surface" />
              <div className="relative z-10 flex flex-col gap-4">
                <span className="font-label-caps text-xs text-primary uppercase tracking-[0.4em]">
                  Tăng Trưởng Sản Lượng
                </span>
                <p className="font-data-mono text-[20vw] leading-none font-bold text-surface drop-shadow-2xl">
                  800%
                </p>
                <p className="font-body-md text-lg text-surface/50 italic">
                  Trong vòng 50 năm đầu công nghiệp hóa
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                02 / 04
              </div>
            </section>,
            /* Page 3: 14-16h */
            <section
              key="w2"
              className="w-full h-full flex flex-col items-center justify-center px-8 md:px-24 text-center relative"
            >
              <div className="absolute inset-0 bg-on-surface" />
              <div className="relative z-10 flex flex-col gap-4 items-center">
                <span className="font-label-caps text-xs text-surface/50 uppercase tracking-[0.4em]">
                  Giờ Làm Việc Trung Bình
                </span>
                <p className="font-data-mono text-[18vw] leading-none font-bold text-error">
                  14-16h
                </p>
                <p className="font-body-md text-lg text-surface/50 italic">
                  Mỗi ngày, 6 ngày một tuần, kể cả trẻ em
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                03 / 04
              </div>
            </section>,
            /* Page 4: 17 tuổi */
            <section
              key="w3"
              className="w-full h-full flex flex-col items-end justify-center px-8 md:px-24 text-right relative pb-16 md:pb-0"
            >
              <div className="absolute inset-0 bg-on-surface" />
              <div className="relative z-10 flex flex-col gap-4 items-end pb-8 md:pb-0">
                <span className="font-label-caps text-xs text-surface/50 uppercase tracking-[0.4em]">
                  Tuổi Thọ — Manchester 1840
                </span>
                <p className="font-data-mono text-[22vw] md:text-[28vw] leading-none font-bold text-surface drop-shadow-2xl">
                  17
                </p>
                <p className="font-body-md text-lg text-surface/50 italic">
                  Tuổi — thấp hơn cả thời chiến tranh
                </p>
                <p className="font-body-md text-base text-surface/40 mt-4 max-w-lg leading-relaxed">
                  Cuộc Cách mạng Công nghiệp không chỉ là chiến thắng của máy móc — đó là nguồn gốc của{" "}
                  <span className="text-primary">giai cấp vô sản hiện đại</span>.
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                04 / 04
              </div>
            </section>,
          ]}
        />
      </div>

      {/* Full Bleed Image / Quote Section */}
      <section className="scroll-section w-screen min-h-screen relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60 grayscale"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdf8RbQ9TZbBj4cQOGmI8ZExOYVCJy_S5D2HFIqjQGbKjmUZuoHt_SPgureg4LU5w3DmLnAI8uilAJUkZwD7vggzwrJBIwejnfvaAdou04P1BCHpBWps6lZSoqPbc-AIQ7FrtnGxNto9CZh_2_5UroVn6Rswscn-dBmsuRedpV3EdA5CdoPdcVYp9cRueAlbL_1xs8LruK4oAw_-5uYuJJLOCB_GfEVUnHQnhXEQFR21MvjEXBOJCZeOzun_Ma3z7BpgSVDlRJvlwK')",
          }}
        ></div>
        <div className="absolute inset-0 bg-on-surface/80 mix-blend-multiply"></div>
        <motion.div
          {...scaleUp}
          className="relative z-10 w-full max-w-5xl p-margin-page text-center flex flex-col items-center justify-center gap-margin-page"
        >
          <h3 className="font-headline-lg text-[3rem] md:text-[6rem] text-surface uppercase drop-shadow-2xl tracking-tighter leading-[1.1] mb-margin-page mix-blend-difference">
            Giai Cấp
            <br />
            Vô Sản
          </h3>
          <blockquote className="border-l-[8px] border-primary pl-margin-page py-gutter my-margin-page text-left max-w-3xl">
            <p className="font-body-md text-3xl md:text-5xl italic text-surface leading-snug drop-shadow-md">
              &quot;Máy móc không làm giảm bớt lao động; nó làm cho lao động trở nên đơn điệu và làm suy kiệt hệ thần kinh...&quot;
            </p>
          </blockquote>
        </motion.div>
      </section>
    </>
  );
}
