/* ========================================
   CẤU HÌNH NỘI DUNG - DỄ DÀNG CHỈNH SỬA
   ======================================== */

const CONFIG = {
    // ========== THAY ĐỔI CÂU HỎI TỎ TÌNH ==========
    question: "Cậu có đồng ý làm người yêu tớ không? 💕",
    
    // ========== THAY ĐỔI EMAIL NHẬN LÝ DO (QUAN TRỌNG!) ==========
    receiverEmail: "your-email@example.com", // <-- SỬA EMAIL CỦA BẠN TẠI ĐÂY
    
    // ========== CẤU HÌNH EMAILJS (XEM HƯỚNG DẪN BÊN DƯỚI) ==========
    emailJS: {
        enabled: false, // Đổi thành true khi đã cấu hình xong
        serviceID: "YOUR_SERVICE_ID",     // Lấy từ EmailJS Dashboard
        templateID: "YOUR_TEMPLATE_ID",   // Lấy từ EmailJS Dashboard
        publicKey: "YOUR_PUBLIC_KEY"      // Lấy từ EmailJS Dashboard
    },
    
    // ========== CẤU HÌNH HIỆU ỨNG ==========
    effects: {
        // Số lượng tim bay nền
        backgroundHeartsCount: 15,
        // Số lượng pháo giấy
        confettiCount: 150,
        // Thời gian hiệu ứng confetti (ms)
        confettiDuration: 5000
    }
};
