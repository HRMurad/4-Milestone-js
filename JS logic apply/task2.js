function isLgSeven(x) {
    if (typeof x !== 'number') {
        return 'provide a valid number';
    } else {
        let differ = x - 7;
        if (differ < 7) {
            return differ;
        } else {
            return x * 2;
        }
    }
}

console.log(isLgSeven(15));