'use strict';

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);

const handlePromises = async (...promises) => {
    return Promise.all(promises)
        .catch( e => new Error('Promise Error in handlePromises') );
};

handlePromises(p1, p2, p3).then(console.log);

