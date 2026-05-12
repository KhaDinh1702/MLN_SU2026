"use client";

import { motion } from "framer-motion";

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <main className="w-full flex flex-col">
      {/* Subtle Brand Indicator */}
      <div className="fixed top-margin-page left-margin-page z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-surface drop-shadow-md tracking-tighter mix-blend-difference"
        >
          COLLECTIVE STRUGGLE
        </motion.div>
      </div>

      {/* --- INTRO SECTIONS --- */}

      {/* Hero / Title Screen */}
      <section className="scroll-section w-screen h-screen flex flex-col items-center justify-center relative bg-inverse-surface text-surface overflow-hidden">
        {/* Dark, moody cinematic background setup */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 flex items-center justify-center mix-blend-luminosity"
        >
          <img
            alt="Industrial machinery"
            className="w-full h-full object-cover filter contrast-150"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATvYg188qgX0SdTr3lClDlhgvQljjib0vp4BjptleOnf9DV2hDdDzV6qd3y8LyB777-MG3XhYiNTxWsuBDw6d0KCU6hRqRA0WgOuALHh5S6jD14J4KeokjfYu7wFSANX29VCGvbCnlsyqEmKWbtdZDovjdqj7Eu58nwn5Wm8dN4pKzN-P1d_-HFPQNh9VIScbB9mhfWdYL1vvFOVF5cHNTg3Rzrxjuo7E_f3LNdPcyDj6yXC577153GVVVyyVZzYzSNiaI2SIdCGiM"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/80 via-transparent to-inverse-surface z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center gap-8"
        >
          <p className="font-data-mono text-data-mono text-surface uppercase tracking-[0.3em] opacity-100">
            Manifesto MCMXVII
          </p>
          <h1 className="font-headline-xl text-[4rem] md:text-[10rem] text-surface uppercase text-center tracking-tighter drop-shadow-2xl mix-blend-screen text-primary-fixed leading-tight">
            CUỘN SÁCH
            <br />
            <span className="text-surface">ĐẤU TRANH GIAI CẤP</span>
          </h1>
          <motion.div
            animate={{ height: [0, 96, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-px bg-primary mt-8"
          ></motion.div>
          <p className="font-label-caps text-label-caps text-surface/50 uppercase mt-4">
            Cuộn xuống để trải nghiệm
          </p>
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
          <h1 className="font-headline-xl text-[5rem] md:text-[8rem] leading-[1.1] text-surface mb-margin-page uppercase break-words mix-blend-difference tracking-tighter">
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

      {/* Statistics Section - Single Column Immersive */}
      <section className="scroll-section w-screen min-h-screen relative bg-on-surface text-surface py-[80px] md:py-[120px] px-margin-page flex flex-col items-center justify-center gap-[60px] md:gap-[100px]">
        <motion.div {...fadeIn} className="text-center w-full max-w-3xl">
          <h2 className="font-headline-lg text-[3rem] md:text-[5rem] uppercase text-primary tracking-tighter leading-[1.1] mb-gutter">
            Sức Mạnh
            <br />
            Hơi Nước
          </h2>
        </motion.div>
        <div className="flex flex-col gap-[60px] md:gap-[100px] w-full max-w-4xl mx-auto">

          {[
            { label: "Tăng Trưởng Sản Lượng", value: "800%" },
            { label: "Giờ Làm Việc Trung Bình", value: "14-16h" },
            { label: "Tuổi Thọ (Manchester 1840)", value: "17" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex flex-col gap-unit items-center text-center"
            >
              <span className="font-label-caps text-label-caps text-surface-variant uppercase tracking-[0.3em]">
                {stat.label}
              </span>
              <span className="font-data-mono text-data-mono text-7xl md:text-9xl font-bold text-surface">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

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
              &quot;Máy móc không làm giảm bớt lao động; nó làm cho lao động trở
              nên đơn điệu và làm suy kiệt hệ thần kinh...&quot;
            </p>
          </blockquote>
        </motion.div>
      </section>

      {/* --- REMAINING INTRO SECTIONS --- */}

      {/* --- SECTION 3: CMCN 3.0 - DIGITAL DISCIPLINE --- */}

      {/* Intro CMCN 3.0 */}
      <section className="scroll-section w-screen min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-10 scanlines opacity-20"></div>
        <div className="absolute inset-0 pointer-events-none z-0 noise mix-blend-overlay"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="absolute top-10 left-1/2 -translate-x-1/2 font-data-mono text-label-caps tracking-widest uppercase"
        >
          CMCN 3.0
        </motion.div>
        
        <motion.h1 
          {...fadeIn}
          className="font-headline-xl text-[10vw] md:text-[8vw] uppercase leading-[0.9] tracking-tighter text-surface-container-lowest drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Kỷ luật<br/>Kỹ thuật số
        </motion.h1>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-data-mono text-label-caps tracking-widest opacity-50 uppercase flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <span className="material-symbols-outlined text-sm">arrow_downward</span>
        </motion.div>
      </section>

      {/* Dramatic Image Reveal */}
      <section className="scroll-section w-screen min-h-screen relative flex flex-col items-center py-20 px-4 bg-[#050505]">
        <div className="sticky top-0 w-full h-[100vh] flex items-center justify-center overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, filter: "grayscale(1) contrast(1.2)" }}
            whileInView={{ scale: 1, filter: "grayscale(1) contrast(1.5)" }}
            transition={{ duration: 1.5 }}
            alt="Vintage analog computer terminal"
            className="w-full max-w-7xl max-h-[90vh] object-cover md:object-contain grayscale contrast-[1.5] brightness-[0.8] drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmsYu6vs8NLUgLU9bHY9jZseowZtoL3hM1Flm7JcQJRCmuiqIBiZ8-HjkSum9t-_BK0Mf0cbCSjc3HbddYmYLwt-urzze0lKlCU-Woznj1hyFx_w-t5E1ZRPBIw_MW4kwQU8Nn0ejqZecLw0R2QGAWdEwJk7lsRnF75Pu0VYzPvYwwkpt8eghVeuPoBAt-pv6Bf4kmmLll4ycRIPZd7DV-h3ABb1puoVLlAklEU1sEFnCXXBFjqHoobMXKgaHZ8FvauO1GpQ9r0ZQh"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
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
          <h2 className="font-headline-xl text-[20vw] md:text-[15vw] leading-none text-error font-extrabold tracking-tighter drop-shadow-[0_0_30px_rgba(186,26,26,0.6)]">
            GIẢM 95%
          </h2>
          <div className="w-px h-24 bg-error/50 mt-12 mb-6"></div>
          <p className="font-data-mono text-sm text-surface-container-lowest/40 uppercase tracking-widest">
            System Monitored
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 4: CMCN 4.0 - THE GLASS CAGE --- */}

      <section className="relative w-full bg-on-surface">
        {/* Fixed Background Image for this sub-flow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            alt="Worker in a digital cage"
            className="sticky top-0 w-full h-screen object-cover grayscale opacity-20 contrast-150 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLjNh8trU9lV98kZb6RX51Z9uBnpPM7wGkgp4hoNjhGRGMS1uC4-MBH1OKFuchfIjpTlAP5Tb8mwuTFmaDD_PRQp8HTMZucZootGMmCFvv8eqwcygd_KraHtzWykMZgFXqojY1w368i95J5HVTm8uxKujk2K1hjyoYzHNDt-Th95ZuizzIUlZMptiz7Ff9yXdBa5JANxzcWUCSHKYSuxwnPrEJESrXx8kLlhhl3rrZ3iDxRGuB28V93-JptBaGRfJIxqOORko2zXno"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-on-surface/50 to-on-surface"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <section className="scroll-section min-h-screen flex flex-col items-center justify-center p-margin-page text-center w-full">
            <motion.h1 
              {...scaleUp}
              className="font-headline-xl text-5xl md:text-7xl lg:text-[8vw] uppercase text-surface-container-lowest font-extrabold tracking-tighter drop-shadow-2xl mb-gutter leading-none"
            >
              The Glass Cage
            </motion.h1>
            <motion.p 
              {...fadeIn}
              className="font-headline-lg-mobile text-primary-fixed max-w-3xl drop-shadow-md"
            >
              CMCN 4.0: Sự bóc lột tự nguyện trong kỷ nguyên số.
            </motion.p>
          </section>

          {/* Text Block 1 */}
          <section className="scroll-section min-h-screen flex items-center justify-center p-margin-page text-center w-full">
            <motion.h2 
              {...fadeIn}
              className="font-headline-lg text-4xl md:text-6xl lg:text-7xl text-primary font-extrabold max-w-5xl leading-tight uppercase tracking-tight drop-shadow-xl"
            >
              Quyền Lực Thuật Toán
            </motion.h2>
          </section>

          {/* Text Block 2 */}
          <section className="scroll-section min-h-screen flex items-center justify-center p-margin-page text-center w-full">
            <motion.p 
              {...fadeIn}
              className="font-body-md text-2xl md:text-4xl lg:text-5xl text-surface-container-lowest max-w-4xl leading-snug drop-shadow-lg"
            >
              Thuật toán thay thế quản đốc phân xưởng. Nó vô hình, lạnh lùng và không thể thương lượng.
            </motion.p>
          </section>

          {/* Text Block 3 */}
          <section className="scroll-section min-h-screen flex items-center justify-center p-margin-page text-center w-full">
            <motion.p 
              {...fadeIn}
              className="font-body-md text-2xl md:text-4xl lg:text-5xl text-surface-variant max-w-4xl leading-snug drop-shadow-lg"
            >
              Người lao động bị cô lập trong các ô vuông màn hình, mất đi sự kết nối giai cấp thiết yếu.
            </motion.p>
          </section>

          {/* Text Block 4 */}
          <section className="scroll-section min-h-screen flex items-center justify-center p-margin-page text-center w-full">
            <motion.p 
              {...fadeIn}
              className="font-body-md text-2xl md:text-4xl lg:text-5xl text-primary-fixed max-w-5xl leading-snug drop-shadow-lg"
            >
              Sự cô lập này biến "tập thể" thành những "nguyên tử" rời rạc, dễ dàng bị thao túng bởi các tập đoàn công nghệ khổng lồ.
            </motion.p>
          </section>
        </div>
      </section>

      {/* --- SECTION 5: TWO CENTURIES, ONE WAR --- */}

      {/* Comparison Title Section */}
      <section className="scroll-section min-h-screen flex flex-col items-center justify-center text-center p-8 relative bg-on-surface">
        <motion.h1 
          {...scaleUp}
          className="font-headline-xl text-[8vw] md:text-[100px] leading-tight text-surface uppercase tracking-tighter mb-8 drop-shadow-2xl"
        >
          HAI THẾ KỶ.<br/>MỘT CUỘC CHIẾN.
        </motion.h1>
        <motion.p 
          {...fadeIn}
          className="font-body-md text-xl md:text-2xl text-tertiary-fixed max-w-3xl mx-auto opacity-80"
        >
          Sự bóc lột thay đổi hình thức. Không thay đổi bản chất.
        </motion.p>
        <div className="absolute bottom-10 animate-bounce">
          <span className="material-symbols-outlined text-4xl text-primary opacity-50">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Comparison Quote Section */}
      <section className="scroll-section min-h-screen flex flex-col items-center justify-center text-center bg-[#1a1101] p-8">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto px-4">
          <div className="text-[120px] font-headline-xl text-primary leading-[0.3] mb-8 opacity-50">&quot;</div>
          <blockquote className="font-headline-lg text-3xl md:text-5xl text-surface uppercase tracking-tight leading-snug">
            Cỗ máy cướp công cụ. <br/>
            <span className="text-primary">Thuật toán</span> cướp tâm trí. <br/>
            <span className="text-on-surface-variant">Kẻ thù là dữ liệu.</span>
          </blockquote>
        </motion.div>
      </section>

      {/* Comparison Split Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative bg-on-surface">
        {/* Divider Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary opacity-20 transform -translate-x-1/2 z-20"></div>
        
        {/* 1824 */}
        <div className="scroll-section min-h-screen bg-on-surface border-b md:border-b-0 border-primary/20 md:pr-12 lg:pr-24 flex flex-col justify-center items-end text-right p-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <h2 className="font-headline-xl text-[100px] md:text-[120px] leading-none text-surface-variant opacity-20 mb-4 tracking-tighter">1824</h2>
            <h3 className="font-label-caps text-lg text-primary uppercase mb-12 tracking-widest">Công Nhân Dệt May</h3>
            <ul className="space-y-12 font-data-mono text-lg text-surface">
              <li>
                <strong className="block text-primary mb-2 opacity-70">PHƯƠNG TIỆN</strong>
                Máy móc vật lý. Của tư bản.
              </li>
              <li>
                <strong className="block text-primary mb-2 opacity-70">KHUNG GIỜ</strong>
                Tiếng còi nhà máy. Kỷ luật thép.
              </li>
              <li>
                <strong className="block text-primary mb-2 opacity-70">SỰ THA HÓA</strong>
                Lặp lại cơ học. Mất kỹ năng.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 2024 */}
        <div className="scroll-section min-h-screen bg-[#1a1101] md:pl-12 lg:pl-24 flex flex-col justify-center items-start text-left p-8">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <h2 className="font-headline-xl text-[100px] md:text-[120px] leading-none text-surface-variant opacity-20 mb-4 tracking-tighter">2024</h2>
            <h3 className="font-label-caps text-lg text-primary uppercase mb-12 tracking-widest">Lao Động IT Tự Do</h3>
            <ul className="space-y-12 font-data-mono text-lg text-surface">
              <li>
                <strong className="block text-primary mb-2 opacity-70">PHƯƠNG TIỆN</strong>
                Đám mây số. Tư bản kiểm soát.
              </li>
              <li>
                <strong className="block text-primary mb-2 opacity-70">KHUNG GIỜ</strong>
                Trực tuyến 24/7. Áp lực vô hình.
              </li>
              <li>
                <strong className="block text-primary mb-2 opacity-70">SỰ THA HÓA</strong>
                Cắt xén số. Cô lập cá nhân.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      {/* --- SECTION 6: CINEMATIC FINALE & GOALS --- */}

      <section className="relative w-full bg-[#0c0a09]">
        {/* Fixed Background / Texture Layers for Finale */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            alt="Server racks"
            className="sticky top-0 w-full h-screen object-cover opacity-20 filter grayscale contrast-150 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO_dnxSC64fo0AXDSlsBOd8sm5rlHEAibNKhsHgDQDIjuJYA3fOnLikAnMizLxk_rx1SmnIAv8MLfMbI-9CuvR-z8pGAPFY0aRQghzH_ss-3pTWsgRSzcfoxyZH1p8qBiRibQ82EAOPK8ch5vL-9uSRrqKrBk_MFJPo0jx24q1KGCQXjxkvq5_BO5bZU55-dp8ZonDY_U6jIuiQOKZlnDADiTbQvc_oShJVQ22l3wyRa6fVwzbD8qEa6Sb1OQJyyTPJvDaC2OMyrKd"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/80 via-transparent to-[#0c0a09]"></div>
          <div className="absolute inset-0 texture-overlay"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Sub-section 1: Detailed Manifesto */}
          <section className="scroll-section min-h-screen flex items-center justify-center px-6 py-24">
            <motion.p 
              {...fadeIn}
              className="font-body-md text-2xl md:text-4xl lg:text-5xl max-w-5xl text-center leading-relaxed text-surface-variant drop-shadow-lg opacity-90"
            >
              Mã nguồn là phương tiện sản xuất mới. Dữ liệu là tài nguyên bị khai thác. Cấu trúc quyền lực đã chuyển dịch từ nhà máy sang máy chủ, nhưng bản chất của sự bóc lột vẫn không thay đổi. Sự đoàn kết kỹ thuật số là vũ khí duy nhất của chúng ta.
            </motion.p>
          </section>

          {/* Sub-section 2: Minimalist Goals */}
          <section className="scroll-section min-h-screen flex flex-col items-center justify-center px-6 py-24">
            <motion.h2 
              {...fadeIn}
              className="font-label-caps text-primary tracking-[0.3em] mb-16 md:mb-32 text-sm md:text-base opacity-70"
            >
              CÔNG ĐOÀN KỸ THUẬT SỐ / MỤC TIÊU
            </motion.h2>
            <div className="flex flex-col gap-12 md:gap-24 text-center font-headline-xl">
              {["ĐÌNH CÔNG THUẬT TOÁN", "BẢO VỆ QUYỀN RIÊNG TƯ", "PHÂN PHỐI LẠI LỢI NHUẬN"].map((goal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="group cursor-default"
                >
                  <h3 className="text-4xl md:text-6xl lg:text-7xl text-surface opacity-80 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 transform group-hover:scale-105">
                    {goal}
                  </h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Sub-section 3: Cinematic Finale & CTA */}
          <section className="scroll-section min-h-screen flex flex-col items-center justify-center px-6 py-24 gap-16 md:gap-32">
            <motion.h1 
              {...scaleUp}
              className="font-headline-xl text-[10vw] md:text-[8vw] leading-[1.1] text-center uppercase text-primary drop-shadow-2xl font-extrabold max-w-7xl mix-blend-screen tracking-tighter"
            >
              Đấu tranh giai cấp<br/>trong kỷ nguyên số.
            </motion.h1>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-on-primary font-headline-lg text-2xl md:text-4xl lg:text-5xl uppercase px-12 py-8 md:px-20 md:py-10 hover:bg-surface-variant hover:text-primary transition-all duration-500 flex items-center gap-8 shadow-[0_0_40px_rgba(108,27,24,0.5)] hover:shadow-[0_0_60px_rgba(251,222,182,0.6)]"
            >
              BẮT ĐẦU NGAY
              <span className="material-symbols-outlined text-4xl md:text-6xl group-hover:translate-x-4 transition-transform duration-500">arrow_forward</span>
            </motion.button>
          </section>
        </div>
      </section>


      {/* Minimal Footer */}
      <footer className="w-full py-[120px] bg-on-surface text-center">
        <p className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest opacity-40">
          COMMON PROPERTY OF THE PROLETARIAT © MCMXVII - MMXXIV
        </p>
      </footer>
    </main>
  );
}

