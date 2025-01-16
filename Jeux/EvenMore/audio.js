class AudioManager {
    constructor() {
        this.backgroundMusic = new Audio('../../Musiques/flappy_eliott.wav');
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.5;

        this.jumpSound = new Audio('../../Musiques/jump.wav');
        this.gameOverSound = new Audio('../../Musiques/game_over.wav');
        this.portalSound = new Audio('../../Musiques/portal.wav');
    }

    playBackgroundMusic() {
        this.backgroundMusic.play();
    }

    stopBackgroundMusic() {
        this.backgroundMusic.pause();
        this.backgroundMusic.currentTime = 0;
    }

    playJumpSound() {
        this.jumpSound.currentTime = 0;
        this.jumpSound.play();
    }

    playGameOverSound() {
        this.gameOverSound.play();
    }

    playPortalSound() {
        this.portalSound.play();
    }
}
