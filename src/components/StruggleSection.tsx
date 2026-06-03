"use client";

import { motion } from "framer-motion";
import { HorizontalChapter } from "./HorizontalChapter";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8 },
};

const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8 },
};

export default function StruggleSection() {
  return (
    <>
      {/* --- SECTION 5.5 HOOK: ẢO TƯỞNG TỰ DO --- */}
      <section className="scroll-section w-screen min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-background border-y-8 border-primary">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <p className="font-data-mono text-data-mono text-on-surface-variant uppercase tracking-[0.3em]">
            Nhiệm vụ — 3.2.1
          </p>
          <h2 className="font-headline-lg text-4xl md:text-6xl lg:text-7xl font-bold text-on-background uppercase leading-tight tracking-tighter">
            Bạn có thực sự <span className="text-primary italic">tự do</span>
            <br />
            không?
          </h2>
          <p className="font-body-md text-lg md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed">
            Nhiều người trẻ bỏ văn phòng để làm freelancer, content creator — tin rằng mình đã thoát khỏi sự bóc lột. Nhưng họ có thực sự làm chủ tư liệu sản xuất?
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 5: TWO CENTURIES, ONE WAR --- */}

      {/* Comparison Title Section */}
      <section className="scroll-section min-h-screen flex flex-col items-center justify-center text-center p-8 relative bg-on-surface">
        <motion.h1
          {...scaleUp}
          className="font-headline-xl text-[8vw] md:text-[100px] leading-tight text-surface uppercase tracking-tighter mb-8 drop-shadow-2xl"
        >
          HAI THẾ KỶ.
          <br />
          MỘT CUỘC CHIẾN.
        </motion.h1>
        <motion.p
          {...fadeIn}
          className="font-body-md text-xl md:text-2xl text-tertiary-fixed max-w-3xl mx-auto opacity-80"
        >
          Sự bóc lột thay đổi hình thức. Không thay đổi bản chất.
        </motion.p>
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-8 h-8 text-primary opacity-50" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Comparison Quote Section */}
      <section className="scroll-section min-h-screen flex flex-col items-center justify-center text-center bg-[#1a1101] p-8">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto px-4">
          <div className="text-[120px] font-headline-xl text-primary leading-[0.3] mb-8 opacity-50">
            &quot;
          </div>
          <blockquote className="font-headline-lg text-3xl md:text-5xl text-surface uppercase tracking-tight leading-snug">
            Cỗ máy cướp công cụ. <br />
            <span className="text-primary">Thuật toán</span> cướp tâm trí. <br />
            <span className="text-on-surface-variant">Kẻ thù là dữ liệu.</span>
          </blockquote>
        </motion.div>
      </section>

      {/* Comparison Split Section - Image Centric Sticky Scroll */}
      <section
        data-timeline-year="1824 vs 2024"
        data-timeline-era="Kỷ nguyên Song song"
        className="relative w-full h-[200vh] bg-[#050505]"
      >
        <div className="sticky top-0 w-full h-screen flex flex-col md:flex-row overflow-hidden">
          {/* 1824 - Left Side */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden border-b md:border-b-0 md:border-r border-primary/20 bg-black">
            {/* Massive Background Image */}
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 w-full h-full bg-cover bg-center grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
              style={{ backgroundImage: "url('/images/machinechain.gif')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-80 pointer-events-none"></div>

            {/* Minimal Text */}
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20 pointer-events-none">
              <h2 className="font-headline-xl text-[80px] md:text-[140px] leading-none text-white mb-2 tracking-tighter drop-shadow-2xl">
                1824
              </h2>
              <p className="font-label-caps text-sm md:text-xl text-white font-bold uppercase tracking-widest drop-shadow-md bg-black/80 inline-block px-4 py-2 border-l-4 border-primary">
                XIỀNG XÍCH VẬT LÝ
              </p>
            </div>
          </div>

          {/* 2024 - Right Side */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden bg-[#050505]">
            {/* Massive Background Video */}
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/images/Working.mp4"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 opacity-90 pointer-events-none"></div>

            {/* Minimal Text */}
            <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 text-right pointer-events-none">
              <h2 className="font-headline-xl text-[80px] md:text-[140px] leading-none text-white mb-2 tracking-tighter drop-shadow-2xl">
                2024
              </h2>
              <p className="font-label-caps text-sm md:text-xl text-white font-bold uppercase tracking-widest drop-shadow-md bg-black/80 inline-block px-4 py-2 border-r-4 border-surface-variant">
                XIỀNG XÍCH THUẬT TOÁN
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 5.5: ẢO TƯỞNG TỰ DO — TIẾP THEO --- */}

      {/* Scene: Tư liệu sản xuất là gì */}
      <section className="scroll-section w-screen min-h-screen relative bg-on-surface overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 opacity-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale brightness-90"
            src="/images/eyes.mp4"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 z-5" />
        <motion.div {...fadeIn} className="relative z-10 w-full max-w-5xl px-8 py-20 flex flex-col items-center gap-16">
          <h2 className="font-headline-xl text-[6vw] md:text-[5rem] uppercase text-surface tracking-tighter text-center leading-[1.1]">
            Kẻ nào kiểm soát
            <br />
            <span className="text-primary">Tư Liệu Sản Xuất</span>
            <br />
            kẻ đó có quyền lực.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {[
              {
                era: "Thế kỷ XIX",
                asset: "Nhà máy\nRuộng đất\nMáy móc",
                color: "border-surface-variant",
              },
              {
                era: "Thế kỷ XX",
                asset: "Vốn tài chính\nBằng sáng chế\nChuỗi cung ứng",
                color: "border-tertiary-fixed",
              },
              {
                era: "Thế kỷ XXI",
                asset: "Nền tảng số\nThuật toán\nDữ liệu người dùng",
                color: "border-primary",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`border-l-4 ${item.color} pl-6 py-4 flex flex-col gap-3`}
              >
                <span className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest text-xs">
                  {item.era}
                </span>
                <p className="font-data-mono text-surface text-lg leading-relaxed whitespace-pre-line">
                  {item.asset}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            {...fadeIn}
            className="font-body-md text-2xl md:text-3xl text-primary-fixed text-center max-w-3xl leading-snug"
          >
            Bạn có laptop. Họ có nền tảng. <br />
            <span className="text-surface/60 text-xl">Ai đang thực sự làm chủ?</span>
          </motion.p>
        </motion.div>
      </section>

      {/* Bóc Lột Vô Hình — 3-page Horizontal Chapter */}
      <div
        data-timeline-year="2026"
        data-timeline-era="Đấu tranh Số"
      >
        <HorizontalChapter
          bgClassName="bg-[#050505]"
          pages={[
            /* Page 1: 01 / THUẬT TOÁN */
            <section
              key="e0"
              className="w-full h-full flex flex-col justify-center px-8 md:px-24 relative bg-black overflow-hidden"
            >
              {/* Background Video */}
              <div className="absolute inset-0 z-0 opacity-60">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover grayscale brightness-90"
                  src="/images/algorithm.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute inset-0 scanlines opacity-15 pointer-events-none z-10" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <p className="font-data-mono text-xs uppercase tracking-[0.4em] text-error">
                  01 / THUẬT TOÁN
                </p>
                <h2 className="font-headline-xl text-5xl md:text-8xl uppercase text-surface tracking-tighter leading-none">
                  Quản đốc
                  <br />
                  <span className="text-error">Vô Hình</span>
                </h2>
                <div className="w-16 h-px bg-error" />
                <p className="font-body-md text-lg md:text-2xl text-surface/60 max-w-2xl leading-relaxed">
                  Không có roi, không có tiếng quát. Thuật toán kiểm soát bạn bằng sự sợ hãi tụt view. Nó ép
                  bạn đăng bài liên tục, không ngừng nghỉ, không có ngày nghỉ phép.
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                01 / 03
              </div>
            </section>,
            /* Page 2: 02 / DỮ LIỆU */
            <section
              key="e1"
              className="w-full h-full flex flex-col justify-center items-center text-center px-8 md:px-24 relative"
            >
              <div className="absolute inset-0 scanlines opacity-10 pointer-events-none z-0" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <p className="font-data-mono text-xs uppercase tracking-[0.4em] text-primary">
                  02 / DỮ LIỆU
                </p>
                <h2 className="font-headline-xl text-5xl md:text-8xl uppercase text-surface tracking-tighter leading-none">
                  Giá trị
                  <br />
                  <span className="text-primary">Thặng Dư Số</span>
                </h2>
                <div className="w-16 h-px bg-primary" />
                <p className="font-body-md text-lg md:text-2xl text-surface/60 max-w-2xl leading-relaxed">
                  Mỗi lượt xem, mỗi click, mỗi giây bạn dán mắt vào màn hình đều tạo ra lợi nhuận cho nền
                  tảng. Bạn sáng tạo nội dung. Họ bán quảng cáo tỷ đô. <em>Bạn nhận lại bao nhiêu?</em>
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                02 / 03
              </div>
            </section>,
            /* Page 3: 03 / TÂM LÝ */
            <section
              key="e2"
              className="w-full h-full flex flex-col justify-center items-end text-right px-8 md:px-24 relative"
            >
              <div className="absolute inset-0 scanlines opacity-10 pointer-events-none z-0" />
              <div className="relative z-10 flex flex-col items-end gap-6">
                <p className="font-data-mono text-xs uppercase tracking-[0.4em] text-tertiary-fixed">
                  03 / TÂM LÝ
                </p>
                <h2 className="font-headline-xl text-5xl md:text-8xl uppercase text-surface tracking-tighter leading-none">
                  Tự
                  <br />
                  <span className="text-tertiary-fixed">Bóc Lột</span>
                </h2>
                <div className="w-16 h-px bg-tertiary-fixed ml-auto" />
                <p className="font-body-md text-lg md:text-2xl text-surface/60 max-w-2xl leading-relaxed">
                  Dưới ảo giác &quot;làm vì đam mê&quot;, bạn tự vắt kiệt sức mình không cần ai ép buộc. Không
                  bảo hiểm. Không ngày nghỉ. Không quyền lợi lao động.{" "}
                  <em>Nền tảng hưởng lợi — bạn gánh rủi ro.</em>
                </p>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-data-mono text-xs text-surface/30 uppercase tracking-widest">
                03 / 03
              </div>
            </section>,
          ]}
        />
      </div>
    </>
  );
}
