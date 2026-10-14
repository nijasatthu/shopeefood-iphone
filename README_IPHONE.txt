SHOPEEFOOD V6.14 - BẢN IPHONE (THÊM VÀO MÀN HÌNH CHÍNH)

Đây là mã nguồn PWA, KHÔNG phải file IPA. Cần đăng các tệp lên HTTPS một lần trước khi cài vào iPhone.

CÁCH ĐƠN GIẢN BẰNG GITHUB PAGES:
1. Tạo một repository GitHub mới dành cho "Kho mã của tôi".
2. Tải các file index.html, sw.js, manifest.webmanifest, logo.png và các icon lên THƯ MỤC GỐC (root) repository.
3. Trong repository: Settings > Pages > Build and deployment > Deploy from a branch > main / (root) > Save.
4. Chờ GitHub Pages tạo link HTTPS https://<tài-khoản>.github.io/<repo>/ .
5. Mở đúng link đó trong Safari trên iPhone.
6. Chạm Chia sẻ > Thêm vào Màn hình chính > Thêm.
7. Mở icon "Kho mã" ở Màn hình chính. Lần truy cập đầu cần mạng; bản PWA có thể chạy offline sau khi tài nguyên được lưu cache.

CÁC CHỨC NĂNG:
- Dán mã, tạo phân loại, chỉnh hạn và số lượt, hai kiểu Copy, chọn/xóa hàng loạt.
- Ghi kết quả kiểm tra voucher có giám sát, thống kê, tiện ích, cài đặt, backup.
- Lưu trên máy trong bộ nhớ web app, không tự gửi mã lên máy chủ.
- Xuất backup bằng menu Chia sẻ và chọn "Lưu vào Tệp"; nhập bằng nút "Nhập backup".

QUAN TRỌNG:
- Dữ liệu trên iPhone tách biệt Android. Muốn chuyển mã cũ: trên Android Xuất backup JSON > chuyển sang iPhone (AirDrop, iCloud Drive, ...) > Nhập backup từ app iPhone.
- Không xóa dữ liệu website hoặc xóa icon app trước khi xuất backup.
- Không tự truy cập hay điều khiển app ShopeeFood; kiểm tra voucher yêu cầu thao tác của bạn.
- Chỉ mã nguồn giao diện được đăng lên GitHub Pages; mã voucher người dùng nhập sẽ lưu cục bộ trên iPhone.
- Khi cập nhật mã nguồn trên Pages, thử mở app có Internet; cache offline có thể cần tải lại theo phiên bản.
