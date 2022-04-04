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
    // Move poles
    let polesCurrentPos = parseFloat(
        window.getComputedStyle(poles[0]).getPropertyValue("right")
    );

    poles.forEach((pole) => {
        pole.style.right = `${polesCurrentPos + speed}px`;
    });
}

function reset() {
    // TODO
}
cancelAnimationFrame(animationReq);

restartBtn.addEventListener('click', startGame);