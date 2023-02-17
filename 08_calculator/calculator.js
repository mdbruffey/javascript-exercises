const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
	count = 0;
  for(num of numbers){
    count += num;
  }
  return count;
};

const multiply = function(numbers) {
  return numbers.reduce((mult, num) => mult*num,1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	return a <= 1 ? 1 : a * factorial(a-1);
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
