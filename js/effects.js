/* ========================================
   HIỆU ỨNG - TIM BAY & CONFETTI
   ======================================== */

// ========== HIỆU ỨNG TIM BAY NỀN - SỬ DỤNG HEART.PNG ==========
function createBackgroundHearts() {
    for (let i = 0; i < CONFIG.effects.backgroundHeartsCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-bg';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
            const size = Math.random() * 30 + 30; // 30-60px
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 13000);
        }, i * 800);
    }
}

// ========== HIỆU ỨNG CONFETTI (PHÁO GIẤY) ==========
function createConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    const confettiCount = CONFIG.effects.confettiCount;
    const confetti = [];
    const colors = ['#ff1493', '#ff69b4', '#ffc0cb', '#ff6b9d', '#c86dd7', '#9370db'];

    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 8 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    // Tạo các mảnh confetti
    for (let i = 0; i < confettiCount; i++) {
        confetti.push(new ConfettiPiece());
    }

    // Animation loop
    let animationFrame;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach(piece => {
            piece.update();
            piece.draw();
        });

        animationFrame = requestAnimationFrame(animate);
    }

    animate();

    // Dừng animation sau thời gian cấu hình
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, CONFIG.effects.confettiDuration);
}
