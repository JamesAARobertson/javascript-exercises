const findTheOldest = function(people) {
   let oldestPerson = people.reduce((oldest, person) => {
    let currentYear = new Date().getFullYear()
        let age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return age > oldestAge ? person : oldest
    })
return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
