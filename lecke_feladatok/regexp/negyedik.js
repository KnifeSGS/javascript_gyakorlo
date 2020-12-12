'use strict';

const Validator = {
    patterns:{
        visa: /^(\d{4} ){3}\d{4}$/,
        ip: /^(\d{1,3}\.){3}\d{1,3}$/,
        mac: /^([0-9a-f]{2}([\.:-])){5}[0-9a-f]{2}$/i,
    },
    validate(text, type) {
        return text.match(this.patterns[type]) ? true : false;
    }
}

console.log(Validator.validate('1234 5678 1234 5678', 'visa'));
console.log(Validator.validate('192.168.0.1', 'ip'));
console.log(Validator.validate('D0-17-C2-D0-19-B0', 'mac'));