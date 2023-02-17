const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    return Math.round((Math.pow(1.6180339,num) - Math.pow(-0.6180339,num))/2.236067977);
};

// Do not edit below this line
module.exports = fibonacci;
