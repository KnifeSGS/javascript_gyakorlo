'use strict';

// Promiseok láncolása
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(2), 2000)
        })
    })
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(3), 3000)
        })
    })
    .then((result) => {
        console.log(result);
    })

// all() metódus, csak akkor fut then ágra ha mindegyik promise teljesült
/* const cat = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            sound: 'miau',
            loyal: false
        })
    }, 3000)
})

const dog = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            sound: 'vau',
            loyal: true
        })
    }, 6000)
})

Promise
    .all([cat, dog])
    .then ((results) => {
        const [cat, dog] = results;
        console.log(cat, dog);
    })
    .catch((error) => {
        console.log(error);
    }) */

// allSettled() metódus, ezzel akkor is then ágra futunk ha egyik promise nem teljesült
const cat = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            sound: 'miau',
            loyal: false
        })
    }, 3000)
});

const dog = new Promise((resolve) => {
    reject('Promise error')
});

Promise
    .allSettled([cat, dog])
    .then((results) => {
        const [cat, dog] = results;
        console.log(cat, dog);
    })
    .catch((error) => {
        console.log(error);
    })


// race() metódus, sorban amelyik véget ér végrehajtja, nem várja be mindet mint az all
const promises = [
    new Promise((resolve, reject) => { setTimeout(resolve, 3000, '3000HUF') }),
    new Promise((resolve, reject) => { setTimeout(resolve, 2000, '2000HUF') }),
    new Promise((resolve, reject) => { setTimeout(resolve, 1000, '1000HUF') }),
    new Promise((resolve, reject) => { setTimeout(resolve, 4000, '4000HUF') }),
];

Promise
    .race(promises)
    .then(console.log)


// thenable objektum
const thenable = {
    age: 30,
    then(resolve, reject) {
        setTimeout(() => resolve(this.age * 2), 1000);
    }
};

Promise
    .resolve('Success')
    .then((result) => {
        console.log(result);
        return thenable;
    })
    .then((value) => console.log(value))


// xmlhttptrequest elavult:
/* function request(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}
 
function callback(result) {
    const users = JSON.parse(result);
    console.log(users.users);
}
 
request('./data.json', callback);
*/

// fetch API
const result = fetch('./data.json', fetchOptions)
result
    .then((data) => data.json())
    .then((data) => console.log(data.users))

// opciók megadása fetchhez

const fetchHeaders = new Headers({
    'Content-Type' : 'application/json'
})
// vagy
/* const fetchHeaders = new Headers([
    ['Content-Type', 'application/json']
]) */

const fetchOptions = {
    method: 'GET',
    headers: fetchHeaders,
    mode: 'cors',
    cache: 'no-cache'
}