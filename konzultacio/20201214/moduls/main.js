'use strict';

import { shuffle } from './utils.js';
import { localDB } from './db.js';

(function() {
    const names = ['Józsi', 'Piri', 'Sanyi'];
    shuffle(names);
    localDB.setItem('todosJozsi', [{text: 'feladat', done: false}]);
    console.log(names);
})();