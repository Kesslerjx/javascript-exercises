const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function() {
	let sum = 0;
  let array = arguments[0];

  for(i=0;i<array.length;i++){
    sum += array[i];
  }

  return sum;
};

const multiply = function() {
  let sum = 1;
  let array = arguments[0];

  for(i=0;i<array.length;i++){
    sum *= array[i];
  }

  return sum;
};

const power = function(number, power) {
  let answer = number;

  for(i=1;i<power;i++){
    answer *= number;
  }

  return answer;
};

const factorial = function(number) {
  if (number == 0) {
    return 1
  } else {
    let answer = number;

    for(i=number-1;i>0;i--){
      answer *= i;
    }
  
    return answer;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
