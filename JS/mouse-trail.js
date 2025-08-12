const canvas = document.getElementById('sparklesCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    moving: false
};

document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.moving = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => (mouse.moving = false), 100);
});

let timeout;

function Sparkle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocityX = (Math.random() - 0.5) * 2;
    this.velocityY = (Math.random() - 0.5) * 2;
    this.opacity = 1;

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
        ctx.closePath();
    };

    this.update = () => {
        this.draw();
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.opacity -= 0.01;
    };
}

const sparkles = [];

function createSparkles() {
    const sparkle = new Sparkle(
        mouse.x,
        mouse.y,
        Math.random() * 3 + 1,
        `hsl(${Math.random() * 240 + 180}, 100%, 80%)`
    ); // Changed hue range to blueish (180-420)
    sparkles.push(sparkle);
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (mouse.moving) {
        createSparkles();
    }

    sparkles.forEach((sparkle, index) => {
        if (sparkle.opacity <= 0) {
            sparkles.splice(index, 1);
        } else {
            sparkle.update();
        }
    });
}

animate();