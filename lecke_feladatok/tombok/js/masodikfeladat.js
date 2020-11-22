'use strict';

const someArray = [123, 456, 789, 'van'];
const primitiveValue = 'van'; 
const goalObject = {
    exists: '',
    index: '' || '-1',
    allElementIsANumber: '',
    someElementIsANumber: ''
};

function objectMaker(arr1, arr2) {
    goalObject.exists = arr1
        .some(item => item === arr2);
    goalObject.index = arr1
        .findIndex(item => item === arr2);
    goalObject.allElementIsANumber = arr1
        .every(item => !isNaN(item));
    goalObject.someElementIsANumber = arr1
        .some(item => isNaN(item));
    return goalObject;
}

console.log(objectMaker(someArray, primitiveValue));


