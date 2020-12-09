'use strict';

(function() {
    //Elemek kiválasztása
    const clock = document.querySelector('.clock');
    const btnGroup = document.querySelector('.btn-group');
/*     const playBtn = btnGroup.querySelector('.timer-start');
    const pauseBtn = btnGroup.querySelector('.timer-pause');
    const resetBtn = btnGroup.querySelector('.timer-reset'); */
    // előre megkeressük az elemeket, hogy a js lassúsága ne befolyásolja az eredményt

    // előző helyett kattintáskezelő függvény
    const clockHandlerClick = (ev) => {
        let btn = null;
        if (ev.target.classList.contains('fa')) {
            btn = ev.target.parentElement;
        } else {
            btn = ev.target;
        }

        const btnClass = btn.className.split('-').pop();
        switch(btnClass) {
            case 'start': isTiming = true;
                break;
            case 'pause': isTiming = false;
                break;
            case 'reset':
                currentTime = 0;
                showTime();
                break;
        }
    };
    
    //Események beállítása
    let isTiming = false;
    let currentTime = 0;
    btnGroup.addEventListener('click', clockHandlerClick)
/*     playBtn.addEventListener('click', () => isTiming = true);
    pauseBtn.addEventListener('click', () => isTiming = false);
    resetBtn.addEventListener('click', () => {
        currentTime = 0;
        showTime()
    }); */
    
    //Idő megjelenítése
    const showTime = () => {
        let minutes = Math.floor(currentTime / 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let seconds = currentTime % 60
        seconds = seconds < 10 ? '0' + seconds : seconds;
        clock.textContent = `${minutes}:${seconds}`;
    }

    //idő frissítése
    setInterval(() => {
        if (!isTiming) {
            return;
        }
        currentTime += 1;
        showTime();
    }, 1000);

})();