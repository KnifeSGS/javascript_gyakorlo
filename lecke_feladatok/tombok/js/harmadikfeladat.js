'use strict';

const stringArray = ['első', 'második', 'harmadik', 'negyedik'];
let listForm = '';

function htmlTemplate(arr) {
    listForm = '<ul>';
    const list = arr
        .forEach(item => listForm += '<li>' + item + '</li>');
    listForm += '</ul>';
    return listForm;
};

document.querySelector('.listDiv').textContent = htmlTemplate(stringArray);