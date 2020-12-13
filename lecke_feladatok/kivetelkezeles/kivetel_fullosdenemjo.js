'use strict';

const jsonData = [
    {
        "firstName": "John",
        "lastName": "Doe"
    },
    {
        "firstName": "Jane",
        "lastName": "Doe"
    },
    {
        "firstName": "Jack",
        "lastName": "Doe"
    },
    {
        "firstName": "Violet",
        "lastName": "Doe"
    }
];

const jsonDataString = JSON.stringify(jsonData);

const dataFromJSON = `[
    {"firstName":"Jane","lastName":"Doe"},
    {"firstName":"Jack","lastName":"Doe"},
    {"firstName":"Violet","lastName":"Doe"}
]`;
/* const dataFromJSON = `
    {"firstName":"Jane","lastName":"Doe"}
`; */

let runs = 0;

const getServerData = (url, time, counter) => {
    // const interval = setInterval(() => {
        runs += 1;
        // if (runs <= counter) {
            try {
                const user = JSON.parse(url);
                for (let i = 0; i < user.length; i += 1) {
                    if (!user[i].firstName || !user[i].lastName) {
                        console.log('hiba: ', user[i]);
                        throw new ReferenceError('Missing something');
                    } 
                    else {
                        console.log('ok: ', user[i]);
                        // return user[i];
                    }
                }
                // fillData(user);
                return user;
            } catch (error) {
                if (error instanceof ReferenceError) {
                    try {
                        const user = JSON.parse(localStorage.getItem('userList'));
                        if (user === null) {
                            throw new ReferenceError('Missing db')
                        } else {
                            console.log('Server is offline. Local data used.');
                        }
                        return user;
                    } catch (error) {
                        if (error instanceof ReferenceError) {
                            console.log('No data');
                        }
                    }
                } else if (error instanceof SyntaxError) {
                    console.log('Gubanc van: ', error.name)
                }
            } finally {
                
                console.log(runs);
            }
        // } else {
            // clearInterval(interval)
            // return console.log('Final countdown');
        // }
    // }, time)
};

document.querySelector('.btn').addEventListener('click', function () {
    fillData(getServerData(dataFromJSON, 5000, 10))
    // getServerData(dataFromJSON, 5000, 10)
});

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