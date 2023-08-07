//even or odd select

function isEvenOrOdd(number) {
  var remainder = number % 2;
  if (remainder === 0) {
    console.log(number,"is even");
  } else {
    console.log(number,"is an odd");
  }
}

isEvenOrOdd(135);

// same job by true or false
function checkingEvenOdd(nums) {
  var remainder = nums % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

var resultEvenOdd = checkingEvenOdd(123);
console.log(resultEvenOdd);