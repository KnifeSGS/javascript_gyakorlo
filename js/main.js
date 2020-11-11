'use strict';

// 1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// legkisebb elemét!

const arrTest = [24, 46, 10, 57, 5, 91];

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

// 7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb 
// harmadik legnagyobb elemét!

// 8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú 
// elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, 
// egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj 
// lineáris keresést!

function container(tomb) {
    let contain = false;
    for ( let i = 0; i < tomb.length && contain == false; i += 1) {
        if (tomb[i] == 23) {
            contain = true
        }
    }
    console.log('8. ' + contain)
}

container(arrTest);

// 9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat 
// tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! 
// Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

// 10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó 
// tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor 
// tartalmazza a 23-as számot!

// 11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem 
// ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat 
// tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!

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