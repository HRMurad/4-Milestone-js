function gemsToDiamond(x,y,z) {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
        return 'please provide a valid number';
    } else if (x < 0 || y < 0 || z < 0) {
            return 'please provide a positive number';
    } else {
        let friend1 = 21;
        let friend2 = 32;
        let friend3 = 43;
        let total = (friend1 * x) + (friend2 * y) + (friend3 * z);
        if (total > 2000) {
            return total - 2000;
        } else {
            return total;
        }
        }
    }
console.log(gemsToDiamond(1,1,1));