import React from 'react';

export default function IntroPage() {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b-border-thick border-on-surface px-margin-page py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tighter uppercase">
          COLLECTIVE STRUGGLE
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-gutter font-label-caps text-label-caps">
          <a className="text-on-surface hover:text-primary transition-colors" href="#">Archives</a>
          <a className="text-on-surface hover:text-primary transition-colors" href="#">Theory</a>
          <a className="text-on-surface hover:text-primary transition-colors" href="#">Contact Collective</a>
          <a className="text-on-surface hover:text-primary transition-colors" href="#">Distribution Center</a>
        </div>
      </nav>

      <main className="w-full min-h-screen flex flex-col px-margin-page pb-margin-page md:px-16 lg:px-32 py-gutter">
        {/* Hero / Manifesto Banner Component */}
        <header className="w-full bg-primary border-border-thick border-on-surface mb-gutter p-gutter md:p-margin-page">
          <h1 className="font-headline-xl text-headline-xl text-surface uppercase text-center tracking-tighter">
            CUỘN SÁCH ĐẤU TRANH GIAI CẤP
          </h1>
        </header>

        {/* Intro Area: Asymmetric Layout */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mb-margin-page">
          {/* Left Column: Text & Quote */}
          <div className="col-span-1 md:col-span-7 flex flex-col gap-margin-page">
            <article className="bg-surface-container-high border-border-thick border-on-surface p-gutter md:p-margin-page">
              <p className="font-body-md text-body-md text-on-surface mb-gutter">
                Lịch sử của tất cả các xã hội cho đến nay là lịch sử của các cuộc đấu tranh giai cấp. Người tự do và nô lệ, quý tộc và bình dân, chúa đất và nông nô, thợ cả và thợ bạn, nói tóm lại, những kẻ áp bức và những người bị áp bức luôn luôn đối kháng với nhau, tiến hành một cuộc đấu tranh không ngừng, lúc công khai, lúc ngấm ngầm, một cuộc đấu tranh bao giờ cũng kết thúc bằng một sự cải tạo cách mạng toàn bộ xã hội, hoặc bằng sự diệt vong của cả hai giai cấp đấu tranh.
              </p>
              <p className="font-body-md text-body-md text-on-surface">
                Xã hội tư sản hiện đại, sinh ra từ sự sụp đổ của xã hội phong kiến, đã không xóa bỏ được những đối kháng giai cấp. Nó chỉ thay thế những giai cấp cũ, những điều kiện áp bức cũ, những hình thức đấu tranh cũ bằng những giai cấp mới, những điều kiện áp bức mới, những hình thức đấu tranh mới mà thôi.
              </p>
            </article>

            <blockquote className="bg-on-surface text-surface border-border-thick border-primary p-margin-page relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <span className="material-symbols-outlined text-4xl text-primary mb-unit block">format_quote</span>
              <p className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold mb-gutter">
                Giai cấp vô sản không có gì để mất ngoài những xiềng xích của họ. Họ có một thế giới để giành lấy.
              </p>
              <footer className="font-data-mono text-data-mono text-surface-variant flex items-center gap-unit uppercase">
                <span className="w-8 h-border-thin bg-surface-variant block"></span>
                Karl Marx, 1848
              </footer>
            </blockquote>

            <div className="mt-auto">
              <button className="w-full md:w-auto bg-primary text-on-primary font-label-caps text-label-caps px-margin-page py-gutter border-border-thick border-on-surface hover:bg-on-surface hover:text-surface transition-colors uppercase tracking-widest flex items-center justify-center gap-unit">
                <span>Đọc Tuyên Ngôn</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Column: Industrial Imagery */}
          <aside className="col-span-1 md:col-span-5 h-full min-h-[400px] border-border-thick border-on-surface bg-surface-dim relative overflow-hidden flex flex-col">
            <div className="border-b-border-thin border-on-surface bg-tertiary-container px-unit py-1 flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-on-tertiary uppercase">Lưu trữ: Hình ảnh Công nghiệp</span>
              <span className="font-data-mono text-data-mono text-on-tertiary">MCMXVII</span>
            </div>
            <div className="relative w-full h-full flex-grow min-h-[300px]">
              <img 
                alt="Industrial machinery" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 sepia-[.3]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATvYg188qgX0SdTr3lClDlhgvQljjib0vp4BjptleOnf9DV2hDdDzV6qd3y8LyB777-MG3XhYiNTxWsuBDw6d0KCU6hRqRA0WgOuALHh5S6jD14J4KeokjfYu7wFSANX29VCGvbCnlsyqEmKWbtdZDovjdqj7Eu58nwn5Wm8dN4pKzN-P1d_-HFPQNh9VIScbB9mhfWdYL1vvFOVF5cHNTg3Rzrxjuo7E_f3LNdPcyDj6yXC577153GVVVyyVZzYzSNiaI2SIdCGiM"
              />
              <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20 pointer-events-none"></div>
              <div className="absolute inset-0 border-[16px] border-on-surface pointer-events-none opacity-10"></div>
            </div>
            <div className="border-t-border-thick border-on-surface bg-surface-container p-unit">
              <p className="font-data-mono text-data-mono text-on-surface text-center">FIG 1. Cơ sở hạ tầng sản xuất</p>
            </div>
          </aside>
        </section>

        {/* Section 1: Physical Chains */}
        <section className="mb-margin-page bg-surface-container-high border-border-thick border-on-surface p-gutter md:p-margin-page">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-gutter">I. Xiềng xích vật lý</h2>
          <p className="font-body-md text-body-md text-on-surface mb-gutter">
            Trong kỷ nguyên công nghiệp đầu tiên, xiềng xích được rèn bằng sắt thép. Cơ thể người lao động bị trói buộc vào nhịp độ của bánh răng và băng chuyền. Sự bóc lột hiển hiện rõ ràng qua những giờ làm việc kiệt sức trong các công xưởng tối tăm, ngột ngạt. Quyền lực của tư bản dựa trên việc sở hữu tư liệu sản xuất vật chất.
          </p>
        </section>

        {/* Section 2: Electronic Control */}
        <section className="mb-margin-page bg-on-surface text-surface border-border-thick border-primary p-gutter md:p-margin-page relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-gutter">II. Kiểm soát điện tử</h2>
          <p className="font-body-md text-body-md text-surface mb-gutter">
            Ngày nay, xiềng xích không còn kêu loảng xoảng. Chúng im lặng, truyền dẫn qua các luồng dữ liệu vô hình. Sự giám sát được tự động hóa thông qua thuật toán, đo lường mọi tương tác, mọi cú nhấp chuột, mọi khoảnh khắc chú ý. Công cụ bóc lột không còn là máy dệt cồng kềnh, mà là thiết bị di động nằm gọn trong túi mỗi người.
          </p>
        </section>

        {/* Section 3: The Glass Cage */}
        <section className="mb-margin-page bg-surface-container-high border-border-thick border-on-surface p-gutter md:p-margin-page">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-gutter">III. Lồng kính</h2>
          <p className="font-body-md text-body-md text-on-surface mb-gutter">
            Chúng ta tự nguyện bước vào một chiếc lồng kính trong suốt. Tại đây, sự tự do biểu đạt bị biến thành hàng hóa, sự kết nối xã hội bị khai thác thành dữ liệu hành vi. Ảo tưởng về sự tự chủ che giấu một thực tế rằng mỗi hành động của chúng ta đang nuôi dưỡng một siêu cỗ máy tư bản giám sát, không ngừng tái tạo lại các hệ thống phân cấp quyền lực mới.
          </p>
        </section>

        {/* Section 4: Comparison */}
        <section className="mb-margin-page grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface-container border-border-thick border-on-surface p-gutter">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase mb-unit">Mô hình công nghiệp cũ</h3>
            <ul className="font-body-md text-body-md text-on-surface list-disc pl-5">
              <li>Khai thác sức lao động cơ bắp</li>
              <li>Sở hữu nhà máy và nguyên liệu</li>
              <li>Sự chống cự diễn ra trên đường phố, xưởng thợ</li>
            </ul>
          </div>
          <div className="bg-surface-container border-border-thick border-on-surface p-gutter">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase mb-unit">Mô hình tư bản số</h3>
            <ul className="font-body-md text-body-md text-on-surface list-disc pl-5">
              <li>Khai thác sự chú ý và dữ liệu cá nhân</li>
              <li>Sở hữu nền tảng và thuật toán</li>
              <li>Sự chống cự cần một nhận thức không gian số mới</li>
            </ul>
          </div>
        </section>

        {/* Final Manifesto */}
        <section className="mb-margin-page bg-primary border-border-thick border-on-surface p-gutter md:p-margin-page text-center">
          <h2 className="font-headline-xl text-headline-xl text-surface uppercase mb-gutter tracking-tighter">Đập vỡ lồng kính</h2>
          <p className="font-headline-lg-mobile text-headline-lg-mobile text-surface">
            Giai cấp vô sản số không có gì để mất ngoài dữ liệu bị tước đoạt của họ. Họ có một mạng lưới tự do để giành lại.
          </p>
        </section>
      </main>

      <footer className="w-full border-t-border-thick border-on-surface bg-on-surface flex flex-col gap-gutter md:flex-row justify-between items-center px-margin-page py-gutter mt-margin-page">
        <div className="w-full font-label-caps text-label-caps text-surface text-center uppercase tracking-widest">
          Common Property of the Proletariat © MCMXVII - MMXXIV
        </div>
      </footer>
    </div>
  );
}
