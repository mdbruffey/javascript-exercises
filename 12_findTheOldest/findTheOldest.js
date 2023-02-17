const findTheOldest = function(people) {
    let old = {yearOfBirth: 0, yearOfDeath: 1};
    return people.reduce((oldest, person) => {
        if(!person["yearOfDeath"]){
            person["yearOfDeath"] = new Date().getFullYear();
        }
        if (person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth){
            return person;
        }
        return oldest

    }, old);
};

// Do not edit below this line
module.exports = findTheOldest;
