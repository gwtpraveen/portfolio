const canvasAnimation = () =>  {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArrry = [];
    
    class Particle {
        constructor(x, y, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.speedX = speedX;
            this.speedY = speedY;
            this.size = 5;
            this.color = "#003eaa";
        }
    
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    
        update() {
            if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                this.speedX *= -1;
            }
            if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                this.speedY *= -1;
            }
            this.x += this.speedX;
            this.y += this.speedY;
            this.draw();
        }
    }
    
    const init = () => {
        particleArrry = [];
        for (let i = 0; i < 75; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let speedX = (Math.random() * 1) - .5;
            let speedY = (Math.random() * 1) - .5;
            particleArrry.push(new Particle(x, y, speedX, speedY));
        }
    };
    
    const animate = () => {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particleArrry.length; i++) {
            particleArrry[i].update();
            for (let j = 0; j < particleArrry.length; j++) {
              let dx = particleArrry[i].x - particleArrry[j].x;
              let dy = particleArrry[i].y - particleArrry[j].y;
              let distanse = Math.sqrt(dx * dx + dy * dy);
              if (distanse < 150 && distanse > 15) {
                ctx.beginPath();
                ctx.strokeStyle = "#003eaa54";
                ctx.moveTo(particleArrry[i].x, particleArrry[i].y);
                ctx.lineTo(particleArrry[j].x, particleArrry[j].y);
                ctx.stroke();
                ctx.closePath();
              }
            }
        }
    };
    
    init();
    animate();
    
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
}

export default canvasAnimation;