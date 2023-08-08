function findPrimeNumber(arr) {
    if (!Array.isArray(arr)) {
        return 'please provide valid array of number';
    } else {
        let primes = [];
        for (let item of arr) {
            if (item > 1) {
                let isPrime = true;

                for (let i = 2; i < item; i++){
                    if (item % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime === true) {
                    primes.push(item)
                }
            }
        }
        return primes;
    }
}

let numbers = [2, 23, 53, 4, 3, 7];
console.log(findPrimeNumber(numbers));