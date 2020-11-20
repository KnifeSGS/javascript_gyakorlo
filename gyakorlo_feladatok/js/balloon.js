'use strict';

let popCounter = 0;
(function popBalloon() {
    const colors = document.querySelectorAll('.balloon__colors');
    const win = document.querySelector('.balloon__win');
    const balloons = document.querySelectorAll('.balloon__buttons')
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'transparent';
            event.target.style.fontSize = '1rem';
            popCounter += 1;
            if (popCounter >= 25) {
                for (let k = 0; k < balloons.length; k += 1) {
                    balloons[k].style.display = 'none';
                }
                win.style.display = 'flex';
            }

        })
    };
    
    for (let j = 0; j < colors.length; j += 1) {
        colors[j].addEventListener('mouseleave', (event) => {
            event.target.style.fontSize = '0';
            event.target.removeEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'transparent';
                event.target.style.fontSize = '1rem';
            });
        })
    }
})();
