let obj = {
    name: "murad",
    age: 26,
    job: true,
}

function getMyDetails(myObj) {
    if (typeof myObj !== 'object') {
        return 'please provide a valid object';
    } else {
        let name = myObj.name || 'nai';
        let age = myObj.age || 'nai';
        let job = myObj.job || 'nai';
        let bou = myObj.bou || 'nai';
        return 'amar nam ' + name + '. amar age ' + age + '. job ' + job + '. amar bou ' + bou + '.';
    }
}

console.log(getMyDetails(obj));
