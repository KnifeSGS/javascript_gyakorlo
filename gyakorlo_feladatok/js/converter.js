'use strict';

const feet = document.querySelector('.converter__feet');
const inch = document.querySelector('.converter__inch');
const result = document.querySelector('.converter__result');
const button = document.querySelector('.converter__btn');


function calcCentimeter() {
    const feetValue = parseInt(feet.value);
    const inchValue = parseInt(inch.value);
    if (isNaN(feetValue) || isNaN(inchValue)) {
        result.innerText = 'Ez nem szám!';
    } else if (inchValue < 0 || feetValue < 0) {
        result.innerText = 'Kérem pozitív számot adjon meg!';
    } else if (inchValue > 12) {
        result.innerText = 'Az inch értéke 0 és 12 között lehet';
    } else {
        let resultValue = 2.54 * ((feetValue * 12) + inchValue);
        return(result.innerText = resultValue + ' cm');
    }
}

(function buttonCLick() {
    button.addEventListener('click', calcCentimeter)
})()

