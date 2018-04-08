const R = require('rambda');

const orders = [
    [1.25],
    [5.00, 10.21],
    [2.00, 0.25]
];

const flattened = R.flatten(orders);

const noneBelow1 = R.none((n) => n < 1, flattened);
const rejected = R.reject(n => n % 2 === 0, flattened);

// omit and pick examples for selecting or removing properties
const user = {
    name: 'somename',
    pass: 'randompass'
};

const withoutPass = R.omit('pass', user);
const onlyPass = R.pick('pass', user);

// path or for omitting endless null pointer properties checks
const users = {
    currentUser: {
        // address: 'someaddress'
    }
}

const targetAdr = R.pathOr('default', ['currentUser', 'address'], users);
console.log(targetAdr);

// projecting objects
const pets = [
    { id: 1, name: 'somename', type: 'cat' },
    { id: 2, name: 'fluffy', type: 'dog' },
    { id: 2, name: 'doge', type: 'dog' }
];