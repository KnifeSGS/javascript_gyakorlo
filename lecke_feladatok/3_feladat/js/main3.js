'use strict';

let myData = {
    firstname: 'Laszlo',
    age: 39
};

let personDataLog = ({firstname = 'Joe', lastname = 'Doe', age = 33} = {}) => {console.log('My Name is '+ firstname +', '+ lastname +'. '+'I am '+ age +' years old.')};