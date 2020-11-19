/* console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9); */

/* 
for (ciklusváltozó = kezdőérték; feltétel; léptetés) {
    ciklusmag;
} 
*/

for (let i = 1; i < 10; i += 1) {
    console.log(i);
}

/* 
ciklusváltozó = kezdőérték;
while (feltétel) {
    ciklusmag;
    léptetés;
} 
*/

let i = 1;
while (i < 10) {
    console.log(i);
    i += 1;
}

/* 
ciklusváltozó = kezdőérték;
do {
    ciklusmag;
    léptetés;
} while (feltétel) 
*/

i = 1000;
do {
    console.log(i);
    i += 1;
} while (i < 10)


/*
for .. in

*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

for (const key in person) {
    // console.log(key);
    if(person.hasOwnProperty(key)){
        console.log(key, ':', person[key])
    }
}

for(const key of Object.keys(person)) {
    console.log(key, ':', person[key])
}

// for..in kulcsokon megy végig, for..of értékeken megy végig


const arr = [1, 2, 3, 4, 5, 6, 7]
arr[1000] = 1000;
/* 
for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
} 
nem jó mert 1000szer lefut
*/
/* 
for (const value of arr) {
    console.log(value);

}
szintén ugyanaz a hiba
 */
for (const key in arr) {
    if (arr.hasOwnProperty(key)) {
        console.log(arr[key]);
    }
}
