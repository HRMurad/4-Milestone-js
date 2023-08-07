// delete the element from an object
var student = {
  name: "Murad",
  age: 26
}
delete student.age;
console.log('Rest item is:',student);

// find the cheapest phone from this array
let phones = [
    {
        name: 'samsung',
        price:20000,
    },
    {
        name: 'iPhone',
        price:50000,
    },
    {
        name: 'nokia',
        price:15000,
    }
]

function cheapPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        let phone = phones[i]
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

let myCheapestPhone = cheapPhone(phones);
console.log('The cheapest phone is:', myCheapestPhone);

// sum the all phone items
let phoneStore = [
    {
        name: 'samsung',
        price:20000,
    },
    {
        name: 'iPhone',
        price:50000,
    },
    {
        name: 'nokia',
        price:15000,
    }
]

function totalCost(price) {
    let total = 0;
    for (let i = 0; i < price.length; i++) {
        let product = price[i];
        total = total + product.price;
    }
    return total;
}

let cost = totalCost(phoneStore);
console.log('The total cost of all phone is:',cost);