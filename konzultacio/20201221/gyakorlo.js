'use strict';

/* const getFetchData = (url) => {
    return fetch(url)
        .then(response => {
            if (response.status > 399) {
                throw new Error('Request error');
            }
            return response.json();
        })
        .catch( err => Promise.resolve([]) );
    }; */

const getFetchData = async (url) => {
    let data = [];
    try {
        const response = await fetch(url);
        if (response.status > 399) {
            throw new Error('Request error')
        }
        data = await response.json();
    } catch (e) {
        console.error('Error in request', e);
    } finally {
        return data;
    }
}

getFetchData('https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-16.epl-stats.json')
    .then(
        data => console.log(data)
    );

console.log(object);


// 
const btn = document.createElement('button');
const evHandler = (ev) => {
    console.log(ev);
};
btn.addEventListener('click', evHandler)