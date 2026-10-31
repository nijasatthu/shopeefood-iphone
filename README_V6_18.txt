ShopeeFood V6.18 — UI Refresh (iPhone PWA)
==========================================
Nâng cấp dựa trên mã nguồn V6.17 cá nhân.

THAY ĐỔI GIAO DIỆN
- Header màu cam/đỏ với nút nhanh Dán mã.
- Tổng quan: thẻ thống kê, ba cột phân loại với màu riêng và số liệu tình trạng.
- Kho mã: thẻ mã thu gọn, bộ lọc cân đối, hai nút Copy mã/Copy thông tin rõ ràng, đầy đủ các thao tác gốc.
- Đã gửi: thẻ thanh toán gọn, thống kê 4 nhóm, giữ chọn/xóa mã đã trả tiền.
- Thùng rác: thêm lối tắt trực tiếp trên thanh điều hướng đáy (khôi phục/xóa như V6.17).
- Cài đặt, Tiện ích và các hộp thoại: đồng bộ nét bo góc, kích thước và khoảng cách.

DỮ LIỆU VÀ CHỨC NĂNG
- Không đổi localStorage/appStorage, mã nguồn xử lý dữ liệu, định dạng backup JSON hoặc thao tác.
- Không đổi các tính năng V6.17: lọc/sắp xếp, nhập/kiểm tra mã, sao chép,
  đánh dấu dùng/gửi, tiền mua, thanh toán, thùng rác, sao lưu và khôi phục.
- Số liệu và mã hiển thị từ dữ liệu thật đang lưu trên thiết bị.
- Dữ liệu lưu theo tên miền trên Safari/PWA. Để giữ dữ liệu cũ: cập nhật files
  vào CÙNG repository và GitHub Pages URL; sao lưu JSON trước khi thay.

CÀI ĐẶT
1. Giải nén ZIP.
2. Đưa các file bên trong thư mục lên GitHub Pages tại cùng đường dẫn với V6.17.
3. Mở Safari, tải lại trang (có thể cần đóng/mở PWA do service worker cache).
4. Kiểm tra số lượng mã, một vài mã, bảng Đã gửi, Thùng rác và backup.

LƯU Ý
- Đây là PWA cho iPhone, không phải .ipa.
- Không có Firebase, không có cộng tác viên.
