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

const populations = [35000000, 6000000, 350000000, 1400000000];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

const neighbors = ['Mexico', 'Canada'];
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country');
}
neighbors[neighbors.indexOf('Mexico')] = 'Republic of Mexico';
console.log(neighbors);

// Objexts
const myCountry = {
    country: 'US',
    capital: 'Washington DC',
    language: 'English',
    population: 350000000,
    neighbors: ['Mexico', 'Canada'],

    describe: function () {
        console.log(`The ${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbors === 0 ? true : false;
    }
};

console.log(`The ${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population = 400000000;
console.log(myCountry);
myCountry['population'] = 300000000;
console.log(myCountry);
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

for (let voteCount = 0; voteCount <= 50; voteCount++) {
    console.log(`Voter number ${voteCount} is currently voting!`);
}
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
neighbors[0] = 'Mexico';
console.log(neighbors);

const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Canada', 'Russia']];
for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let k = 0; k < listOfNeighbors[i].length; k++) {
        if (neighbors.includes(listOfNeighbors[i][k])) {
            console.log(listOfNeighbors[i][k]);
        }
    }
}



