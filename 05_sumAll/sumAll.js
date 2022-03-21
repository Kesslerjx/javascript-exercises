const sumAll = function(start, end) {

    let sum = 0;

    //Check for negatives and non number types
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
        return "ERROR";
    } else {

        //Sum the numbers starting at the smallest number and working up
        if (start < end) {
            for(i = start; i <= end; i++){
                sum += i
            }
        } else {
            for(i = end; i <= start; i++){
                sum += i
            }
        }
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
