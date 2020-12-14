'use strict';

const testArray = ['egy', 'ketttő', 'három',];

const arrayElements = (array) => {
    return array.every(element => typeof element === 'string')
} 

const toUpperCaseTransformer = (string) => {
    return string.toLocaleUpperCase('hu-HU')
}

let upperCaseArray = [];
const newArrayCreatorWithUpperCaseElements = (array) => {
    return upperCaseArray = array.map(item => toUpperCaseTransformer(item))
}


const promiseArray = (array) => {
    return new Promise((resolve, reject) => {
        if (arrayElements(array)) {
            resolve(console.log(newArrayCreatorWithUpperCaseElements(array)))
        } else {
            reject(console.log('Error: Not all items in the array are strings!'))
        }
    })
}

const promiseArrayABC = (array) => {
    return new Promise((resolve, reject) => {
        if (arrayElements(array)) {
            try {
                resolve(console.log(array.sort()))
            }
            catch (error) {
                console.error('Error: Something went wrong with sorting words.')
            }
        } else {
            reject(console.log('Error: Not all items in the array are strings!'))
        }
    })
}

promiseArray(testArray);
promiseArrayABC(testArray);