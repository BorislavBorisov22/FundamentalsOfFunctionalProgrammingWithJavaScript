const R = require('rambda');

const users = [{
    id: 1,
    name: 'somename'
}, {
    id: 2,
    name: 'someothername'
}];

const byId = (id) => {
    return (item) => {
        return item.id === id;
    };
};

const targetUser = users.find(byId(2));
console.log(targetUser);

// using rambdas currying to replicate the above behaviour
const byIdWithRambda = R.curry((id, item) => {
    return item.id === id;
});

const targetUserWithRambda = users.find(byIdWithRambda(2));
console.log(targetUserWithRambda);

const add = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    };
};

const addWithRambda = R.curry((a, b, c) => {
    return a + b + c;
});

const sum = add(1)(2)(3);
const sumWithRambda = addWithRambda(1)(2)(3);

console.log(sum);
console.log(sumWithRambda);