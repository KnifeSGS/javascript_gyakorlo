'use strict';

const dataFromJSON = `[
    {"firstName":"Jane","lastName":"Doe"},
    {"firstName":"Jack","lastName":"Doe"},
    {"firstName":"Violet","lastName":"Doe"},
]`;
let runs = 0;
const getServerData = (url, timer, counter) => {
    runs += 1;
    try {
        const user = JSON.parse(url);
        for (let i = 0; i < user.length; i += 1) {
            if (!user[i].firstName || !user[i].lastName) {
                console.log('hiba: ', user[i]);
                throw new ReferenceError('Missing something');
            } else {
                return user;
            }
        }
        // return user;
    } catch (error){
        if (error instanceof ReferenceError) {
                const user = JSON.parse(localStorage.getItem('userList'));
                console.log('Server is offline. Local data used.');
                return user;
        } else if (error) {
            if (localStorage.getItem('userList') == null) {
                console.log('No data available');
                if (runs <= counter) {
                    const interval = setInterval(getServerData, timer);
                    return interval
                } else {
                    clearInterval();
                    runs = 0;
                    return console.log('Final countdown')
                }
            } else {
                const user = JSON.parse(localStorage.getItem('userList'));
                console.log('Server is offline. Local data used.');
                return user;
            }
        } 
    } finally {
        console.log(runs);
    }
};



document.querySelector('.btn').addEventListener('click', function () {
    fillData(getServerData(dataFromJSON, 2000, 5))
})

const fillData = (data) => {
    let container = document.querySelector('.container')
    container.textContent = '';
    for (let row of data) {
        let div = createAnyELement('div')
        for (let k in row) {
            let p = createAnyELement('p')
            p.textContent = row[k];
            div.appendChild(p)
        }
        container.appendChild(div)
    }
    localStorage.setItem('userList', JSON.stringify(
        data
    ))
};

const createAnyELement = (name, attributes) => {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes(k));
    }
    return element;
}