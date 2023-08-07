// checking leapYear
function isLeapYear(year) {
  var remainder = year % 4;
  if (remainder === 0) {
    console.log(year, "is a leapYear");
  } else {
    console.log(year, "is not a leapYear");
  }
}
isLeapYear(1900);

// ------------

// identify the leapYear from array list
// first way to get leap year

function getLeapYear(leapYearList) {
  for (var i = 0; i < leapYearList.length; i++) {
    var element = leapYearList[i];
    if (element % 4 === 0) {
      console.log(element, "is a leap year");
    } else {
      console.log(element, "is not a leap year");
    }
  }
}

var leapYearList = [2023, 2024, 2025,2028,2030];
getLeapYear(leapYearList);

// second way to get leap year and store it into array
var leapYear = [];
function getLeapYears(leapYearLists) {
  for (var i = 0; i < leapYearLists.length; i++) {

    var element = leapYearLists[i];
    if (element % 4 === 0) {
      leapYear.push(element + " is a leap year");
    } else {
      leapYear.push(element + " is not a leap year");
    }
  }
}

var leapYearLists = [2000, 2020, 1997, 1952];
getLeapYears(leapYearLists);
console.log(leapYear);
