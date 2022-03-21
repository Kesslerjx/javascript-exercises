const ftoc = function(temperature) {
  let converted = (temperature - 32) * (5/9);
  return Math.round(converted*10) / 10;
};

const ctof = function(temperature) {
  let converted = (temperature * (9/5)) + 32;
  return Math.round(converted*10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
