class Enemy {
    constructor() {
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * (canvas.height - 100)) + 50;
        this.width = 40;
        this.height = 40;
        this.speed = 2;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.x -= this.speed;
    }

    offScreen() {
        return this.x < -this.width;
    }

    checkCollision(bird) {
        return bird.x < this.x + this.width &&
            bird.x + bird.width > this.x &&
            bird.y < this.y + this.height &&
            bird.y + bird.height > this.y;
    }
}
