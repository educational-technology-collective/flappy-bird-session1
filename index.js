// Save DOM objects to variables
const poles = document.querySelectorAll(".pole");
const gameArea = document.querySelector("#game-area");
const restartBtn = document.querySelector("#restart-btn");

const speed = 2;

function startGame() {
    reset();
    gameLoop();
}

function gameLoop() {
    // TODO
    requestAnimationFrame(gameLoop);
}

function reset() {
    // TODO
}

restartBtn.addEventListener('click', startGame);