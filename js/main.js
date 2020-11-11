'use strict';

// 1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// legkisebb elemét!

const arrTest = [24, 8, 23, 46, 23, 10, 52, 7, 57, 5, 91];
const arrFloat = [654.654, 66.66, 465.46, 6.65, 65.651, 665.46, 4.654]

function getMinElement(tomb) {
    let min = tomb[0];
    for (let i = 1; i < tomb.length; i += 1) {
        if (tomb[i] < min) {
            min = tomb[i];
        }
    }
    console.log('1. ' + min);
}

getMinElement(arrTest);

// 2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// legnagyobb elemét!

function getMaxElement(tomb) {
    let max = tomb[0];
    for (let i = 1; i < tomb.length; i += 1) {
        if (tomb[i] > max) {
            max = tomb[i];
        }
    }
    console.log('2. ' + max);
}

getMaxElement(arrTest);


// 3. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// átlagát!

function getAtlag(tomb) {
    let sum = 0;
    let atl = 0;
    for ( let i = 0; i < tomb.length; i += 1) {
        sum += tomb[i];
    }
    atl = parseInt(sum / tomb.length);
    console.log('3. ' + atl);
}

getAtlag(arrTest);

// 4. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// összegét!

function getSum(tomb) {
    let sum = 0;
    for ( let i = 0; i < tomb.length; i += 1) {
        sum += tomb[i];
    }
    console.log('4. ' + sum);
}

getSum(arrTest);

// 5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// páros elemeinek a számát!

function getParos(tomb) {
    let paros = 0;
    for (let i = 0; i < tomb.length; i += 1) {
        if (tomb[i] % 2 == 0){
            paros += 1;
        }
    }
    console.log('5. ' + paros);
}

getParos(arrTest);

// 6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// második legkisebb elemét!

function bubbleSort(arr) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap)
    return arr;
}

function getSecondSmall(arr, nth) {
    const sortedArr = bubbleSort(arr);
    if (nth > arr.length) {
        return arr[arr.length -1]
    }
    return sortedArr[nth - 1];
}

console.log('6. ' + getSecondSmall(arrTest, 2));

// 7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// harmadik legnagyobb elemét!

function getThirdHighest(tomb) {
    let csere;
    let third;
    do {
        csere = false;
        for (let i = 0; i < tomb.length - 1; i += 1) {
            if (tomb[i] < tomb[i + 1]) {
                let temp = tomb[i];
                tomb[i] = tomb[i + 1];
                tomb[i + 1] = temp;
                csere = true;
            }
        }
    } while (csere)
    third = tomb[2];
    console.log('7. ' + third);
    return tomb;
}

getThirdHighest(arrTest);

// 8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú 
// elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, 
// egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj 
// lineáris keresést!

function searchNumber(tomb, search) {
    for ( let i = 0; i < tomb.length; i += 1) {
        if (tomb[i] === search) {
            return true;
        }
    }
    return false;
}
let result = searchNumber(arrTest, 23);
console.log('8. ' + result);

// 9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat 
// tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! 
// Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

function searchBinary(tomb, keres) {
    bubbleSort(tomb);

    let start = 0;
    let end = tomb.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (tomb[mid] === keres) {
            return true
        } 
        else if (tomb[mid] < keres) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return false;
}

let eredmeny = searchBinary(arrTest, 23) 
console.log('9. ' + eredmeny);

// 10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó 
// tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor 
// tartalmazza a 23-as számot!

/* function searchNumberCounter(arr, num) {
    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i] == 2) {
            counter += 1;
        }
    }
    return counter;
}

console.log('10. ' + searchNumberCounter(arrTest, 23)); */

// 11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem 
// ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat 
// tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!

function sortFloat(arr) {
    bubbleSort(arr);
    return arr;
}

console.log('11. ' + sortFloat(arrFloat))

// 12. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha 
// nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és 
// objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit 
// csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti 
//sorrendbe. Írasd ki a rendezett tömböt!

// 13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A 
// tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be 
// egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). 
// A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, 
// tehát a megfelelő indexű helyre kerüljön be a plusz elem.
// Írasd ki a rendezett tömböt!

// 14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz 
// véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy 
// string következzen! Írasd ki a rendezett tömböt!

// 15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk 
// szét külön egy paros, és paratlan nevezetű tömbbe a páros, és páratlan számokat! 
// Írjuk ki a 2 tömböt!

// 16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön 
// tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és 
// descartes szorzatát. Írassuk ki az új tömböket!