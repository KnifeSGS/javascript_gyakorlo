'use strict';

import { localDB } from "../moduls/db";

// Read a json

const namesJson = localStorage.getItem('names');
const names = JSON.parse(namesJson);

try {
    names.forEach(element => {
        console.log(element);   
    });

} catch (error) {
    console.error('An error: ', error)
}

console.log('done');