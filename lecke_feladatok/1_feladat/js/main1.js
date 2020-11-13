'use strict';

let buttonClick = document.querySelector('.button');

function handleClick(){
    buttonClick.addEventListener('click', function() {
        alert('hello');
    })
}

handleClick();
/* buttonCLick.onclick = function() {
    alert('Hello');
}; */

/* buttonClick.addEventListener('click', function() {
    alert('hello')
}) */
