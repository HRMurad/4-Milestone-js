function woodCalculator(chairQuantity,tableQuantity,bedQuantity) {
    let perChairWood = 3;
    let perTableWood = 5;
    let perBedWood = 10;
    let chairWood = chairQuantity * perChairWood;
    let tableWood = tableQuantity * perTableWood;
    let bedWood = bedQuantity * perBedWood;
    let totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

let totalWood = woodCalculator(2, 3, 5);
console.log(totalWood);