function mindGame(number) {
    if (typeof number !== 'number') {
        return 'provide a valid number'
    } else if (number <= 0) {
        return 'provide a positive number'
    } else {
        let result = (((number * 3) + 10) / 2) - 5;
        return result;
    }
}
console.log(mindGame(5));