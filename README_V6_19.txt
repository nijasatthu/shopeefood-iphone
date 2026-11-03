SHOPEEFOOD V6.19 – iPHONE PWA (BẢN CÁ NHÂN)
Nguồn nâng cấp: ShopeeFood V6.18.1 – Fix Zoom.

CÁC THAY ĐỔI CHÍNH
1. Kho mã mặc định hiển thị Còn lại, mọi phân loại, xếp theo ngày/giờ nhập mới → cũ. Có thể đổi Cũ → Mới và Tên A → Z. Không sắp theo hạn sử dụng ở ô này nữa.
2. Kiểm tra mã chỉ còn hai kết quả: Áp dụng được và Mã lỗi. Khi kiểm tra, có ô sửa nội dung mã, kiểm tra mã trùng cùng phân loại. Mã lỗi chuyển sang tab riêng; không còn trong tổng Kho mã đang hoạt động.
3. Bỏ nút Chỉnh trên từng thẻ Kho mã. Giữ các nút Copy mã, Copy thông tin, Kiểm tra, Đã dùng/Chưa dùng, Gửi mã, Xóa.
4. Thông báo sau thao tác thành công (sao chép, đánh dấu, gửi, thanh toán, xóa, khôi phục, nhập, ...).
5. Nhật ký hoạt động: truy cập Cài đặt > Nhật ký hoặc menu ⋮; nhật ký bắt đầu từ V6.19, tối đa 3.000 sự kiện gần nhất; được lưu trong backup.
6. Đã gửi: Chọn tất cả theo bộ lọc hiện tại, bỏ chọn, đánh dấu đã/chưa thanh toán hàng loạt, chọn các mã đã thanh toán để chuyển Thùng rác.
7. Mã lỗi: Chọn tất cả, kiểm tra/sửa lại, khôi phục về Kho mã hoặc xóa vào Thùng rác. Thùng rác: Chọn tất cả, khôi phục hoặc xóa vĩnh viễn.

DỮ LIỆU VÀ BACKUP
- Giữ nguyên tên khóa lưu dữ liệu kho mã, phân loại và giá mua từ bản cũ.
- Mã lỗi và Nhật ký được lưu vào các khóa mới, không ghi đè kho đã có.
- Backup JSON V6.19 bao gồm Kho mã, Mã lỗi, Thùng rác, Nhật ký, phân loại, trạng thái và bảng giá.
- Có thể nhập backup JSON V6.14–V6.18.1; các dữ liệu cũ chưa có Mã lỗi hay Nhật ký sẽ được khôi phục bình thường.
- Mã thuộc các kết quả kiểm tra cũ vẫn giữ trong Kho mã để tránh tự ý di chuyển dữ liệu; kiểm tra lại mã và chọn “Mã lỗi” nếu cần chuyển.
- Xóa từ Kho mã V6.19 được chuyển sang Thùng rác thay vì mất ngay. Xóa vĩnh viễn từ Thùng rác không thể hoàn tác.
- Mã đã gửi chuyển vào Mã lỗi vẫn được tính trong phần ghi nhận thanh toán (lịch sử tiền mua không tự mất).

CẬP NHẬT QUA GITHUB PAGES TRÊN IPHONE
1. Mở app cũ và Xuất backup JSON, lưu vào ứng dụng Tệp.
2. Giải nén ZIP, tải toàn bộ các file bên trong thư mục lên thư mục gốc repository GitHub Pages (index.html nằm ở root).
3. Đảm bảo thay thế index.html và sw.js; nếu GitHub từ chối file trùng tên, sửa/xóa bản cũ đúng file rồi tải bản mới.
4. Mở website bằng Safari, tải lại trang; đóng/mở lại app nếu cache chưa cập nhật.
5. Kiểm tra phiên bản V6.19 ở header và xác nhận dữ liệu cũ còn đủ.
6. Thử với 1–2 mã giả trước khi dùng với dữ liệu thật.

PHẠM VI VÀ GIỚI HẠN
- App là PWA dùng offline. Không dùng Firebase, không đồng bộ đám mây hay cộng tác viên.
- Kết quả kiểm tra do bạn ghi nhận thủ công, không xác minh trực tuyến với ShopeeFood.
- Bảo mật dữ liệu phụ thuộc thiết bị; nên thường xuyên backup, không đưa file backup chứa mã thật lên GitHub.
- Đã kiểm thử mô phỏng bằng Chromium các luồng chính và kiểm tra cú pháp JS; chưa kiểm thử trực tiếp trên Safari của iPhone.
