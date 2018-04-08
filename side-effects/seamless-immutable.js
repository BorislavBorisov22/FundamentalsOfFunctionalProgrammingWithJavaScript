const Immutable = require('seamless-immutable');
const arr = Immutable(['totally', 'immutable']);

arr[1] = 'mutated';
console.log(arr[1]); // should stay with value 'immutable'

const user = {
    id: 1,
    name: 'someuser'
};

const immutableUser = Immutable(user);
immutableUser.name = 'newname';

console.log(immutableUser); // should stay with value 'someuser'