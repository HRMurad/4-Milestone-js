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

function totalCost(price) {
    let total = 0;
    for (let i = 0; i < price.length; i++) {
        let product = price[i];
        total = total + product.price;
    }
    return total;
}

let cost = totalCost(phones);
console.log(cost);