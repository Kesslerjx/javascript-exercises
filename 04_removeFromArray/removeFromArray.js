const removeFromArray = function() {

    //Get the first argument since it's the array
    let numbers = arguments[0];
    
    //Loop through the rest of the arguments
    for(i=1;i<arguments.length;i++) {

        //Get the index of the element if it exist within the numbers array
        let index = numbers.indexOf(arguments[i]);

        //If the index is greater than 0 (it exist) remove it from the array
        if (index >= 0) {
            numbers.splice(index, 1);
        }
    }

    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
