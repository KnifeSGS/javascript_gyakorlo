'use strict';

const feet = parseInt(document.querySelector('.converter__feet'));
const inch = parseInt(document.querySelector('.converter__inch'));
const result = document.querySelector('.converter__result');
const button = document.querySelector('.converter__btn');
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (isNaN(feet) || isNaN(inch)) {
        result.textContent = "Kérem adjon meg valós számot!";
    } else if (feet < 0) {
        result.textContent = "A minimum érték 0";
    } else if ( inch < 0 || inch > 12) {
        result.textContent = "Az érték 0-12 között választható"
    } else {
        let total = (feet*12) + inch;
        result.textContent = '$(total) cm'
        document.querySelector('.converter__feet').value = '';
        document.querySelector('.converter__inch').value = '';
    } 
})

