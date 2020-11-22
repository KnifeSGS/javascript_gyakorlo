'use strict';

// Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat 
// tartalmazó tömböt!(Input ellenőrzést nem kell végezni.)
// A függvény szorozza meg tömbelemek értékét 1.27 - el, majd pedig térjen 
// vissza az elemek összegével!

const egeszSzamosTomb = [123, 456, 789] 

const afaOsszesito = arr => {
    const sumAfasTomb = arr
    .map(item => item * 1.27)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
    return sumAfasTomb;
};

console.log(afaOsszesito(egeszSzamosTomb));

