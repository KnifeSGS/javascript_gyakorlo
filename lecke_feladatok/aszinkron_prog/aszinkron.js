'use strict';

function request(url, callback) {
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
    try {
        const users = JSON.parse(result);
        console.log(users.users);
    } catch (error) {
        console.error('This was the problem: ', error.name);
    }
}
request('./users4.json', callback);
request('./users2.json', callback);
request('./users3.json', callback);