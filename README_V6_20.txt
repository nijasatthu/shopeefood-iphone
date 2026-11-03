SHOPEEFOOD CODE MANAGER — V6.20 · UI/UX MODERN REFRESH

NỀN TẢNG: iPhone (PWA trên Safari / GitHub Pages).
MÃ NGUỒN GỐC: V6.19 bản cá nhân.

THAY ĐỔI GIAO DIỆN
- Thiết kế lại giao diện theo phong cách hiện đại, ưu tiên màn hình iPhone 17 Pro (~402 CSS px).
- Header, tổng quan, thống kê, phân loại, thẻ mã, thanh công cụ, bảng gửi/tiền, thùng rác, mã lỗi, nhật ký và cài đặt được điều chỉnh để dễ đọc và ít rối hơn.
- 6 tab chính dùng icon SVG đồng bộ. Nhật ký vẫn trong Menu/Cài đặt.
- Chọn và thao tác hàng loạt ở mục Đã gửi, Mã lỗi và Thùng rác đặt trong mục thu gọn; nhấn dòng 'Chọn nhiều...' để mở.
- Popup và thanh thông báo được làm mới; giữ chặn zoom và giới hạn tràn ngang từ V6.18.1.
- Thay text sắp xếp hiển thị thành 'Mới → cũ' / 'Cũ → mới'; dữ liệu vẫn sắp xếp theo ngày giờ nhập mã.

GIỮ NGUYÊN LOGIC / DỮ LIỆU
- Vẫn dùng localStorage và các khóa V6.19, không xóa/chuyển dữ liệu khi cập nhật tại CÙNG địa chỉ website.
- Không đổi cơ chế quản lý mã, nhập mã, kiểm tra ShopeeFood thủ công, mã lỗi, nhật ký, gửi và thanh toán, xóa/khôi phục, chọn nhiều, backup.
- File backup JSON V6.20 vẫn có cấu trúc tương thích V6.19 (bump trường version metadata 620).
- Không sử dụng Firebase, không có quản lý CTV.

CẬP NHẬT QUA GITHUB PAGES
1. Mở phiên bản đang chạy; xuất file backup JSON và giữ bản này an toàn.
2. Giải nén ZIP rồi đưa TẤT CẢ file trong thư mục V6.20 lên repository GitHub Pages hiện tại,
   để index.html, sw.js, manifest.webmanifest và các icon ở thư mục gốc.
3. Giữ NGUYÊN địa chỉ GitHub Pages để dữ liệu cục bộ tiếp tục có thể truy cập.
4. Đóng app ở trình đa nhiệm và mở lại. Nếu vẫn thấy giao diện V6.19,
   thử làm mới trong Safari rồi mở lại app PWA sau khi GitHub Pages cập nhật.
5. Kiểm tra các mã và thống kê; nếu khác thường, nhập backup trước khi tiếp tục dùng.

LƯU Ý
- Tránh xóa dữ liệu website trong Safari hoặc xóa ứng dụng khỏi Màn hình chính trước khi sao lưu.
- Việc giữ dữ liệu phụ thuộc cùng origin/lưu trữ của PWA; một số cách cài PWA trên iOS có kho lưu độc lập.
- Đã kiểm tra cú pháp JavaScript/CSS, dữ liệu mô phỏng, 6 tab, 3 khu vực thao tác hàng loạt,
  popup dán mã, và bố cục ở độ rộng 360 / 402 / 440 px bằng Chromium.
- CHƯA kiểm thử trực tiếp trên Safari của iPhone 17 Pro.
