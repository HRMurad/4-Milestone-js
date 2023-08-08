// checking a number which is integer or nor and make it.
// valid

function isInteger(number) {
    if (typeof number !== 'number') {
        return 'please provide a valid number'
    } else {
         if (number % 1 === 0) {
        return true;
        } else {
       return false;
        }
    }
}
console.log(isInteger(12));

