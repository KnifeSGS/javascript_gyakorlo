'use strict';

let popCounter = 0;
(function popBalloon() {
    const colors = document.querySelectorAll('.balloon__colors');
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].addEventListener('mouseover', (event) => {
            console.log(event.target.textContent);
            event.target.style.backgroundColor = 'transparent';
            event.target.style.fontSize = '1rem';
            popCounter += 1;
            console.log(popCounter);
            return(popCounter)
        })
    }   ;

    for (let i = 0; i < colors.length; i += 1) {
        colors[i].addEventListener('mouseleave', (event) => {
            event.target.style.fontSize = '0';
            event.target.removeEventListener('mouseover', function () {
                
            });
        })
    }
})();

(function pops() {
    if (popCounter >= 25) {
        const balloons = document.querySelectorAll('.balloon__colors');
        const win = document.querySelectorAll('.balloon__win');
        console.log('Mind kipukkant!');
        balloons.style.display = 'none';
        win.style.display = 'flex';
    }
})()