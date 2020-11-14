'use strict';

let dataObj = {
    firstname: 'John',
    lastname: 'Doe',
    age: 33
};

let myData = {
    firstname: 'Laszlo',
    age: 39
};

let personDataLog = (data = dataObj) => {console.log('My Name is '+ data['firstname'] +', '+ data['lastname'] +'. '+'I am '+ data['age'] +' years old.')};