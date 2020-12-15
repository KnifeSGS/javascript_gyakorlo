'use strict';

const jsonUrl = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-15.epl-stats.json'

/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
        reject('hiba');
    }, 3000)
});

promise1
    .then(
        data => console.log(data),
        error => console.error(error) 
    ) */

console.time('pr')

fetch(jsonUrl).then(
    resp => resp.json(),
    err => console.error(err)
).then(
    data => {
        console.log(data);
        console.timeEnd('pr')
    }
)