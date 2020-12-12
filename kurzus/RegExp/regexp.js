'use strict';

const Validator = {
    patterns:{
        // 3 szám, szóköz, 3 szám, szóköz, 3 szám
        taj: /^(\d{3} ){2}\d{3}$/,
        // hat szám két nagybetű
        id: /^\d{6}[A-Z]{2}$/,
        // egy nagybetű egy kisbetű
        name: /^[A-ZÉÍÖÜÓŐÚÁŰ][a-zíöüóőúéáű]$/
    },
    validate(text, type) {
        return text.match(this.patterns[type]) ? true : false;
    }
}

console.log(Validator.validate('123 456 789', 'taj'));
console.log(Validator.validate('123456DS', 'id'));
console.log(Validator.validate('Áf', 'name'));