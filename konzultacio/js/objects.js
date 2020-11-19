'use strict';

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'learning', 'walking'],
    // sayHi: function () {
    speak(message = 'hello') {
        // console.log(this.firstName + ' ' + this.lastName + 'says: Hi!');
        console.log(this.firstName + ' ' + this.lastName + 'says: ' + message);
    }
};

console.log(person.firstName);
// console.log(person['firstName']);
console.log(person.age);
person.age = 33;
console.log(person.age);
// console.log(person.sayHi());
console.log(person.speak());
person.firstName = 'Jane';
console.log(person.speak('mizu'));
console.log(person.hobbies[0]);

const algebra = {
    arrays: [
        [1,2,3,4,5,6],
        [4,5,6,7,8]
    ],
    unio() {
        return
    },
    intersection() {
        return
    },
    descartes() {
        return
    },
    substraction() {
        return
    },
}

console.log(algebra.arrays[0][0]);