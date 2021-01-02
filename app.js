function activateColor () {

const redBtn = document.querySelector(".red-btn");
redBtn.addEventListener('click', (e) => {
    redBtn.style.backgroundColor = "red";
})
const blueBtn = document.querySelector(".blue-btn");
blueBtn.addEventListener('click', (e) => {
    blueBtn.style.backgroundColor = "blue";
})
const greenBtn = document.querySelector(".green-btn");
greenBtn.addEventListener('click', (e) => {
    greenBtn.style.backgroundColor = "green";
})
const yellowBtn = document.querySelector(".yellow-btn");
yellowBtn.addEventListener('click', (e) => {
    yellowBtn.style.backgroundColor = "yellow";
})
const orangeBtn = document.querySelector(".orange-btn");
orangeBtn.addEventListener('click', (e) => {
    orangeBtn.style.backgroundColor = "orange";
})

}

activateColor();

