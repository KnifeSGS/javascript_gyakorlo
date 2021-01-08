'use strict';

const countryStates = {
    'Hungary': [
        'Bács-Kiskun',
        'Baranya',
        'Békés',
        'Borsod-Abaúj-Zemplén',
        'Csongrád-Csanád',
        'Fejér',
        'Győr-Moson-Sopron',
        'Hajdú-Bihar',
        'Heves',
        'Jász-Nagykun-Szolnok',
        'Komárom-Esztergom',
        'Nógrád',
        'Pest',
        'Somogy',
        'Szabolcs-Szatmár-Bereg',
        'Tolna',
        'Vas',
        'Veszprém',
        'Zala',
        'Budapest'
    ],
    'USA': [
        'Alabama',
        'Alaszka',
        'Arizona',
        'Arkansas',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Dél-Dakota',
        'Dél-Karolina',
        'Észak-Dakota',
        'Észak-Karolina',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kalifornia',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New York',
        'Nyugat-Virginia',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'Tennessee',
        'Texas',
        'Új-Mexikó',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'Wisconsin',
        'Wyoming'
    ]
}

const country = document.querySelector('#country');
const state = document.querySelector('#state');

function* chooseState(selectedCountry) {
    for (const item of countryStates[selectedCountry]) {
        yield item;
    }
};

const setState = (selectedCountry) => {
        for (let i = 0; i < countryStates[selectedCountry].length; i += 1) {
            console.log(countryStates[selectedCountry][i]);
            let option = document.createElement('option');
            option.textContent = countryStates[selectedCountry][i];
            option.value = countryStates[selectedCountry][i];
            state.add(option)
        }
    
};

const eventHandler = () => {
    state.addEventListener('click', setState())
}

// const items = chooseState("Hungary");
// console.log(items.next().value);
setState('Hungary')