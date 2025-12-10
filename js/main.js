/* ========================================
   LOGIC CHÍNH CỦA ỨNG DỤNG
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Lấy các elements
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const modal = document.getElementById('resultModal');
    const canvas = document.getElementById('confetti-canvas');

    // Thiết lập kích thước canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ========== LOAD NỘI DUNG TỪ CONFIG ==========
    loadContent();

    // ========== LOGIC NÚT "KHÔNG" - NÉ TRÁNH ==========
    function moveNoButton() {
        // Lấy kích thước viewport
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        // Tạo vị trí ngẫu nhiên trong viewport
        const randomX = Math.floor(Math.random() * maxX) + 10;
        const randomY = Math.floor(Math.random() * maxY) + 10;

        // Di chuyển nút đến vị trí mới
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }

    // Khi di chuột vào nút "Không"
    noBtn.addEventListener('mouseover', moveNoButton);

    // Khi chạm vào nút "Không" (cho thiết bị cảm ứng)
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // Ngăn click vào nút "Không"
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // ========== LOGIC NÚT "ĐỒNG Ý" ==========
    yesBtn.addEventListener('click', () => {
        // Thêm overlay màu hồng
        document.body.classList.add('accepted');
        
        // Bắt đầu hiệu ứng tim bay
        createBackgroundHearts();
        setInterval(createBackgroundHearts, 12000);
        
        // Hiển thị modal
        modal.style.display = 'flex';
    });
    
    // ========== XỬ LÝ FORM ==========
    const reasonForm = document.getElementById('reasonForm');
    if (reasonForm) {
        reasonForm.addEventListener('submit', handleFormSubmit);
    }

    // ========== ĐÓNG MODAL ==========
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // ========== XỬ LÝ RESIZE WINDOW ==========
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // ========== ĐẶT VỊ TRÍ BAN ĐẦU CHO NÚT "KHÔNG" ==========
    setTimeout(() => {
        const rect = noBtn.getBoundingClientRect();
        noBtn.style.left = rect.left + 'px';
        noBtn.style.top = rect.top + 'px';
    }, 200);
});

// ========== LOAD NỘI DUNG TỪ CONFIG ==========
function loadContent() {
    // Cập nhật câu hỏi
    document.querySelector('.question').textContent = CONFIG.question;
}

// ========== XỬ LÝ FORM GỬI LÝ DO ==========
function handleFormSubmit(e) {
    e.preventDefault();
    
    const reasonInput = document.getElementById('reasonInput');
    const reason = reasonInput.value.trim();
    
    if (reason) {
        const timestamp = new Date().toISOString();
        const submission = {
            reason: reason,
            timestamp: timestamp,
            receiverEmail: CONFIG.receiverEmail
        };
        
        // Lưu vào localStorage
        let submissions = JSON.parse(localStorage.getItem('confessionSubmissions') || '[]');
        submissions.push(submission);
        localStorage.setItem('confessionSubmissions', JSON.stringify(submissions));
        
        // Gửi email nếu EmailJS được bật
        if (CONFIG.emailJS.enabled) {
            sendEmailViaEmailJS(reason, timestamp);
        } else {
            showSuccessMessage(reason, timestamp, false);
        }
        
        // Log ra console
        console.log('📝 LÝ DO MỚI ĐƯỢC GỬI:');
        console.log(submission);
    }
}

// ========== GỬI EMAIL QUA EMAILJS ==========
function sendEmailViaEmailJS(reason, timestamp) {
    const successMessage = document.getElementById('successMessage');
    
    // Hiển thị loading
    successMessage.innerHTML = '⏳ Đang gửi email...';
    successMessage.style.display = 'block';
    successMessage.style.background = '#ffc107';
    
    // Khởi tạo EmailJS
    emailjs.init(CONFIG.emailJS.publicKey);
    
    // Tham số gửi email
    const templateParams = {
        to_email: CONFIG.receiverEmail,
        reason: reason,
        timestamp: new Date(timestamp).toLocaleString('vi-VN')
    };
    
    // Gửi email
    emailjs.send(CONFIG.emailJS.serviceID, CONFIG.emailJS.templateID, templateParams)
        .then(function(response) {
            console.log('✅ Email sent successfully!', response);
            showSuccessMessage(reason, timestamp, true);
            createConfetti();
        }, function(error) {
            console.error('❌ Email failed:', error);
            successMessage.innerHTML = `
                ⚠️ Không thể gửi email!<br><br>
                <strong>Lỗi:</strong> ${error.text}<br>
                Nhưng lý do đã được lưu vào trình duyệt.
            `;
            successMessage.style.background = '#ff6b6b';
        });
}

// ========== HIỂN THỊ THÔNG BÁO THÀNH CÔNG ==========
function showSuccessMessage(reason, timestamp, emailSent) {
    const successMessage = document.getElementById('successMessage');
    
    successMessage.innerHTML = `
        <h2 style="font-size: 2em; margin-bottom: 20px;">🎉</h2>
        <h3 style="font-size: 1.2em; margin-bottom: 20px; line-height: 1.8;">
            Chúc mừng! 💖
        </h3>
        <p style="font-size: 1em; line-height: 1.8; margin-top: 20px;">
            <strong>Tớ cũng yêu cậu! 💕</strong>
        </p>
    `;
    successMessage.style.display = 'block';
    successMessage.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #c86dd7 100%)';
    successMessage.style.color = 'white';
    successMessage.style.fontSize = '0.9em';
    successMessage.style.padding = '30px';
    
    // Ẩn form
    document.getElementById('reasonForm').style.display = 'none';
    
    // Tạo confetti
    createConfetti();
}
