import os
import shutil
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

# 1. Backup file gốc để đảm bảo an toàn tuyệt đối
pptx_filename = 'The_Digital_Assembly_Line.pptx'
backup_filename = 'The_Digital_Assembly_Line_backup.pptx'
if os.path.exists(pptx_filename):
    shutil.copy2(pptx_filename, backup_filename)
    print(f"[Backup] Da tao ban sao luu an toan tai: {backup_filename}")
else:
    raise FileNotFoundError(f"Khong tim thay file goc {pptx_filename} de cap nhat!")

# 2. Khởi tạo Presentation
prs = Presentation(pptx_filename)
blank_layout = prs.slide_layouts[6] # Layout 6 là Blank Layout

# Định nghĩa bảng màu thiết kế cao cấp (Premium Color Palette)
BG_COLOR = RGBColor(247, 245, 240)       # Màu kem nhạt (#F7F5F0)
BURGUNDY = RGBColor(128, 0, 32)          # Màu đỏ đô cổ điển (#800020)
TEXT_BLACK = RGBColor(17, 17, 17)        # Màu đen chữ (#111111)
TEXT_GRAY = RGBColor(74, 74, 74)         # Màu xám phụ đề (#4A4A4A)
BOX_BG = RGBColor(239, 236, 230)         # Màu kem đậm hơn cho hộp thông điệp (#EFECE6)

# Đường dẫn đến các file ảnh do AI tạo ra (thư mục artifact)
artifact_dir = r"C:\Users\user\.gemini\antigravity-ide\brain\6def1feb-290a-409f-925c-4a3933974a6d"
images = {
    11: os.path.join(artifact_dir, "digital_sovereignty_1780023910742.png"),
    12: os.path.join(artifact_dir, "two_national_trends_1780023934642.png"),
    13: os.path.join(artifact_dir, "digital_proletariat_1780023954301.png"),
    14: os.path.join(artifact_dir, "notebooklm_prompts_1780023971341.png")
}

def set_slide_background(slide):
    """Đặt màu nền kem nhạt cho Slide"""
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = BG_COLOR

def add_header(slide, title_text, subtitle_text):
    """Tạo Header gồm Tiêu đề chính (Georgia Bold) và Phụ đề (Georgia Italic)"""
    tx_box = slide.shapes.add_textbox(Inches(1.0), Inches(0.5), Inches(15.78), Inches(1.5))
    tf = tx_box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    
    # Tiêu đề chính
    p = tf.paragraphs[0]
    p.text = title_text
    p.font.name = 'Georgia'
    p.font.size = Pt(36)
    p.font.bold = True
    p.font.color.rgb = BURGUNDY
    p.space_after = Pt(6)
    
    # Tiêu đề phụ
    p2 = tf.add_paragraph()
    p2.text = subtitle_text
    p2.font.name = 'Georgia'
    p2.font.size = Pt(16)
    p2.font.italic = True
    p2.font.color.rgb = TEXT_GRAY

def add_core_message(slide, message_text, top_inch):
    """Vẽ Hộp thông điệp cốt lõi (Core Message Box) có viền đỏ đô và nền kem đậm"""
    left = Inches(1.0)
    width = Inches(8.5)
    height = Inches(1.8)
    
    # Tạo hình hộp bo góc
    shape = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(top_inch), width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = BOX_BG
    shape.line.color.rgb = BURGUNDY
    shape.line.width = Pt(1.5)
    
    # Định dạng văn bản trong hộp
    tf = shape.text_frame
    tf.word_wrap = True
    tf.margin_left = Inches(0.2)
    tf.margin_right = Inches(0.2)
    tf.margin_top = Inches(0.15)
    tf.margin_bottom = Inches(0.15)
    
    # Tiêu đề "BÀI HỌC TRIẾT HỌC"
    p = tf.paragraphs[0]
    p.text = "💡 BÀI HỌC TRIẾT HỌC"
    p.font.name = 'Georgia'
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = BURGUNDY
    p.space_after = Pt(4)
    
    # Nội dung thông điệp
    p2 = tf.add_paragraph()
    p2.text = message_text
    p2.font.name = 'Calibri'
    p2.font.size = Pt(12.5)
    p2.font.italic = True
    p2.font.color.rgb = TEXT_BLACK

def add_slide_notes(slide, notes_text):
    """Thêm Visual Concept Prompt vào Slide Notes để người dùng tham khảo"""
    notes_slide = slide.notes_slide
    text_frame = notes_slide.notes_text_frame
    text_frame.text = notes_text


# ==========================================
# SLIDE 11 — CHỦ QUYỀN DÂN TỘC SỐ & BIÊN GIỚI ẢO
# ==========================================
print("Dang dung Slide 11...")
slide11 = prs.slides.add_slide(blank_layout)
set_slide_background(slide11)
add_header(slide11, "Chủ quyền Dân tộc số & Biên giới ảo", "Phân tích Đặc trưng Dân tộc thời đại số dưới lăng kính Duy vật lịch sử")

# Thêm cột văn bản chứa nội dung
content_box_11 = slide11.shapes.add_textbox(Inches(1.0), Inches(2.2), Inches(8.5), Inches(4.5))
tf11 = content_box_11.text_frame
tf11.word_wrap = True
tf11.margin_left = tf11.margin_top = tf11.margin_right = tf11.margin_bottom = 0

# Nhóm 1: 4 Đặc trưng truyền thống
p_g1 = tf11.paragraphs[0]
p_g1.text = "🔴 4 Đặc trưng Dân tộc Truyền thống (Physical Nation)"
p_g1.font.name = 'Arial'
p_g1.font.size = Pt(16)
p_g1.font.bold = True
p_g1.font.color.rgb = BURGUNDY
p_g1.space_after = Pt(4)

bullets_11_g1 = [
    "Lãnh thổ xác định: Biên giới địa lý rõ ràng (đất liền, vùng trời, biển đảo).",
    "Thị trường kinh tế: Hệ thống giao thương và tiền tệ nội địa thống nhất.",
    "Ngôn ngữ chung: Công cụ giao tiếp và thống nhất ý chí dân tộc.",
    "Văn hóa dân tộc: Các giá trị tinh thần, phong tục tích lũy lịch sử."
]
for bullet in bullets_11_g1:
    p = tf11.add_paragraph()
    p.text = f" • {bullet}"
    p.font.name = 'Calibri'
    p.font.size = Pt(14)
    p.font.color.rgb = TEXT_BLACK
    p.space_after = Pt(2)

# Khoảng đệm giữa 2 nhóm
p_space = tf11.add_paragraph()
p_space.space_before = Pt(8)

# Nhóm 2: Thách thức Big Tech
p_g2 = tf11.add_paragraph()
p_g2.text = "⚡ Xâm lấn của \"Đế chế số\" Big Tech (Digital Empire)"
p_g2.font.name = 'Arial'
p_g2.font.size = Pt(16)
p_g2.font.bold = True
p_g2.font.color.rgb = BURGUNDY
p_g2.space_after = Pt(4)

bullets_11_g2 = [
    "Lãnh thổ số bị xâm lấn: Không gian mạng là lãnh thổ thứ 5 bị Big Tech kiểm soát.",
    "Độc quyền kinh tế số: Big Tech áp đặt luật chơi riêng, hút thặng dư ra nước ngoài.",
    "Bá quyền ngôn ngữ số: Thuật toán dịch thuật làm lu mờ sự đa dạng bản địa.",
    "Đồng hóa văn hóa thuật toán: Áp đặt văn hóa tiêu dùng, đe dọa bản sắc dân tộc."
]
for bullet in bullets_11_g2:
    p = tf11.add_paragraph()
    p.text = f" • {bullet}"
    p.font.name = 'Calibri'
    p.font.size = Pt(14)
    p.font.color.rgb = TEXT_BLACK
    p.space_after = Pt(2)

# Thêm Hộp thông điệp cốt lõi
msg11 = "Chủ quyền quốc gia trong thế kỷ 21 không còn giới hạn ở đất liền hay biển cả, mà được định đoạt bởi năng lực bảo vệ Chủ quyền Dân tộc số (Digital Sovereignty), làm chủ hạ tầng công nghệ và bảo mật dữ liệu nhân dân."
add_core_message(slide11, msg11, 7.2)

# Chèn ảnh minh họa ký họa bên phải
if os.path.exists(images[11]):
    slide11.shapes.add_picture(images[11], Inches(10.0), Inches(2.2), width=Inches(6.8), height=Inches(6.8 * 9/16))
else:
    print(f"[Loi] Khong tim thay anh Slide 11: {images[11]}")

add_slide_notes(slide11, "Visual Concept: Một sơ đồ kỹ thuật dạng ký họa màu kem nhạt chủ đạo, nét vẽ đen và đỏ đô. Bản đồ truyền thống bị dữ liệu đâm xuyên, dẫn tới lâu đài dữ liệu khổng lồ của Big Tech.")


# ==========================================
# SLIDE 12 — HAI XU HƯỚNG PHÁT TRIỂN DÂN TỘC THỜI SỐ
# ==========================================
print("Dang dung Slide 12...")
slide12 = prs.slides.add_slide(blank_layout)
set_slide_background(slide12)
add_header(slide12, "Hai xu hướng phát triển Dân tộc thời số", "Tính biện chứng giữa Tự chủ Độc lập và Hội nhập Công nghệ toàn cầu")

content_box_12 = slide12.shapes.add_textbox(Inches(1.0), Inches(2.2), Inches(8.5), Inches(4.5))
tf12 = content_box_12.text_frame
tf12.word_wrap = True
tf12.margin_left = tf12.margin_top = tf12.margin_right = tf12.margin_bottom = 0

# Xu hướng 1
p_x1 = tf12.paragraphs[0]
p_x1.text = "🛡️ Xu hướng 01: Khẳng định Độc lập & Tự chủ số"
p_x1.font.name = 'Arial'
p_x1.font.size = Pt(16)
p_x1.font.bold = True
p_x1.font.color.rgb = BURGUNDY
p_x1.space_after = Pt(4)

p_x1_sub1 = tf12.add_paragraph()
p_x1_sub1.text = " • Nguyên nhân: Các quốc gia thức tỉnh trước sự thao túng thông tin và độc quyền kinh tế của các tập đoàn Big Tech."
p_x1_sub1.font.name = 'Calibri'
p_x1_sub1.font.size = Pt(14)
p_x1_sub1.font.color.rgb = TEXT_BLACK
p_x1_sub1.space_after = Pt(2)

p_x1_sub2 = tf12.add_paragraph()
p_x1_sub2.text = " • Hành động: Xây dựng luật an ninh mạng, phát triển nền tảng nội địa (Zalo, ứng dụng số VN), lưu trữ dữ liệu tại máy chủ trong nước để bảo vệ bản sắc."
p_x1_sub2.font.name = 'Calibri'
p_x1_sub2.font.size = Pt(14)
p_x1_sub2.font.color.rgb = TEXT_BLACK
p_x1_sub2.space_after = Pt(2)

# Khoảng đệm
p_space12 = tf12.add_paragraph()
p_space12.space_before = Pt(8)

# Xu hướng 2
p_x2 = tf12.add_paragraph()
p_x2.text = "🌐 Xu hướng 02: Liên hợp & Hội nhập Kinh tế số"
p_x2.font.name = 'Arial'
p_x2.font.size = Pt(16)
p_x2.font.bold = True
p_x2.font.color.rgb = BURGUNDY
p_x2.space_after = Pt(4)

p_x2_sub1 = tf12.add_paragraph()
p_x2_sub1.text = " • Nguyên nhân: Sự phát triển vượt bậc của lực lượng sản xuất buộc các dân tộc phải phá vỡ tính cô lập để hội nhập."
p_x2_sub1.font.name = 'Calibri'
p_x2_sub1.font.size = Pt(14)
p_x2_sub1.font.color.rgb = TEXT_BLACK
p_x2_sub1.space_after = Pt(2)

p_x2_sub2 = tf12.add_paragraph()
p_x2_sub2.text = " • Hành động: Tham gia vào chuỗi cung ứng công nghệ toàn cầu, hợp tác quốc tế về chuyển giao AI, phối hợp phòng chống tội phạm mạng xuyên quốc gia."
p_x2_sub2.font.name = 'Calibri'
p_x2_sub2.font.size = Pt(14)
p_x2_sub2.font.color.rgb = TEXT_BLACK
p_x2_sub2.space_after = Pt(2)

# Thêm Hộp thông điệp cốt lõi
msg12 = "Phát triển Dân tộc số vững vàng đòi hỏi tư duy biện chứng sâu sắc: Giữ vững Độc lập số để bảo vệ nền tảng quốc gia, đồng thời chủ động Hội nhập số để không bị tụt hậu trong dòng chảy tiến bộ nhân loại."
add_core_message(slide12, msg12, 7.2)

# Chèn ảnh bên phải
if os.path.exists(images[12]):
    slide12.shapes.add_picture(images[12], Inches(10.0), Inches(2.2), width=Inches(6.8), height=Inches(6.8 * 9/16))
else:
    print(f"[Loi] Khong tim thay anh Slide 12: {images[12]}")

add_slide_notes(slide12, "Visual Concept: Một cán cân biện chứng nét mảnh. Đĩa cân bên trái chứa một khiên chắn kiên cố trống đồng Đông Sơn màu đỏ đô (Độc lập). Đĩa cân bên phải chứa quả địa cầu mạng neural (Hội nhập).")


# ==========================================
# SLIDE 13 — SỨ MỆNH VÔ SẢN SỐ & LIÊN MINH MỚI
# ==========================================
print("Dang dung Slide 13...")
slide13 = prs.slides.add_slide(blank_layout)
set_slide_background(slide13)
add_header(slide13, "Sứ mệnh Vô sản số & Liên minh mới", "Lực lượng Lãnh đạo cuộc cách mạng giải phóng sức lao động trong Kỷ nguyên số")

content_box_13 = slide13.shapes.add_textbox(Inches(1.0), Inches(2.2), Inches(8.5), Inches(4.5))
tf13 = content_box_13.text_frame
tf13.word_wrap = True
tf13.margin_left = tf13.margin_top = tf13.margin_right = tf13.margin_bottom = 0

# Nhận diện
p_vs1 = tf13.paragraphs[0]
p_vs1.text = "📱 Nhận diện Giai cấp Vô sản số (Digital Proletariat)"
p_vs1.font.name = 'Arial'
p_vs1.font.size = Pt(15)
p_vs1.font.bold = True
p_vs1.font.color.rgb = BURGUNDY
p_vs1.space_after = Pt(2)

bullets_13_g1 = [
    "Không sở hữu tư liệu sản xuất số cốt lõi (thuật toán, Big Data, platform).",
    "Bán sức lao động trí óc (IT outsourcing, creator) hoặc lao động chân tay số (shipper, tài xế) để nhận chiết khấu/lương bấp bênh từ Big Tech."
]
for bullet in bullets_13_g1:
    p = tf13.add_paragraph()
    p.text = f" • {bullet}"
    p.font.name = 'Calibri'
    p.font.size = Pt(13.5)
    p.font.color.rgb = TEXT_BLACK
    p.space_after = Pt(2)

# Sứ mệnh
p_vs2 = tf13.add_paragraph()
p_vs2.text = "🎯 Sứ mệnh Lịch sử thời đại số"
p_vs2.font.name = 'Arial'
p_vs2.font.size = Pt(15)
p_vs2.font.bold = True
p_vs2.font.color.rgb = BURGUNDY
p_vs2.space_before = Pt(4)
p_vs2.space_after = Pt(2)

bullets_13_g2 = [
    "Xóa bỏ độc quyền số: Đấu tranh đòi minh bạch thuật toán phân phối lợi ích.",
    "Giải phóng tư liệu sản xuất: Chuyển dịch hạ tầng độc quyền thành tài sản xã hội thông qua các dự án mã nguồn mở và nền tảng phi tập trung."
]
for bullet in bullets_13_g2:
    p = tf13.add_paragraph()
    p.text = f" • {bullet}"
    p.font.name = 'Calibri'
    p.font.size = Pt(13.5)
    p.font.color.rgb = TEXT_BLACK
    p.space_after = Pt(2)

# Liên minh
p_vs3 = tf13.add_paragraph()
p_vs3.text = "🤝 Liên minh Vô sản mới (The New Alliance)"
p_vs3.font.name = 'Arial'
p_vs3.font.size = Pt(15)
p_vs3.font.bold = True
p_vs3.font.color.rgb = BURGUNDY
p_vs3.space_before = Pt(4)
p_vs3.space_after = Pt(2)

p_vs3_sub = tf13.add_paragraph()
p_vs3_sub.text = " • Liên minh chặt chẽ giữa Lao động trí óc số (kỹ sư IT, trí thức công nghệ) và Lao động chân tay số (shipper, công nhân phần cứng) làm đối trọng mạnh mẽ trước tư bản Big Tech."
p_vs3_sub.font.name = 'Calibri'
p_vs3_sub.font.size = Pt(13.5)
p_vs3_sub.font.color.rgb = TEXT_BLACK
p_vs3_sub.space_after = Pt(2)

# Thêm Hộp thông điệp cốt lõi
msg13 = "Vô sản toàn cầu thế kỷ 21 chỉ có thể giành thắng lợi khi biết sử dụng chính Mạng lưới số toàn cầu làm vũ khí liên hiệp, thiết lập thành công Liên minh Trí thức - Lao động nền tảng để giành lại quyền làm chủ công nghệ."
add_core_message(slide13, msg13, 7.2)

# Chèn ảnh bên phải
if os.path.exists(images[13]):
    slide13.shapes.add_picture(images[13], Inches(10.0), Inches(2.2), width=Inches(6.8), height=Inches(6.8 * 9/16))
else:
    print(f"[Loi] Khong tim thay anh Slide 13: {images[13]}")

add_slide_notes(slide13, "Visual Concept: Biểu tượng Búa & Liềm cổ điển cách điệu: Búa vi mạch điện tử, Liềm sợi cáp quang đỏ đô. Nhiều bàn tay (shipper, creator, IT engineer) cùng chung sức nâng cao.")


# ==========================================
# SLIDE 14 — TRUY VẤN HỆ THỐNG MỞ RỘNG (NotebookLM)
# ==========================================
print("Dang dung Slide 14...")
slide14 = prs.slides.add_slide(blank_layout)
set_slide_background(slide14)
add_header(slide14, "Truy vấn Hệ thống mở rộng (NotebookLM Prompts)", "Sử dụng AI để đối thoại sâu sắc hơn với tài liệu Chủ nghĩa duy vật lịch sử")

content_box_14 = slide14.shapes.add_textbox(Inches(1.0), Inches(2.2), Inches(8.5), Inches(4.5))
tf14 = content_box_14.text_frame
tf14.word_wrap = True
tf14.margin_left = tf14.margin_top = tf14.margin_right = tf14.margin_bottom = 0

p_header = tf14.paragraphs[0]
p_header.text = "💻 DANH SÁCH TRUY VẤN TRIẾT HỌC SỐ:"
p_header.font.name = 'Arial'
p_header.font.size = Pt(16)
p_header.font.bold = True
p_header.font.color.rgb = BURGUNDY
p_header.space_after = Pt(6)

prompts_14 = [
    "Big Tech xuyên biên giới đã thách thức \"Chủ quyền Dân tộc\" và \"Biên giới quốc gia\" như thế nào dưới góc nhìn biện chứng của Chủ nghĩa duy vật lịch sử?",
    "Phân tích tính biện chứng giữa hai xu hướng phát triển dân tộc trong kỷ nguyên số: Bảo vệ chủ quyền dữ liệu quốc gia và hội nhập kinh tế số toàn cầu.",
    "Giai cấp vô sản số hiện đại (freelancer, IT engineer, shipper) có những đặc điểm gì giống và khác so với công nhân thế kỷ 19? Làm sao để xây dựng liên minh giữa họ?",
    "Làm thế nào để áp dụng quan điểm của Lenin về \"Quyền dân tộc tự quyết\" vào việc đấu tranh giành lại chủ quyền dữ liệu và quyền tự chủ thuật toán trước các tập đoàn Big Tech?"
]

for idx, prompt in enumerate(prompts_14, 5):
    p = tf14.add_paragraph()
    # Thêm dấu nhắc lệnh màu Burgundy để tạo vóc dáng Terminal
    run_prompt_symbol = p.add_run()
    run_prompt_symbol.text = f"> CÂU LỆNH 0{idx}: "
    run_prompt_symbol.font.name = 'Courier New'
    run_prompt_symbol.font.size = Pt(12)
    run_prompt_symbol.font.bold = True
    run_prompt_symbol.font.color.rgb = BURGUNDY
    
    run_text = p.add_run()
    run_text.text = prompt
    run_text.font.name = 'Calibri'
    run_text.font.size = Pt(12.5)
    run_text.font.color.rgb = TEXT_BLACK
    p.space_after = Pt(6)

# Thêm Hộp hướng dẫn sao chép ở dưới cùng
left_box = Inches(1.0)
top_box = Inches(7.5)
width_box = Inches(8.5)
height_box = Inches(1.2)

shape_inst = slide14.shapes.add_shape(
    MSO_SHAPE.ROUNDED_RECTANGLE, left_box, top_box, width_box, height_box
)
shape_inst.fill.solid()
shape_inst.fill.fore_color.rgb = BG_COLOR
shape_inst.line.color.rgb = BURGUNDY
shape_inst.line.width = Pt(1.5)
shape_inst.line.dash_style = 2 # Dash line

tf_inst = shape_inst.text_frame
tf_inst.word_wrap = True
tf_inst.margin_left = tf_inst.margin_right = Inches(0.2)
tf_inst.margin_top = tf_inst.margin_bottom = Inches(0.1)
p_inst = tf_inst.paragraphs[0]
p_inst.text = "📋 HƯỚNG DẪN DANH CHO ONG CHU:"
p_inst.font.name = 'Arial'
p_inst.font.size = Pt(13)
p_inst.font.bold = True
p_inst.font.color.rgb = BURGUNDY
p_inst.space_after = Pt(2)

p_inst2 = tf_inst.add_paragraph()
p_inst2.text = "Sao chep cac truy van tren vao NotebookLM de tiep tuc boc tach va doi thoai sau sac voi tai lieu hoc thuat."
p_inst2.font.name = 'Calibri'
p_inst2.font.size = Pt(12)
p_inst2.font.color.rgb = TEXT_BLACK

# Chèn ảnh bên phải
if os.path.exists(images[14]):
    slide14.shapes.add_picture(images[14], Inches(10.0), Inches(2.2), width=Inches(6.8), height=Inches(6.8 * 9/16))
else:
    print(f"[Loi] Khong tim thay anh Slide 14: {images[14]}")

add_slide_notes(slide14, "Visual Concept: Khung Terminal phác họa nét mảnh trên nền kem nhạt. Phía trong là 4 dòng lệnh bắt đầu bằng dấu nhắc '>' màu đỏ đô.")

# ==========================================
# 3. Lưu Slide lại
# ==========================================
prs.save(pptx_filename)
print(f"\n[Thanh cong] Da chen thanh cong 4 slide bo sung vao {pptx_filename}!")
