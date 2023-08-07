// while loop

// var number = 0;
// while (number < 10) {
//       console.log(number)
//       number++;
// }

// while loop odd

// var number = 0;
// while (number<10) {
//       console.log(number);
//       number = number + 2;
// }

// for loop

// for (var number = 0; number < 10; number++){
//       console.log(number)
// }

// for loop odd
for (var number = 1; number <= 10; number++) {
  console.log(number);
  number = number + 2;
}

// practice

var phonePrice = 10000;
var car = 1;
var sallary = 50000;
var marry = true;

if ((sallary > phonePrice && marry === false) || car >= 2) {
  console.log("biye amar hobe");
} else {
  console.log("biye r holona");
}

// display every elements of an array

var rolls = [12, 23, 43, 57, 4, 47, 47];
for (var i = 0; i < rolls.length; i++) {
  var roll = rolls[i];
  console.log(roll);
}

// break
var publicRolls = [364, 3612, 363, 238];

for (var i = 0; i < publicRolls.length; i++) {
  var publicRoll = publicRolls[i];
  if (publicRoll > 364) {
    break;
  }
  console.log(publicRoll);
}

// continue

var classRolls = [35, 67, 84, 235];
for (var i = 0; i < classRolls.length; i++) {
  var classRoll = classRolls[i];
  if (classRoll > 84) {
    continue;
  }
  console.log(classRoll);
}

// reverse way

var numberList = 10;
while (numberList > 0) {
  console.log(numberList);
  numberList--;
}
