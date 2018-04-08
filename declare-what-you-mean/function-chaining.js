const numbers = [1, 2, 4, 4, 3, 21];

const sum = numbers
    .map(n => n - 1)
    .filter(n => n % 3 === 0)
    .reduce((a, b) => a + b, 0);

console.log(sum);