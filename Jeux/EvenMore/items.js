class Item {
    constructor() {
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * (canvas.height - 100)) + 50;
        this.width = 30;
        this.height = 30;
        this.type = Math.random() < 0.01 ? 'goat' : 'point';
        this.color = this.type === 'point' ? 'yellow' : null;
    }

    draw() {
        if (this.type === 'goat') {
            ctx.drawImage(goatImage, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    update() {
        this.x -= 5;
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
