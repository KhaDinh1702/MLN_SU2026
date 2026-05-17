"use client";

import { motion } from "framer-motion";

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

export default function FinaleSection() {
  return (
    <>
      {/* Scene: Đấu tranh giai cấp kỷ nguyên số */}
      <section className="scroll-section text-heavy w-screen min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-[#1a1101]">
        <motion.div {...fadeIn} className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <p className="font-data-mono text-data-mono text-surface/40 uppercase tracking-[0.3em]">
            Digital Class Struggle
          </p>
          <h2 className="font-headline-xl text-5xl md:text-7xl uppercase text-surface tracking-tighter leading-[1.1]">
            Đấu tranh
            <br />
            <span className="text-primary">kỷ nguyên số</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left">
            {[
              {
                icon: "power_settings_new",
                label: "Đình công trực tuyến",
                desc: "Tài xế tắt app, creator ngừng đăng tải — đình công số không cần đường phố.",
              },
              {
                icon: "visibility",
                label: "Đài minh bạch thuật toán",
                desc: "Buộc nền tảng công khai cách phân phối lượt xem và chia doanh thu.",
              },
              {
                icon: "shield",
                label: "Chủ quyền dữ liệu",
                desc: "Giành lại quyền kiểm soát dữ liệu cá nhân và giá trị thặng dư từ dữ liệu.",
              },
              {
                icon: "groups",
                label: "Công đoàn số",
                desc: "Tổ chức đại diện cho freelancer và creator để đàm phán quyền lợi tập thể.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex gap-5 p-6 border border-surface/10 bg-surface/5 backdrop-blur-sm"
              >
                <span
                  className="material-symbols-outlined text-primary text-3xl shrink-0 mt-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-label-caps text-surface uppercase tracking-wider text-sm font-bold">
                    {item.label}
                  </h3>
                  <p className="font-body-md text-surface-variant text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.blockquote {...fadeIn} className="border-l-4 border-primary pl-8 text-left max-w-3xl mt-8">
            <p className="font-body-md text-2xl md:text-3xl text-surface-variant italic leading-snug">
              &quot;Giai cấp không biến mất. Bóc lột không biến mất. Chỉ có hình thức của chúng là thay đổi.&quot;
            </p>
          </motion.blockquote>
        </motion.div>
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
          <section className="scroll-section text-heavy min-h-screen flex items-center justify-center px-6 py-24">
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
              Đấu tranh giai cấp
              <br />
              trong kỷ nguyên số.
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-on-primary font-headline-lg text-2xl md:text-4xl lg:text-5xl uppercase px-12 py-8 md:px-20 md:py-10 hover:bg-surface-variant hover:text-primary transition-all duration-500 flex items-center gap-8 shadow-[0_0_40px_rgba(108,27,24,0.5)] hover:shadow-[0_0_60px_rgba(251,222,182,0.6)]"
            >
              BẮT ĐẦU NGAY
              <span className="material-symbols-outlined text-4xl md:text-6xl group-hover:translate-x-4 transition-transform duration-500">
                arrow_forward
              </span>
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
    </>
  );
}
