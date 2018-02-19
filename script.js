function randomNumber() {
    const max = 6;
    const min = 1;
    return Math.round(Math.random() * (max - min)) + min;
}

function addDotes() {
    const topHalf = document.querySelector('.top');
    const bottomHalf = document.querySelector('.bottom');


    const topValue = randomNumber();
    const bottomValue = randomNumber();

    topHalf.dataset.dots =  String(topValue);
    bottomHalf.dataset.dots = String(bottomValue);
    console.log(topHalf.dataset.dots)
}









/*const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {

});*/
