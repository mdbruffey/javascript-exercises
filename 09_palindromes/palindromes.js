const palindromes = function (string) {
    let array = Array.from(string.toLowerCase().replaceAll(" ",""));
    array = array.filter(char => char >= "A" && char <= "z");
    string = array.join("");
    array = array.reverse().join("");
    return array === string;
};

// Do not edit below this line
module.exports = palindromes;
