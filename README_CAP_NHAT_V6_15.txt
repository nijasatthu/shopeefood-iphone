SHOPEEFOOD iPHONE PWA V6.15 — CẬP NHẬT TRÊN V6.14

NỀN TẢNG: giữ nguyên mã nguồn V6.14, không sử dụng Firebase hay cộng tác viên.

CHỨC NĂNG MỚI
- 4 mục chính: Tổng quan, Kho mã, Đã gửi, Cài đặt.
- Tổng quan là các ô phân loại; bấm vào phân loại để lọc trong Kho mã.
- Nhập mã lưu created timestamp như V6.14. Mã cũ thiếu ngày nhập hiển thị "Chưa có dữ liệu".
- Đánh dấu Đã dùng ghi usedAt. Bỏ Đã dùng xóa usedAt; đánh dấu lại ghi giờ mới.
- Đánh dấu Đã gửi ghi sentAt, sentPrice cố định theo giá mặc định tại thời điểm gửi.
- Đã gửi độc lập với Đã dùng. Không cộng tiền trùng khi bấm lại.
- Giá mặc định 50K=15.000đ, 100K=40.000đ, 200K=90.000đ. Chỉnh giá ở Cài đặt.
- Mục Đã gửi tổng hợp tổng chi phí, đã thanh toán, chưa thanh toán, lọc theo thanh toán và sửa giá từng mã.
- Backup JSON có thêm prices và trường trạng thái/timestamp. Nhập backup V6.14 vẫn hỗ trợ.
- Tính năng kiểm tra voucher thủ công, nhập mã, phân loại, copy, sao lưu vẫn giữ.

LƯU Ý
- App lưu cục bộ bằng localStorage; không tự đồng bộ giữa máy.
- Khi cập nhật từ V6.14 bằng GitHub Pages, dùng CÙNG địa chỉ website/domain/đường dẫn gốc cũ để dữ liệu localStorage được giữ. Nếu đổi origin, nhập backup từ V6.14.
- SAO LƯU TRƯỚC khi nâng cấp, tránh xóa dữ liệu Safari hoặc thay đổi miền.
- Gỡ trạng thái Đã gửi sẽ xóa ghi nhận thanh toán của lần gửi đó, sau khi xác nhận.
- Mã cũ nếu chưa có timestamp sẽ không suy đoán giờ nhập/giờ dùng.
- Phiên bản PWA, không phải file IPA/App Store.

CÀI ĐẶT
1. Giải nén, tải các file vào nơi đang host V6.14 (sao lưu site trước).
2. Mở web bằng Safari, tải lại, hoặc đóng mở PWA để service worker nhận bản mới.
3. Kiểm tra tab Tổng quan, Kho mã, Đã gửi, Cài đặt.
4. Đăng ký một mã thử, Đã dùng, Đã gửi, Đã thanh toán; xuất backup JSON để xác nhận dữ liệu.
