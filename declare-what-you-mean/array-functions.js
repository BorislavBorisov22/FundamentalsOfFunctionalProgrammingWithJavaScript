const users = [{
    id: 1,
    name: 'John',
    approved: true
}, {
    id: 2,
    name: 'Smith',
    approved: true
}, {
    id: 3,
    name: 'Bob',
    approved: true
}, {
    id: 4,
    name: 'Alice',
    approved: true
}];

const user = users.find(u => u.name.includes('A'));
const allApproved = users.every(u => u.approved);
const anyApproved = users.some(u => u.approved);
const onlyApproved = users.filter(u => u.approved);
const ids = users.map(u => u.id);

const numbers = [1, 2, 3, 4, 43, 4];
const sum = numbers.reduce((currSum, curr) => currSum + curr, 0);