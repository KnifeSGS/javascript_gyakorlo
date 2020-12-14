'use strict';

// regex101.com

document.querySelector('.register-form').addEventListener('submit', (ev) => {
    ev.preventDefault();

    // Name: 5 char length, only contains letters and space.
    const name = ev.target.querySelector('input[name=name]').value;
    if (!/^[a-űA-Ű ]{5,20}$/.test(name)) {
        alert('Name must be at least 5 maximum 20 char length and contains only letters and space.')
    }

    // check password
    // At least 8 char long, contains a-ű A-Ű 0-9
    const passwordRegex = new RegExp('^[a-űA-Ű0-9]{8,}$', 'g');
    const password = ev.target.querySelector('input[name=password]').value;
    if (!passwordRegex.test(password)) {
        alert('At least 8 char long, contains a-ű A-Ű 0-9')
    }
});