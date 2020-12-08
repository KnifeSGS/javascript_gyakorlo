'use strict';

const getServerData = (url) => {
    let fetchInit = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };
    return fetch(url, fetchInit).then(
        data => data.json(),
        err => console.error(err)
    )
}

export const pushToDisplay = () => {
    document.querySelector('.btn').addEventListener('click', function() {
    getServerData('http://localhost:3000/users').then(
        data => fillData(data)
    )
})
}

pushToDisplay();

const fillData = (data) => {
    let container = document.querySelector('.container')
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