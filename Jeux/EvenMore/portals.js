class Portal {
    constructor() {
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * (canvas.height - 100)) + 50;
        this.width = 50;
        this.height = 100;
        this.image = new Image();
        this.image.src = '../Images/portal.png';
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        this.x -= 5;
    }

    checkCollision(bird) {
        return (
            bird.x < this.x + this.width &&
            bird.x + bird.width > this.x &&
            bird.y < this.y + this.height &&
            bird.y + bird.height > this.y
        );
    }
}
