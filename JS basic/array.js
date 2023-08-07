// check array index number
var numbers = [22, 43, 53, 25, 77];

console.log(numbers.length)


// identify index number of array

var element = numbers[2];
console.log( element );

// change the fixed array number

numbers[0] = 100;
console.log(numbers);

// find the array position by call fixed number

var position = numbers.indexOf(77);
console.log(position);

// push to add at the end of array

numbers.push(200);
console.log(numbers);

// pop to remove from the last index of array

numbers.pop();

console.log(numbers)