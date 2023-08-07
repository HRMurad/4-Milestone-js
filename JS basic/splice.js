let numbers = [12, 34, 31, 56, 24, 22, 64];
let partial = numbers.splice(2, 4);
console.log(partial);
// [ 31, 56, 24, 22 ]
console.log(numbers);
// [ 12, 34, 64 ]