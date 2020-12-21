'use strict';

const url = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-18.epl-stats.json';

/* fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
 */
let counter = 0;
const si = setInterval(() => {
    counter += 1;
    console.log(counter);
}, 5);

fetch(url)
    .then(response => response.json())
    .then(
        data => {
        console.log(data);
        clearInterval(si)
    })