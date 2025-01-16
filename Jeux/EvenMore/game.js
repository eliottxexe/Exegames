import { bird } from 'bird.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const gameOverText = document.getElementById('gameOverText');
const startAudio = document.getElementById('startAudio');

let gameRunning = false;
let score = 0;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameRunning) {
        bird.jump();
    }
});

function drawGameObjects() {
    bird.draw();
    pipes.forEach(pipe => pipe.draw());
    items.forEach(item => item.draw());
}

function startGame() {
    startAudio.play();
    startButton.style.display = 'none';
    canvas.style.display = 'block';
    gameRunning = true;
    gameLoop();
}

function restartGame() {
    score = 0;
    gameRunning = true;
    gameOverText.style.display = 'none';
    restartButton.style.display = 'none';
    gameLoop();
}

function endGame() {
    gameRunning = false;
    gameOverText.style.display = 'block';
    restartButton.style.display = 'inline-block';
}

function gameLoop() {
    if (gameRunning) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGameObjects();
        updateGameObjects();
        requestAnimationFrame(gameLoop);
    }
}
