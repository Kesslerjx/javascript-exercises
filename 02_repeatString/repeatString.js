

const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR"
    } else {
        let word = "";

        for(i=0;i<num;i++) {
            word = word + string;
        }
    
        return word;
    }

};

// Do not edit below this line
module.exports = repeatString;
