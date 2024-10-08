const sumAll = function(a, b) {
    // initialise count to zero
    let sum = 0
    // identify the lowest and highest value
    let min = Math.min(a, b)
    let max = Math.max(a, b)

    if (a < 0 || b < 0) return "ERROR" 

    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"

    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
