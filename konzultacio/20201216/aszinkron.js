'use strict';

// Make a Promise
const myPromise = new Promise ((res,rej) => {
    setTimeout(() => {'Én vagyok a jó királyfi.'}, 2000)
})

myPromise
    .then(
        sentence => console.log(sentence)
    )
    .catch(
        err => console.error(err)
    )