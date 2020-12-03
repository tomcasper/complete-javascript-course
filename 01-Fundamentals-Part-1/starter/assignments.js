console.log("<---- ASSIGNMENT 1: VALUES AND VARIABLES ---->");
const country = 'US';
const continent = 'North America';
let population = 350000000;
console.log(country);
console.log(continent);
console.log(population);
console.log("Hi, my name is Tom and I am from the " + country + " in " + continent + ", which has approximately " + population + " people.");

console.log("<---- ASSIGNMENT 2: DATA TYPES ---->");
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("<---- ASSIGNMENT 3: let, const, and var ---->");
language = 'English';
console.log(language);

console.log("<---- ASSIGNMENT 4: Basic Operators ---->");
let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population++);
console.log(population > 6000000);
let avgPop = 33000000;
console.log(population > avgPop);
let description = "The " + country + " is in " + continent + ", and its " + population + " people mostly speak " + language;
console.log(description);

console.log("<---- ASSIGNMENT 5: String and Template Literals ---->");
description = `The ${country} is in ${continent}, and its ${population} people mostly speak ${language}.`;
console.log(description);

console.log("<---- ASSIGNMENT 6: Taking Decisions: if/else statements ---->");
if (population > avgPop) {
    console.log(`The ${country}'s population is above average.`);
} else {
    console.log(`The ${country}'s populatoin is ${avgPop - population} below average.`);
}

console.log("<---- ASSIGNMENT 7: Type Conversion and Coercion ---->");
console.log('9' + '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

console.log("<---- ASSIGNMENT 8: Equality operators: == vs === ---->");
// let numNeighbors = Number(prompt("How many neighbor countries does your country have?"));
// if (numNeighbors === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//     console.log("More than 1 border!");
// } else {
//     console.log("No borders");
// }

console.log("<---- ASSIGNMENT 9: Logical Operators ---->");
if (language === 'English' && population < 50000000 && !isIsland) {
    console.log("This country meets your criteria!");
} else {
    console.log("Sorry, this country does not meet your criteria.");
}

console.log("<---- ASSIGNMENT 10: The Switch Statement ---->");
switch (language) {
    case 'Chinese':
        console.log("MOST number of native speakers!");
        break;
    case 'Spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'English':
        console.log("3rd place");
        break;
    case 'Hindi':
        console.log("Number 4");
        break;
    case 'Arabic':
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too!");
}

console.log("<---- ASSIGNMENT 11: The Conditional (ternary) operator ---->");
console.log(`The ${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`);






