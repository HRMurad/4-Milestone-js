function findingBadData(arr) {
    if (!Array.isArray(arr)) {
        return 'provide me an array of number'
    } else {
        let badData = 0;
        for (let i = 0; i < arr.length; i++){
            if (typeof arr[i] !== 'number') {
                return 'provide me an array of number'
            } else {
                if (arr[i] < 0) {
                    badData++;
                }
            }
        }
        return badData;
    }
}

let arrays = [2, -5, -7, -13];
console.log(findingBadData(arrays));