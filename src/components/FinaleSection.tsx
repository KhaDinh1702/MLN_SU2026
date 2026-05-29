/* eslint-disable @next/next/no-img-element */
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

interface FinaleSectionProps {
  onStartGame: () => void;
}

export default function FinaleSection({ onStartGame }: FinaleSectionProps) {
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
                label: "Đàm phán & Thương lượng số",
                desc: "Các hình thức phản kháng ôn hòa như ngừng kết nối, dừng đăng tải nội dung để yêu cầu chính sách chiết khấu hợp lý.",
              },
              {
                label: "Minh bạch thuật toán",
                desc: "Thúc đẩy các quy định pháp lý buộc nền tảng công khai cơ chế đề xuất hiển thị và phân chia doanh thu.",
              },
              {
                label: "Bảo vệ dữ liệu & Giá trị số",
                desc: "Khẳng định quyền kiểm soát thông tin cá nhân và đảm bảo giá trị thặng dư từ dữ liệu được phân chia công bằng.",
              },
              {
                label: "Hiệp hội lao động số",
                desc: "Hình thành các mạng lưới, nghiệp đoàn và cộng đồng để hỗ trợ pháp lý và bảo vệ quyền lợi của freelancer.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex gap-5 p-6 border border-surface/10 bg-surface/5 backdrop-blur-sm group hover:border-primary/30 transition-all duration-300"
              >
                <div className="font-data-mono text-xl font-bold text-primary shrink-0 mt-0.5 select-none">
                  {`0${i + 1}`}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-label-caps text-surface uppercase tracking-wider text-sm font-bold group-hover:text-primary transition-colors duration-300">
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
              &quot;Công nghệ không làm mất đi các quy luật xã hội, mà tái định hình chúng. Nhận thức đúng đắn là bước đầu tiên để kiến tạo sự công bằng.&quot;
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
          {/* Sub-section 1: Ý nghĩa và Bài học thực tiễn */}
          <section className="scroll-section w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="flex flex-col items-center gap-4 mb-16 text-center">
              <p className="font-data-mono text-xs uppercase tracking-[0.3em] text-primary">
                Lesson & Practice
              </p>
              <h2 className="font-headline-xl text-4xl md:text-6xl uppercase text-surface tracking-tighter">
                Ý nghĩa & Bài học thực tiễn
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {[
                {
                  title: "Quan hệ giai cấp chưa mất đi",
                  desc: "Dù xã hội hiện đại hơn, bất bình đẳng vẫn tồn tại và sự bóc lột chỉ thay đổi hình thức, biểu hiện tinh vi hơn thông qua dữ liệu và thuật toán.",
                },
                {
                  title: "Hiểu đúng về 'tự do công nghệ'",
                  desc: "Người lao động số tuy sở hữu một phần công cụ lao động và có nhiều cơ hội hơn, nhưng thực chất vẫn phụ thuộc sâu sắc vào nền tảng trực tuyến.",
                },
                {
                  title: "Vai trò quản lý của Nhà nước",
                  desc: "Cần thiết phải hoàn thiện luật lao động số, quản lý chặt chẽ các nền tảng xuyên quốc gia và bảo vệ dữ liệu cá nhân của người lao động.",
                },
                {
                  title: "Nâng cao năng lực người lao động",
                  desc: "Để giảm phụ thuộc, lao động số cần liên tục nâng cao kỹ năng, làm chủ công nghệ, xây dựng thương hiệu riêng và đa dạng hóa nguồn thu nhập.",
                },
              ].map((lesson, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="flex gap-6 p-8 border border-surface/10 bg-surface/5 backdrop-blur-md rounded-sm hover:border-primary/40 transition-all duration-500 group"
                >
                  <div className="font-data-mono text-2xl font-black text-primary shrink-0 mt-0.5 transition-all duration-500 group-hover:translate-x-1 select-none">
                    {`0${idx + 1}`}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-headline-lg text-xl uppercase tracking-wider text-surface group-hover:text-primary transition-colors duration-500">
                      {lesson.title}
                    </h3>
                    <p className="font-body-md text-surface-variant text-base leading-relaxed">
                      {lesson.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Sub-section 2: Kết luận */}
          <section className="scroll-section w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-[#0c0a09] to-[#050505]">
            <motion.div
              {...fadeIn}
              className="max-w-4xl mx-auto flex flex-col items-center gap-12 text-center"
            >
              <p className="font-data-mono text-xs uppercase tracking-[0.4em] text-primary">
                Conclusion • Kết luận
              </p>
              <div className="text-[120px] font-headline-xl text-primary leading-[0.1] opacity-40 select-none">
                &ldquo;
              </div>
              <p className="font-body-md text-xl md:text-3xl text-surface-variant leading-relaxed tracking-wide italic">
                Dưới góc nhìn của chủ nghĩa duy vật lịch sử, quan hệ giai cấp và bóc lột trong xã hội hiện đại vẫn tồn tại nhưng biểu hiện tinh vi hơn. Người lao động hiện đại tuy có vẻ tự do hơn nhưng chưa thực sự làm chủ tư liệu sản xuất vì vẫn phụ thuộc vào nền tảng số, thuật toán và dữ liệu do các tập đoàn công nghệ kiểm soát.
              </p>
              <div className="w-16 h-px bg-primary/40 my-4" />
              <p className="font-body-md text-xl md:text-3xl text-primary-fixed leading-relaxed tracking-wide font-medium">
                Vì vậy, đấu tranh giai cấp hiện đại không chỉ là đấu tranh kinh tế truyền thống mà còn là cuộc đấu tranh về dữ liệu, thuật toán, quyền lợi lao động số và sự công bằng trong nền kinh tế công nghệ.
              </p>
              <div className="text-[120px] font-headline-xl text-primary leading-[0.1] opacity-40 select-none">
                &rdquo;
              </div>
            </motion.div>
          </section>

          {/* Sub-section 3: Cinematic Finale & CTA */}
          <section className="scroll-section min-h-screen flex flex-col items-center justify-center px-6 py-24 gap-16 md:gap-32">
            <motion.h1
              {...scaleUp}
              className="font-headline-xl text-[10vw] md:text-[8vw] leading-[1.1] text-center uppercase text-primary drop-shadow-2xl font-extrabold max-w-7xl mix-blend-screen tracking-tighter"
            >
              Làm chủ tương lai
              <br />
              trong kỷ nguyên số.
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartGame}
              className="group bg-primary text-on-primary font-headline-lg text-2xl md:text-4xl lg:text-5xl uppercase px-12 py-8 md:px-20 md:py-10 hover:bg-surface-variant hover:text-primary transition-all duration-500 flex items-center gap-8 shadow-[0_0_40px_rgba(108,27,24,0.5)] hover:shadow-[0_0_60px_rgba(251,222,182,0.6)] cursor-pointer"
            >
              BẮT ĐẦU NGAY
              <svg 
                className="w-8 h-8 md:w-12 md:h-12 text-current group-hover:translate-x-4 transition-transform duration-500 shrink-0" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </section>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="w-full py-[120px] bg-on-surface text-center">
        <p className="font-label-caps text-label-caps text-surface-variant uppercase tracking-widest opacity-40">
          ĐỀ TÀI PHÂN TÍCH TRIẾT HỌC MÁC - LÊNIN • KINH TẾ NỀN TẢNG SỐ
        </p>
      </footer>
    </>
  );
}
