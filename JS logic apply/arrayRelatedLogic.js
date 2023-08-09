// getting sum of index step by step from array
function getSumOfArray(myLists) {
var sum = 0;
  for (var i = 0; i < myLists.length; i++) {
      sum = sum + myLists[i];
    console.log(sum);
  }
  return sum;
}
var myLists = [3, 5, 7, 8, 12, 23, 11];
getSumOfArray(myLists);
// ans: 3
// 8
// 15
// 23
// 35
// 58
// 69

// getting just sum from an array
var myList = [3, 5, 7, 8, 12, 23, 11];
var sum = 0;

for (var i = 0; i < myList.length; i++) {
    sum += myList[i];
}
console.log("Sum:", sum);
// ans:Sum: 69

// get odd numbers of an array
var oddNumbers = [];
function getSumOfOddNumbers(arrayLists) {
  for (var i = 0; i < arrayLists.length; i++) {
    var element = arrayLists[i];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}
var arrayLists = [33, 42, 44, 22, 56, 75, 65, 46];
var oddNumbers = getSumOfOddNumbers(arrayLists);
console.log('Odd numbers are:',oddNumbers);
getSumOfOddNumbers(arrayLists);

// find the longest number of an array
var longestNumber = [33, 42, 44, 22, 56, 75, 65, 46];
console.log('The longest number:', Math.max(...longestNumber));

// find the longest length item from an array
function getTallest(friends) {
  let friendsLength = 0;
  let tallestFriend = '';
    for (let i = 0; i < friends.length; i++){
        let element = friends[i];
        if (element.length > friendsLength) {
          friendsLength = element.length;
          tallestFriend=element
        }
    }
    return tallestFriend;
}
let friendsList = ['Rahim', 'Salam', 'Borkot', 'Hawladerrr'];
console.log('The longest.length friend is:', getTallest(friendsList));

// find just positive number till the negative one
let arrays = [12, 44, 52, 45, -24, 235, 346, 22];
let positiveArray = [];
for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      positiveArray.push(arrays[i]);
    } else {
      break;
    }
}

console.log("Positive elements:", positiveArray);

// find the even positive number till the negative number
let arr = [123, 23, 34, 546, -234, 235, 346];
let positiveArr = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        positiveArr.push(arr[i]);
    } else if (arr[i] < 0) {
        break;
    }
}
console.log('Even positive number:', positiveArr);

// factorial: 1-5
function factorial(numbers) {
  var sum = 1;
  for (var i = 1; i <= numbers; i++) {
      sum = sum * i;
      console.log('Normal way:',i)
  }
  return sum;
}

var addSum = factorial(5);
console.log('The factorial of 1-5 is :', addSum);

// factorial reverse
function factorialReverse(number) {
  var sum = 1;
  for (var i = number; i >= 1; i--) {
    sum = sum * i;
    console.log('Reverse way:',i);
  }
  return sum;
}
var addSum = factorialReverse(5);
console.log("The factorial of 1-5 is:", addSum);