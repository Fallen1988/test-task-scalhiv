function randomNumber() {
    const max = 6;
    const min = 1;
    return Math.round(Math.random() * (max - min)) + min;
}

function addDotes(num, half) {
    const dotes = half.querySelectorAll('.dot');
    dotes.forEach(dot => dot.style.visibility = 'hidden');

    dotes.forEach(dot => {
        const number = num;
        if(dot.dataset.key.match(number)) {
            dot.style.visibility = 'visible';
        }
    })
}

function addDot() {
    const dotesUp = document.querySelector('.up');
    const dotesBottom = document.querySelector('.bottom');

    addDotes(randomNumber(), dotesUp);
    addDotes(randomNumber(), dotesBottom);
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', addDot);