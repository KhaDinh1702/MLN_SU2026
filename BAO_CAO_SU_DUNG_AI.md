# BÁO CÁO SỬ DỤNG AI TRONG SẢN PHẨM SÁNG TẠO

**Môn học:** Triết học Mác-Lênin  
**Mã môn:** MLN111  
**Giảng viên:** Kiều Thị Thu Chung  
**Lớp:** Half1_SE1806  
**Nhóm:** 5  

### DANH SÁCH THÀNH VIÊN
| Mã sinh viên | Tên sinh viên |
| :--- | :--- |
| SE193002 | Nguyễn Trần Minh Hưng |
| SE193633 | Đinh Hoàng Kha |
| SE184616 | Phạm Đăng Quang |
| SS196565 | Vương Hoàng Bảo Yến |
| SE183645 | Nguyễn Văn Cường |

---

## MỤC LỤC
* [I. Minh bạch](#i-minh-bạch)
* [II. Trách nhiệm](#ii-trách-nhiệm)
* [III. Sáng tạo](#iii-sáng-tạo)
* [IV. Liêm chính học thuật](#iv-liêm-chính-học-thuật)

---

## I. Minh bạch
### Sử dụng AI để hỗ trợ xây dựng dự án "The Digital Assembly Line — Website Tương Tác Triết Học"

#### Công cụ AI sử dụng:
* **Gemini:** Hỗ trợ xây dựng logic React/Next.js, thiết kế các hiệu ứng scroll animations (scrollytelling) và xử lý đồng bộ âm thanh tương tác.
* **ChatGPT / Claude:** Hỗ trợ lên ý tưởng kịch bản slide, cấu trúc nội dung lý luận triết học và tra cứu dữ liệu lịch sử.
* **Midjourney / Stable Diffusion:** Hỗ trợ sinh prompt và tạo tài nguyên hình ảnh minh họa theo phong cách Noir.

#### Mục đích sử dụng:
Nhóm sử dụng AI để hỗ trợ nghiên cứu cấu trúc và tối ưu hóa quy trình kỹ thuật xây dựng website tương tác triết học về chủ đề "Giai cấp và đấu tranh giai cấp hiện đại", bao gồm:
* Hỗ trợ xây dựng kịch bản trải nghiệm gồm 12 slide (cuộn dọc kết hợp cuộn ngang).
* Tra cứu thông tin lịch sử chính xác từ tác phẩm của Friedrich Engels (tuổi thọ trung bình của công nhân ở Manchester năm 1840).
* Hỗ trợ phân tích và hệ thống hóa lý luận triết học về Lực lượng sản xuất, Quan hệ sản xuất và 3 hình thức bóc lột số mới trong thời đại CMCN 4.0.
* Tạo các prompt và hình ảnh minh họa cho các chương (bối cảnh rạp hát, xiềng xích vật lý, thuật toán số).
* Hỗ trợ phát triển cấu trúc component React/Next.js, tối ưu hóa hiệu ứng cuộn trang mượt mà (Lenis Scroll) và xử lý logic tương tác âm thanh bằng custom hooks.
* Gợi ý giải pháp lập trình và thuật toán tính toán tỷ suất bóc lột thực tế cho bài trắc nghiệm tương tác cuối trang.

---

### BIÊN BẢN NHẬT KÝ SỬ DỤNG AI TRONG DỰ ÁN

**Tên dự án:** The Digital Assembly Line — Website Tương Tác Triết Học  
**Môn học:** Triết học Mác – Lênin (MLN111)  
**Mục tiêu:**  
* Xây dựng một website tương tác (dưới dạng cuốn sách trực tuyến) nhằm lồng ghép lý luận nhận thức và chủ nghĩa duy vật lịch sử của Mác – Lênin, cụ thể là nội dung "Giai cấp và đấu tranh giai cấp".
* Khai thác sâu sắc sự chuyển dịch từ "xiềng xích vật lý" (CMCN 1.0) sang "xiềng xích thuật toán" (CMCN 4.0 - Digital Assembly Line), phân tích các hình thức bóc lột vô hình và cách thức đấu tranh số.
* Sử dụng cơ chế tương tác đa phương tiện (âm thanh, hiệu ứng cuộn rèm kịch nghệ, slide cuộn ngang) và bộ công cụ trắc nghiệm cá nhân hóa để mang lại trải nghiệm trực quan sinh động cho người học.

#### 1. Xây dựng cấu trúc kịch bản và nội dung lý luận
| Prompt nhóm đưa cho AI | Kết quả AI sinh ra | Phần nhóm chỉnh sửa/bổ sung |
| :--- | :--- | :--- |
| Thiết kế kịch bản cho website tương tác triết học về chủ đề "Giai cấp và đấu tranh giai cấp hiện đại" (The Digital Assembly Line). Cần chia thành các chương thể hiện sự chuyển dịch từ xiềng xích vật lý (thế kỷ XIX) sang xiềng xích thuật toán (thế kỷ XXI). | AI đề xuất cấu trúc 3 chương cơ bản tương ứng với các cuộc Cách mạng Công nghiệp (1.0, 3.0, 4.0) kèm theo mô tả chung chung về lịch sử và công nghệ. | Nhóm phát triển thành kịch bản chi tiết 12 slide/màn trải nghiệm. Đặt tên ấn tượng và đậm chất điện ảnh cho từng phần (Tuyên ngôn lịch sử, Kỷ luật kỹ thuật số, Chiếc lồng kính kỷ nguyên số, Ảo tưởng tự do và Thực tế hạ tầng). Lồng ghép các câu chốt phản biện sắc bén để kích thích tư duy người xem. |
| Hãy xây dựng cấu trúc so sánh đối lập giữa tư liệu sản xuất qua ba thế kỷ: XIX, XX và XXI để đưa vào slide tương tác. | AI sinh bảng so sánh cơ bản với các từ khóa: nhà máy, tiền tệ, máy tính và phần mềm. | Nhóm biên tập lại và làm sắc bén các khái niệm triết học: Thế kỷ XIX (Nhà máy, Ruộng đất, Máy móc) đối lập với Thế kỷ XXI (Nền tảng số, Thuật toán, Dữ liệu người dùng). Nhấn mạnh câu hỏi triết học: "Bạn có laptop. Họ có nền tảng. Ai mới thực sự làm chủ?". |
| Đề xuất cách phân tích và trình bày 3 hình thức bóc lột mới trong thời đại số (thuật toán, dữ liệu, tự bóc lột) dưới góc nhìn học thuyết giá trị thặng dư của Marx. | AI đưa ra các phân tích lý thuyết dài dòng, đậm chất học thuật về bóc lột thuật toán, bóc lột dữ liệu và tự bóc lột tâm lý. | Nhóm cô đọng lại thành cấu trúc dồn dập, dễ tiếp cận trên slide: (1) Quản đốc vô hình, (2) Giá trị thặng dư số, (3) Tự bóc lột. Bổ sung ví dụ thực tế cực kỳ sát sườn về tài xế Grab/Be bị chiết khấu 30% trên chuyến xe 100.000đ để chứng minh trực quan sự tước đoạt thặng dư số của Big Tech. |

#### 2. Thiết kế nội dung chi tiết các slide và dẫn chứng lịch sử
| Prompt nhóm đưa cho AI | Kết quả AI sinh ra | Phần nhóm chỉnh sửa/bổ sung |
| :--- | :--- | :--- |
| Cần số liệu chấn động về tình cảnh giai cấp công nhân Anh thế kỷ XIX để đưa vào phần "Những con số biết nói" (CMCN 1.0) nhằm đối lập với thời đại số. Hãy cung cấp số liệu đáng tin cậy. | AI đưa ra thông tin chung về giờ làm việc kéo dài (14-16 giờ) và điều kiện sống tồi tệ ở các thành phố lớn tại Anh. | Nhóm tìm kiếm và chọn lọc chỉ số đắt giá: tuổi thọ trung bình của công nhân tại Manchester năm 1840 chỉ vỏn vẹn 17 tuổi. Bổ sung giải thích nguyên nhân do tỷ lệ tử vong trẻ em >50%, lao động trẻ em và dịch bệnh ở khu ổ chuột. Trích dẫn trực tiếp Engels trong tác phẩm "Tình cảnh giai cấp công nhân Anh" (1845) để tạo tính chính danh học thuật. |
| Thiết kế nội dung cho Slide 9 về giải pháp đấu tranh giai cấp trong thời đại số. Cần các giải pháp mang tính thực tiễn và cập nhật. | AI đề xuất các giải pháp chung chung: tăng cường luật pháp, cải thiện điều kiện làm việc, nâng cao kỹ năng công nghệ. | Nhóm cụ thể hóa thành 4 trụ cột đấu tranh số rõ ràng: (1) Đàm phán số (đình công tắt app), (2) Minh bạch thuật toán (vận động hành lang pháp lý), (3) Bảo vệ dữ liệu (đòi quyền sở hữu thông tin), (4) Hiệp hội lao động số (thành lập nghiệp đoàn cho freelancer). |
| Viết nội dung phản hồi triết học cho 3 Persona (Sinh viên làm thêm, Dân công sở, Người dùng MXH) sau khi họ thực hiện xong bài trắc nghiệm đo tỷ suất bóc lột. | AI viết phản hồi chung cho cả 3 đối tượng, khuyên họ nên cân bằng cuộc sống và học thêm kỹ năng mới. | Nhóm viết lại hoàn toàn theo hướng phân tích sâu sắc lý luận thặng dư: đối với Người dùng MXH, nhấn mạnh tỷ suất bóc lột đạt 100% vì tiền công bằng 0, thời gian lướt web bị Big Tech tư bản hóa toàn bộ thông qua dữ liệu hành vi. |

#### 3. Tạo ảnh minh họa và video bối cảnh
| Prompt nhóm đưa cho AI | Kết quả AI sinh ra | Phần nhóm chỉnh sửa/bổ sung |
| :--- | :--- | :--- |
| Viết prompt tạo ảnh Midjourney: Một rạp hát cổ điển với rèm nhung đỏ tách sang hai bên, phong cách điện ảnh noir, u tối, huyền bí. | AI sinh ra prompt tiếng Anh: `A grand theater stage with rich red velvet curtains opening to the sides, dark cinematic noir style, dramatic side lighting, photorealistic, 8k resolution --ar 16:9`. | Nhóm chạy prompt trên Midjourney để sinh ảnh rèm cửa (`theater_curtain.png`). Tiến hành hậu kỳ, chỉnh độ tương phản và tối ưu dung lượng file để hiển thị mượt mà trên web mà không bị trễ tải. |
| Tạo prompt sinh ảnh thể hiện sự bóc lột của máy móc cơ khí thời đại CMCN 1.0, phong cách đen trắng tương phản mạnh, xích sắt và bánh răng khổng lồ. | AI đề xuất prompt: `Industrial revolution machinery, massive gears and iron chains, high contrast black and white photography, gritty texture, dramatic lighting --ar 16:9`. | Nhóm lựa chọn hình ảnh bánh răng chuyển động liên tục dạng gif (`machinechain.gif`) để tạo cảm giác nặng nề, cơ học cho chương xiềng xích vật lý khi người dùng cuộn chuột. |
| Tìm kiếm prompt sinh ảnh hoặc video thể hiện chiếc lồng kính kỹ thuật số của thời đại số, lập trình viên/freelancer bị giam trong ô vuông màn hình. | AI gợi ý mô tả về một căn phòng tối có màn hình máy tính phát sáng xanh lục chiếu lên khuôn mặt mệt mỏi của người lao động. | Nhóm tìm kiếm và nhúng video background (`Working.mp4` và `eyes.mp4`) để làm hình nền chuyển động chậm phía sau văn bản, tăng tính biểu tượng cho "xiềng xích thuật toán". |

#### 4. Hỗ trợ lập trình và kiến trúc kỹ thuật
| Prompt nhóm đưa cho AI | Kết quả AI sinh ra | Phần nhóm chỉnh sửa/bổ sung |
| :--- | :--- | :--- |
| Thiết kế component React bằng Framer Motion để tạo hiệu ứng cuộn rèm sân khấu (Split Screen Curtain Reveal) trượt sang hai bên dựa theo phần trăm cuộn trang. | AI đề xuất đoạn code sử dụng hook `useScroll` và trực tiếp gán giá trị `transform: translateX` cho hai `div` đại diện cho cánh rèm. | Nhóm tích hợp code vào [HeroSection.tsx](file:///c:/Users/user/Desktop/mln/src/components/HeroSection.tsx), tối ưu hóa bằng cách liên kết `useScroll`, `useTransform` của `framer-motion` cho hai nửa rèm (`curtainLeftX` và `curtainRightX`), thiết lập ref `sectionRef` chuẩn xác để rèm mở hết ngay khi kết thúc phần giới thiệu. |
| Làm sao để phát âm thanh xích sắt cơ khí khi người dùng cuộn trang và tự động nhỏ dần rồi dừng lại khi họ ngừng cuộn chuột? | AI gợi ý dùng sự kiện `window.addEventListener('scroll')` và hàm `setTimeout` để giảm âm lượng dần dần. | Nhóm phát triển giải pháp tối ưu trong React: sử dụng `useMotionValueEvent` lắng nghe sự thay đổi của `scrollYProgress`, khởi tạo đối tượng `Audio` (`Gear.mp3`) trong `useEffect` để tránh rò rỉ bộ nhớ. Sử dụng `useRef` để giữ trạng thái `scrollTimeoutRef` và tạo vòng lặp `setInterval` hạ âm lượng (`volume`) mượt mà trước khi dừng hẳn khi ngưng scroll để âm thanh không bị ngắt đột ngột gây khó chịu. |
| Thiết kế component trắc nghiệm tương tác hỗ trợ chuyển trang mượt mà, lưu trữ câu trả lời của người dùng và hiển thị biểu đồ phân bổ giá trị thặng dư số. | AI đề xuất cấu trúc JSON chứa câu hỏi và các state quản lý câu trả lời cơ bản. | Nhóm tự lập trình hệ thống component trắc nghiệm hoàn chỉnh, sử dụng Tailwind CSS v4 để vẽ biểu đồ thanh tương tác (màu đỏ đô cho thặng dư bị chiếm đoạt và màu vàng đất cho phần công lao động nhận về). Tối ưu hóa UI/UX để đảm bảo hiển thị hoàn hảo trên cả thiết bị di động. |

---

## II. Trách nhiệm
Toàn bộ nội dung lý luận, số liệu lịch sử và các nhận định triết học do AI hỗ trợ gợi ý đều được nhóm kiểm tra, đối chiếu kỹ lưỡng với giáo trình chính thống của Bộ Giáo dục & Đào tạo để đảm bảo tính chuẩn xác trước khi xuất bản lên website.

| Nội dung AI hỗ trợ | Cách kiểm chứng & chỉnh sửa của nhóm | Nguồn đối chiếu / Cơ sở lý luận |
| :--- | :--- | :--- |
| Cấu trúc so sánh tư liệu sản xuất qua 3 thế kỷ | Nhóm rà soát các thành phần cốt lõi của Lực lượng sản xuất (công cụ lao động) và Quan hệ sản xuất (quyền sở hữu tư liệu sản xuất) để đảm bảo không bị sai lệch thuật ngữ. | Giáo trình Triết học Mác – Lênin (Bộ GD&ĐT): Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất. |
| Khái niệm và các hình thức bóc lột thặng dư số | Kiểm chứng công thức tính giá trị thặng dư ($m$) và tỷ suất bóc lột ($m'$) của Marx để áp dụng chính xác cho trường hợp tài xế công nghệ (tỷ lệ khấu trừ chiết khấu) và người dùng mạng xã hội (tương tác miễn phí sinh doanh thu quảng cáo). | Giáo trình Kinh tế chính trị Mác – Lênin: Học thuyết giá trị thặng dư và bản chất của tích lũy tư bản. |
| Khái niệm đấu tranh giai cấp trên không gian mạng | Đối chiếu các hình thức đấu tranh giai cấp kinh điển (kinh tế, chính trị, tư tưởng) để định hình các phương thức phản kháng số phù hợp với thực tiễn hiện đại (đình công tắt app, đòi minh bạch thuật toán). | Giáo trình Triết học Mác – Lênin: Đấu tranh giai cấp và vai trò của đấu tranh giai cấp đối với sự phát triển xã hội. |
| Dẫn chứng lịch sử về tuổi thọ công nhân Manchester năm 1840 | Kiểm tra chéo thông tin tuổi thọ trung bình 17 tuổi trong các tài liệu nghiên cứu lịch sử và sách gốc của Engels để đảm bảo tính xác thực của dữ liệu trước khi đưa lên web. | Tác phẩm "Tình cảnh giai cấp công nhân Anh" (1845) — Friedrich Engels. |
| Mã nguồn React và hiệu ứng chuyển động | Nhóm trực tiếp biên dịch, kiểm tra lỗi runtime và tối ưu hóa hiệu năng render. Đảm bảo mã nguồn tuân thủ các quy tắc bảo mật và đạt chuẩn Responsive Web Design. | Tài liệu chính thức React (react.dev) và tài liệu Framer Motion. |

*\*Nhóm chỉ sử dụng AI như một công cụ hỗ trợ tăng tốc kỹ thuật và gợi ý ý tưởng. Toàn bộ thông điệp triết học, nội dung kịch bản thuyết trình và chất lượng mã nguồn cuối cùng đều do tập thể nhóm nghiên cứu, thảo luận và chịu trách nhiệm.*

---

## III. Sáng tạo
Trong quá trình thực hiện dự án "The Digital Assembly Line", nhóm đã vận dụng sáng tạo công nghệ AI để đẩy nhanh tiến độ làm việc, nhưng sự sáng tạo cốt lõi của sản phẩm hoàn toàn thuộc về tư duy độc lập của nhóm:
* **Ý tưởng thiết kế độc bản:** Ý tưởng xây dựng website dưới dạng một "Cuốn sách tương tác" với tông màu chủ đạo Noir (Đen - Trắng - Đỏ Burgundy) kết hợp hiệu ứng âm thanh tiếng xích kêu giật cục khi cuộn trang là do nhóm tự nghĩ ra để tạo ra tác động thị giác mạnh mẽ (Wow effect), thức tỉnh ý thức giai cấp của người xem.
* **Cơ chế âm thanh phản hồi theo scroll:** Việc lập trình đồng bộ hóa tốc độ quay của bánh răng và âm lượng tiếng xích kêu theo tốc độ cuộn chuột thực tế của người dùng là sáng tạo độc đáo của nhóm để nâng cao trải nghiệm điện ảnh (Cinematic experience).
* **Đưa lý luận sát thực tế đời sống:** Nhóm đã tự liên hệ và chuyển hóa các lý thuyết triết học khô khan thành các câu chuyện thời sự gần gũi với giới trẻ ngày nay (Shipper tự sắm xe chạy Grab, Freelancer tự sắm Laptop, người dùng Facebook hiến dâng dữ liệu cá nhân làm giàu cho Big Tech).
* **Thuật toán trắc nghiệm thực tế:** Xây dựng logic tính toán tỷ suất bóc lột cá nhân hóa dựa trên thói quen làm việc và sử dụng mạng xã hội của người dùng, giúp lý luận Mác-Lênin trở nên sống động và thuyết phục hơn bao giờ hết.
* **Tự lập trình 100%:** Toàn bộ kiến trúc mã nguồn Next.js, cấu trúc Tailwind CSS v4, và các hiệu ứng scroll phức tạp đều do nhóm trực tiếp hiện thực hóa và debug thực tế, không sao chép nguyên bản từ bất kỳ nguồn AI nào.

---

## IV. Liêm chính học thuật
Nhóm cam kết tuân thủ các nguyên tắc về liêm chính học thuật của Trường Đại học FPT. Sản phẩm không sao chép nguyên bản từ các tác phẩm có sẵn và không sử dụng AI để thay thế hoàn toàn tư duy học thuật hay quá trình nghiên cứu của nhóm.

Cụ thể, nhóm cam kết:
1. Toàn bộ nội dung triết học trong sản phẩm — bao gồm sự biến đổi của tư liệu sản xuất, 3 hình thức bóc lột số, và các giải pháp đấu tranh số — đều được xây dựng dựa trên nghiên cứu và vận dụng kiến thức môn Triết học Mác – Lênin vào tình huống thực tế đời sống.
2. Không lạm dụng AI để tạo ra các nhận định học thuật vô căn cứ. Mọi dẫn chứng lịch sử và lý luận triết học đều được đối chiếu chéo với giáo trình chính thống và tác phẩm gốc của Marx - Engels.
3. Những tài nguyên được AI hỗ trợ tạo ra (prompt hình ảnh, gợi ý khung logic code) đều được nhóm kiểm tra, chỉnh sửa kỹ lượng để tích hợp hài hòa vào sản phẩm.
4. Nhóm công khai và minh bạch toàn bộ quá trình sử dụng AI trong tài liệu này, bao gồm prompt cụ thể, kết quả AI sinh ra và phần nhóm tự chỉnh sửa, bổ sung.
5. Sản phẩm "The Digital Assembly Line" là kết quả sáng tạo tập thể của nhóm, không vi phạm bản quyền của bất kỳ tác phẩm nào đã tồn tại.

**Nhóm hoàn toàn chịu trách nhiệm về tính trung thực, nội dung học thuật và chất lượng kỹ thuật cuối cùng của sản phẩm.**

---
**====================== END ======================**
