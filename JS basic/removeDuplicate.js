let numbers = [1, 1, 2, 3, 4, 2, 3, 5, 6, 6, 7, 7];
function removeDuplicate(numbers) {
    let uniqueNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        let numberElement = numbers[i];
        if (uniqueNumbers.includes(numberElement) === false) {
            uniqueNumbers.push(numberElement);
        }
    }
    return uniqueNumbers;
}
let uniqueNumberElements = removeDuplicate(numbers);
console.log(uniqueNumberElements);