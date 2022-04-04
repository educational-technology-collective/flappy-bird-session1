// Save DOM objects to variables
const poles = document.querySelectorAll(".pole");
const gameArea = document.querySelector("#game-area");
const restartBtn = document.querySelector("#restart-btn");

const speed = 2;
let animationReq;

function startGame() {
    reset();
    gameLoop();
}

function gameLoop() {
    updatePoles();
    animationReq = requestAnimationFrame(gameLoop);
}

function updatePoles() {
    // TODO
}

function reset() {
    // TODO
}
cancelAnimationFrame(animationReq);

restartBtn.addEventListener('click', startGame);