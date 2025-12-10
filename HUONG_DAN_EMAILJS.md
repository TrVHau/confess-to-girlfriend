# 📧 Hướng Dẫn Cấu Hình EmailJS - Gửi Email Không Cần Backend

## 🎯 EmailJS là gì?
EmailJS là dịch vụ cho phép gửi email trực tiếp từ JavaScript mà không cần backend/server. Hoàn toàn MIỄN PHÍ cho 200 email/tháng.

## 📝 Các Bước Cấu Hình

### Bước 1: Đăng Ký Tài Khoản EmailJS
1. Truy cập: https://www.emailjs.com/
2. Click **"Sign Up"** và đăng ký tài khoản (miễn phí)
3. Xác nhận email

### Bước 2: Thêm Email Service
1. Vào **Dashboard** > **Email Services**
2. Click **"Add New Service"**
3. Chọn nhà cung cấp email (Gmail khuyến nghị):
   - **Gmail**: Dễ nhất, chọn cái này
   - Outlook, Yahoo, hoặc custom SMTP
4. Click **"Connect Account"** và đăng nhập Gmail của bạn
5. Copy **Service ID** (ví dụ: `service_abc123`)

### Bước 3: Tạo Email Template
1. Vào **Email Templates** > **Create New Template**
2. Điền thông tin:
   ```
   Template Name: Confession Message
   
   Subject: 💕 Có người vừa tỏ tình với bạn!
   
   Content (HTML):
   <h2>Có người vừa gửi lý do yêu bạn! 💖</h2>
   <p><strong>Lý do:</strong></p>
   <p>{{reason}}</p>
   <p><strong>Thời gian:</strong> {{timestamp}}</p>
   <hr>
   <p><em>Gửi từ Confession Web</em></p>
   ```
3. Click **"Save"**
4. Copy **Template ID** (ví dụ: `template_xyz789`)

### Bước 4: Lấy Public Key
1. Vào **Account** > **General**
2. Tìm phần **"Public Key"** (hoặc API Keys)
3. Copy **Public Key** (ví dụ: `aBcD1234EfGh5678`)

### Bước 5: Cấu Hình File config.js
Mở file `js/config.js` và điền thông tin:

```javascript
emailJS: {
    enabled: true,                        // Đổi thành true
    serviceID: "service_abc123",          // Paste Service ID
    templateID: "template_xyz789",        // Paste Template ID
    publicKey: "aBcD1234EfGh5678"        // Paste Public Key
}
```

### Bước 6: Cập Nhật Email Nhận
Trong `js/config.js`:
```javascript
receiverEmail: "email-cua-ban@gmail.com", // Email bạn muốn nhận thông báo
```

## ✅ Hoàn Thành!
Giờ khi ai đó bấm "Gửi đi!" trong form, bạn sẽ nhận email ngay lập tức!

## 🔍 Kiểm Tra
1. Mở trang web
2. Bấm "Đồng ý"
3. Nhập lý do
4. Bấm "Gửi đi!"
5. Kiểm tra email (có thể trong Spam/Junk)

## ⚠️ Lưu Ý Quan Trọng

### Giới Hạn Miễn Phí
- **200 email/tháng** (đủ dùng cho web tỏ tình)
- Nếu vượt quá cần nâng cấp hoặc tạo tài khoản mới

### Bảo Mật
- **Public Key** có thể hiển thị công khai (an toàn)
- **Private Key** (nếu có) KHÔNG ĐƯỢC để trong code
- EmailJS tự động lọc spam

### Nếu Không Nhận Email
1. Kiểm tra **Spam/Junk** folder
2. Đảm bảo email trong Template đúng
3. Kiểm tra Console (F12) xem có lỗi không
4. Verify email trong EmailJS Dashboard

## 🎁 Bonus Tips

### Tùy Chỉnh Template
Bạn có thể dùng các biến trong template:
- `{{reason}}` - Lý do yêu
- `{{timestamp}}` - Thời gian
- `{{to_email}}` - Email nhận (tự động)

### Thêm Thông Tin
Muốn thêm tên người gửi? Sửa trong `main.js`:
```javascript
const templateParams = {
    to_email: CONFIG.receiverEmail,
    reason: reason,
    timestamp: new Date(timestamp).toLocaleString('vi-VN'),
    sender_name: "Người bí ẩn" // Thêm dòng này
};
```

Và thêm `{{sender_name}}` vào template!

## 🆘 Cần Trợ Giúp?
- Docs: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/support/

---

**Chúc bạn setup thành công! 💖**
