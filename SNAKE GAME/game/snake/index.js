import { gameboard } from '../Board/index.js'


export const SNAKE_SPEED = 5;

const snakeBody = [
    { x: 11, y: 11},
    { x: 12, y: 11 },
    { x: 13, y: 11 },
]

export function update() {};

export function draw() {

    snakeBody.forEach(segment => {
        //create element
        const snakeElement = document.createElement('div');

        // config css
        snakeElement.classList.add('snake')

        //position
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;

        //append on DOM
        gameboard.appendChild(snakeElement)
    })
};
