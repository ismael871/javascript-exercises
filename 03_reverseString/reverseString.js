const reverseString = function(string) {
    let arrayString = string.split("");
    let reverseStr = "";

    if(string != ""){
        for (let i = arrayString.length - 1; i >= 0; i--) {
            reverseStr += arrayString[i];
            
        }
        return reverseStr;
    }
    return string
};

// Do not edit below this line
module.exports = reverseString;
