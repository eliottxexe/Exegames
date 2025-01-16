class Pipe {
    constructor() {
        this.x = canvas.width;
        this.top = Math.floor(Math.random() * (canvas.height / 2)) + 50;
        this.bottom = this.top + 300;
        this.width = 70;
        this.color = 'green';
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, this.bottom, this.width, canvas.height - this.bottom);
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
            (bird.y < this.top || bird.y + bird.height > this.bottom);
    }
}
