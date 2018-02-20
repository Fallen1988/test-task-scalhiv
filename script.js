function randomNumber() {
    const max = 6;
    const min = 1;
    return Math.round(Math.random() * (max - min)) + min;
}

function addDotes() {
    tile.transition = 'none !important';
    transform.scale = 0.7;
    transform.rotate = 0;
    tile.style.transform = `rotate(${transform.rotate}deg) scale(${transform.scale})`;
    speedInput.value = 0.7;
    tileSize.value = transform.scale;
    tile.style.transition = speedInput.value + 's';

    const topHalf = document.querySelector('.top');
    const bottomHalf = document.querySelector('.bottom');
    const topValue = randomNumber();
    const bottomValue = randomNumber();

    topHalf.dataset.dots =  String(topValue);
    bottomHalf.dataset.dots = String(bottomValue);
}

let degrees = 0;
let transform = {
    rotate: 0,
    scale: 0.7,
};
function rotateTile() {
    degrees += +this.dataset.rotate;
    transform.rotate = degrees;
    tile.style.transform = `rotate(${transform.rotate}deg) scale(${transform.scale})`;
}

function changeSpeed(e) {
    tile.style.transition = 1/e.target.value + 's';
}

function changeSize(e) {
    transform.scale = e.target.value;
    tile.style.transform = `rotate(${transform.rotate}deg) scale(${transform.scale})`;
}

let lastHalf = '';
function changeType(e) {
    if (!lastHalf) return;
    lastHalf.dataset.dots = String(this.value);
    lastHalf = '';
}

const reset = document.querySelector('.reset');
const tile = document.querySelector('.tile');
const rotateButtons = document.querySelectorAll('.btn[data-rotate]');
const speedInput = document.querySelector('.rotation-speed');
const tileSize = document.querySelector('.tile-size');
const halfs = tile.querySelectorAll('.half');
const tileType = document.querySelector('.tile-type');

reset.addEventListener('click', addDotes);
rotateButtons.forEach(button => button.addEventListener('click', rotateTile));
speedInput.addEventListener('change', changeSpeed);
speedInput.addEventListener('mousemove', changeSpeed);
tileSize.addEventListener('change', changeSize);
tileSize.addEventListener('mousemove', changeSize);
halfs.forEach(half => half.addEventListener('click', function () {
    lastHalf = this}
));
tileType.addEventListener('change', changeType);
