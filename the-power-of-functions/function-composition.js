const R = require('rambda');

// simple composition of functions example
const difference = (a, b) => {
    return a - b;
};

const abs = (number) => {
    return Math.abs(number);
};

const absoluteDifference = (a, b) => {
    return abs(difference(a, b));
};

const isEmptyString = R.pipe(
    R.defaultTo(''),
    R.trim,
    R.propEq('length', 0)
);

console.log(isEmptyString('abc'));