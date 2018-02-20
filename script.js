function randomNumber() {
    const max = 6;
    const min = 1;
    return Math.round(Math.random() * (max - min)) + min;
}

function addDotes() {
    tile.style.transform = `rotate(0deg) scale(0.7)`;
    speedInput.value = 0.1;
    tileSize.value = 1;
    tile.style.transition = speedInput.value + 's';

    const topHalf = document.querySelector('.top');
    const bottomHalf = document.querySelector('.bottom');


    const topValue = randomNumber();
    const bottomValue = randomNumber();

    topHalf.dataset.dots =  String(topValue);
    bottomHalf.dataset.dots = String(bottomValue);
}


const reset = document.querySelector('.reset');
reset.addEventListener('click', addDotes);

let transform = {
    rotate: 0,
    scale: 0.7
};
let degrees = 0;
function rotateTile() {
    //deg = ;
    degrees += +this.dataset.rotate;

    transform.rotate = degrees;
    console.log(transform);
    tile.style.transform = `rotate(${transform.rotate}deg) scale(${transform.scale})`;
}

const tile = document.querySelector('.tile');
const rotateButtons = document.querySelectorAll('.btn[data-rotate]');
rotateButtons.forEach(button => button.addEventListener('click', rotateTile));

function changeSpeed(e) {
    tile.style.transition = 1/e.target.value + 's';
}
const speedInput = document.querySelector('.rotation-speed');

speedInput.addEventListener('change', changeSpeed);
//speedInput.addEventListener('mousemove', changeSpeed);

function changeSize(e) {
    transform.scale = e.target.value;
    tile.style.transform = `rotate(${transform.rotate}deg) scale(${transform.scale})`;
}
const tileSize = document.querySelector('.tile-size');
tileSize.addEventListener('change', changeSize);
//tileSize.addEventListener('mousemove', changeSize);
