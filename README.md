# 💕 Confession Web - Trang Web Tỏ Tình Tương Tác

Trang web tỏ tình dễ thương với phong cách pixel art, nút "Không" né tránh không bấm được, và tự động gửi email thông báo!

![Confession Web](https://img.shields.io/badge/Love-Confession-ff69b4?style=for-the-badge&logo=heart)
![Status](https://img.shields.io/badge/Status-Ready-brightgreen?style=for-the-badge)

## ✨ Tính Năng

- 🎨 **Giao diện Pixel Art** - Phong cách retro dễ thương
- 🏃 **Nút "Không" Né Tránh** - Không thể từ chối được!
- 💖 **Form Nhập Lý Do** - Người được tỏ tình viết lý do yêu
- 📧 **Gửi Email Tự Động** - Nhận thông báo qua email (không cần backend)
- 💾 **Lưu LocalStorage** - Backup dữ liệu trên trình duyệt
- 🎊 **Hiệu Ứng Confetti** - Pháo giấy rực rỡ khi đồng ý
- 💕 **Tim Bay Pixel** - Hiệu ứng tim bay lãng mạn
- 📱 **Responsive** - Hoạt động tốt trên mọi thiết bị

## 🚀 Cài Đặt Nhanh

### Bước 1: Clone Repository

```bash
git clone https://github.com/TrVHau/confess-to-girlfriend.git
cd confess-to-girlfriend
```

### Bước 2: Cấu Hình Nội Dung

Mở file **`js/config.js`** và chỉnh sửa:

```javascript
const CONFIG = {
    // ========== THAY ĐỔI CÂU HỎI TỎ TÌNH ==========
    question: "Cậu có đồng ý làm người yêu tớ không? 💕",
    
    // ========== THAY ĐỔI EMAIL NHẬN THÔNG BÁO ==========
    receiverEmail: "email-cua-ban@gmail.com", // <-- Thay email của bạn
    
    // ========== CẤU HÌNH EMAILJS (Tùy chọn) ==========
    emailJS: {
        enabled: false, // Đổi true nếu muốn gửi email tự động
        serviceID: "YOUR_SERVICE_ID",
        templateID: "YOUR_TEMPLATE_ID",
        publicKey: "YOUR_PUBLIC_KEY"
    },
    
    // ========== CẤU HÌNH HIỆU ỨNG ==========
    effects: {
        backgroundHeartsCount: 15,  // Số lượng tim bay
        confettiCount: 150,         // Số lượng pháo giấy
        confettiDuration: 5000      // Thời gian hiệu ứng (ms)
    }
};
```

### Bước 3: Thay Thế Hình Ảnh (Tùy Chọn)

Thay thế các file ảnh trong thư mục gốc:

- **`background.png`** - Hình nền trang web
- **`heart.png`** - Icon tim bay (32x32px khuyến nghị)
- **`favicon.ico`** - Icon hiển thị trên tab trình duyệt

### Bước 4: Chạy Trang Web

#### Cách 1: Mở Trực Tiếp
```bash
# Chỉ cần mở file index.html bằng trình duyệt
open index.html  # MacOS
xdg-open index.html  # Linux
start index.html  # Windows
```

#### Cách 2: Dùng Live Server (Khuyến nghị)
```bash
# Nếu có VS Code, cài extension Live Server
# Sau đó right-click index.html > Open with Live Server
```

#### Cách 3: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Truy cập: http://localhost:8000
```

## 📧 Cấu Hình Gửi Email (Tùy Chọn)

Nếu muốn nhận email thông báo khi có người tỏ tình:

### 1. Đăng Ký EmailJS (Miễn Phí)

- Truy cập: https://www.emailjs.com/
- Đăng ký tài khoản (200 email/tháng miễn phí)

### 2. Thiết Lập Service

1. **Add Email Service**
   - Chọn Gmail (dễ nhất)
   - Connect tài khoản Gmail
   - Copy **Service ID**

2. **Create Email Template**
   - Template Name: `Confession Message`
   - Subject: `💕 Có người vừa tỏ tình với bạn!`
   - Content:
   ```html
   <h2>Có người vừa gửi lý do yêu bạn! 💖</h2>
   <p><strong>Lý do:</strong></p>
   <p>{{reason}}</p>
   <p><strong>Thời gian:</strong> {{timestamp}}</p>
   ```
   - Copy **Template ID**

3. **Get Public Key**
   - Account > General
   - Copy **Public Key**

### 3. Cập Nhật Config

Mở `js/config.js`:

```javascript
emailJS: {
    enabled: true,                    // Đổi thành true
    serviceID: "service_abc123",      // Paste Service ID
    templateID: "template_xyz789",    // Paste Template ID
    publicKey: "aBcD1234EfGh5678"    // Paste Public Key
}
```

📖 **Hướng dẫn chi tiết:** Xem file [`HUONG_DAN_EMAILJS.md`](HUONG_DAN_EMAILJS.md)

## 📁 Cấu Trúc Thư Mục

```
confession-web/
├── index.html              # File HTML chính
├── background.png          # Hình nền
├── heart.png              # Icon tim bay
├── favicon.ico            # Favicon
├── css/
│   └── style.css          # CSS styles
├── js/
│   ├── config.js          # ⭐ Cấu hình (SỬA TẠI ĐÂY)
│   ├── effects.js         # Hiệu ứng tim & confetti
│   └── main.js            # Logic chính
├── README.md              # Tài liệu này
└── HUONG_DAN_EMAILJS.md   # Hướng dẫn EmailJS
```

## 🎨 Tùy Chỉnh Giao Diện

### Thay Đổi Màu Sắc

Mở `css/style.css` và tìm các màu:

```css
/* Màu gradient chính */
background: linear-gradient(135deg, #ff6b9d 0%, #c86dd7 50%, #ff69b4 100%);

/* Màu nút Đồng ý */
.btn-yes {
    background: linear-gradient(135deg, #ff6b9d 0%, #c86dd7 100%);
}

/* Màu chữ tiêu đề */
.question {
    color: #ff1493;
}
```

### Thay Đổi Font

Mở `index.html` và thay đổi Google Font:

```html
<!-- Thay 'Press Start 2P' bằng font khác -->
<link href="https://fonts.googleapis.com/css2?family=TenFontKhac&display=swap" rel="stylesheet">
```

Cập nhật trong `css/style.css`:

```css
body {
    font-family: 'TenFontKhac', cursive;
}
```

### Điều Chỉnh Hiệu Ứng

Trong `js/config.js`:

```javascript
effects: {
    backgroundHeartsCount: 20,   // Tăng số tim bay
    confettiCount: 200,          // Tăng số pháo giấy
    confettiDuration: 8000       // Kéo dài hiệu ứng
}
```

## 🐛 Xử Lý Sự Cố

### Nút "Không" Vẫn Bấm Được?
- Kiểm tra Console (F12) có lỗi JavaScript không
- Đảm bảo tất cả file JS được load đúng

### Tim Không Bay?
- Kiểm tra file `heart.png` có tồn tại không
- Xem Console có lỗi load ảnh không

### Email Không Gửi Được?
- Kiểm tra `enabled: true` trong config
- Verify Service ID, Template ID, Public Key đúng
- Kiểm tra thư mục Spam/Junk
- Xem Console log lỗi gì

### Background Không Hiển Thị?
- Kiểm tra file `background.png` trong thư mục gốc
- Thử dùng ảnh khác với format .jpg hoặc .png

## 📱 Deploy Lên Web

### GitHub Pages (Miễn Phí)

```bash
# Push lên GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Trong GitHub repo:
# Settings > Pages > Source: main branch
# Website sẽ có tại: https://username.github.io/confession-web
```

### Netlify (Miễn Phí)

1. Kéo thả thư mục vào https://app.netlify.com/drop
2. Hoặc connect GitHub repo
3. Deploy tự động

### Vercel (Miễn Phí)

```bash
npm i -g vercel
vercel
```

## 💡 Tips & Tricks

### 1. Xem Dữ Liệu Đã Gửi

Mở Console (F12) và gõ:

```javascript
localStorage.getItem('confessionSubmissions')
```

### 2. Xóa Dữ Liệu Cũ

```javascript
localStorage.removeItem('confessionSubmissions')
```

### 3. Test EmailJS

Trong `js/config.js`, để test:

```javascript
receiverEmail: "email-test-cua-ban@gmail.com"
```

Bấm test và kiểm tra email!

### 4. Tùy Chỉnh Thông Báo Thành Công

Mở `js/main.js`, tìm `showSuccessMessage()` và sửa:

```javascript
successMessage.innerHTML = `
    <h2>🎉 Chúc mừng!</h2>
    <p>Thông báo tùy chỉnh của bạn!</p>
`;
```

## 🤝 Đóng Góp

Contributions, issues và feature requests đều được chào đón!

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## ❤️ Made With Love

Được tạo ra với 💖 để giúp bạn tỏ tình thành công!

---

**⭐ Nếu thích project này, hãy cho một Star trên GitHub!**

**💬 Cần trợ giúp? Mở Issue hoặc liên hệ!**

**🎉 Chúc bạn tỏ tình thành công!** 💕
# confess-to-girlfriend
