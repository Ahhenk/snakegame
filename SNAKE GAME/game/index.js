import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate } from './Snake/index.js';

// const gameboard = document.getElementById.getElementById('game-board');

let lastTimeRender = 0;

//current time -> miliseconds 
function main(currentTime) {

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = ( currentTime - lastTimeRender)

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastTimeRender = currentTime;

    console.log(lastTimeRender);

    update ();

    draw();

}   

function update() {
    snakeUpdate();
};

function draw() {
    snakeDraw();

};

window.requestAnimationFrame(main)