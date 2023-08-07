let x = 5;
let y = 7;
console.log(x, y);
let xx = x;
x = y;
y = xx;
console.log(x, y);

// ------------

let a = 2;
let b = 3;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);