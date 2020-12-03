'use strict';
// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('US', 350000000, 'Washington DC'));
console.log(describeCountry('Finland', 6000000, 'Helsinki'));
console.log(describeCountry('Canada', 30000000, 'Toronto'));

// Function declarations vs expressions
function percentageOfWorld1(population) {
    const worldPopulation = 7900000000;
    return population / worldPopulation * 100;
}

console.log(percentageOfWorld1(350000000));

const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900000000;
    return population / worldPopulation * 100;
}
console.log(percentageOfWorld2(6000000));

const percentageOfWorld3 = population => {
    const worldPopulation = 7900000000;
    return population / worldPopulation * 100;
}

console.log(percentageOfWorld3(400000000));

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`;
}

console.log(describePopulation('US', 400000000));


