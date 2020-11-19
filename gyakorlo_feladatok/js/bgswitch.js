'use strict';

(function activateButtons() {
    const colors = document.querySelectorAll('.switcher__colors');
    const target = document.querySelector('body')
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].addEventListener('click', (event) => {
            target.style.backgroundColor = event.target.textContent;
        })
    }
})();
