'use strict';

import {setCookie} from './first.js';
import {cookieObject} from './second.js';
import {pushToDisplay} from './third.js';

console.log(setCookie('export1', 'cookieteszt'));
console.log(cookieObject.copyToSession('export1'));
console.log(pushToDisplay());
