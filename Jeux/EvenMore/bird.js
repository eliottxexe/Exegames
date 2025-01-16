class Bird {
    constructor() {
        this.x = 100;
        this.y = canvas.height / 2;
        this.width = 95;
        this.height = 180;
        this.gravity = 1;
        this.lift = -10;
        this.velocity = 0;
        this.isJumping = false;
        this.isInvincible = false;
        this.hp = 1;
    }

    jump() {
        this.velocity = this.lift;
        this.isJumping = true;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
            this.velocity = 0;
            endGame();
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
            endGame();
        }
    }

    draw() {
        const birdImage = this.isJumping ? birdImage2 : birdImage1;
        ctx.drawImage(this.isInvincible ? goatImage : birdImage, this.x, this.y, this.width, this.height);
    }
}
