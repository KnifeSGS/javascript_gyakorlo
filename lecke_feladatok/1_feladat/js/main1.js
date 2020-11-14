'use strict';

let handleClick = document.querySelectorAll('.button');
handleClick.forEach((button) => button.addEventListener('click', (event) => console.log(event.target.innerHTML)));
