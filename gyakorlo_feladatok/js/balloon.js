'use strict';

const colors = document.querySelectorAll('.balloon__colors');
const win = document.querySelector('.balloon__win');
const balloons = document.querySelectorAll('.balloon__buttons')
let popCounter = 0;

(function popBalloon() {
    mouseOver();
    mouseLeave();
}) ();

function mouseOver() {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].addEventListener('mouseover', (event) => {
            event.target.classList.add('balloon--popTarget');
            countingPops();
        })
    }
};

function countingPops() {
    popCounter += 1;
    if (popCounter >= 25) {
        for (let k = 0; k < balloons.length; k += 1) {
            balloons[k].classList.add('disappear');
        }
            win.classList.add('emerge');
    }
};

function mouseLeave() {
    for (let j = 0; j < colors.length; j += 1) {
        colors[j].addEventListener('mouseleave', (event) => {
            event.target.classList.add('disappear');
        })
    }
};