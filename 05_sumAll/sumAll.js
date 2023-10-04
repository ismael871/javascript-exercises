const sumAll = function(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "ERROR";
    } else if(a < 0 || b < 0) {
        return "ERROR";
    }

    let start = 0;
    let end = 0;
    let sum = 0; 

    if(a > b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    }

    for (let i = start; i <= end ; i++) {
        sum += i;    
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
