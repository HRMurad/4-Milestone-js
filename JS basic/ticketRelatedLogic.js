/*
1.if ticket num is less than 100,per ticket price=100
2.if ticket num is more than 100,but less than 200.First 100 ticket would be 100/ticket.
rest ticket would be 90taka per price.
first 100---->100tk
rest------>90tk
3.if you purchase more than 100 tickets,
first 100---->100taka
101-200------>90taka
200+------->70taka
*/

function ticketPrice(ticketQuantity) {
    let first100Rate = 100;
    let second100Rate = 90;
    let restTicketRate = 70;
    if (ticketQuantity <= 100) {
        let price = ticketQuantity * first100Rate;
        return price;

    } else if (ticketQuantity <= 200) {
        let first100Price = 100 * first100Rate;
        let restTicketQuantity = ticketQuantity - 100;
        let restTicketPrice = restTicketQuantity * second100Rate;
        let totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
}
let price = ticketPrice(100);
console.log(price)

