const removeFromArray = function(array, ...toRemove) {
    for (let item of toRemove){
        index = array.indexOf(item);
        if (index > -1){
            array = array.slice(0,index).concat(array.slice(index+1));
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
