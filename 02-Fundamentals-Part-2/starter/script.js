'use strict';
/*
let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'audio';
// const private = 2;
// const if = 23;
*/

// 33. Functions
/*
function logger() {
    console.log('My name is Tom');
}

// calling, running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges); // logging the params
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(12, 4);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

// 34. Function declarations vs expressions
// function declaration
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// function declarations can be called before they are defined in the code, can't do that
// with function expressions
*/

// 35. Arrow Functions
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1977, 'Tom'));
*/

// 36. Functions calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges); // logging the params
    const juice = `Juice with ${applePieces} pieces of apples, and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

// 37. Reviewing Functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1977, 'Tom'));
console.log(yearsUntilRetirement(1970, 'Jonas'));
*/

// 38. Coding challenge #1
const calcAverage = (score1, score2, score3) => {
    const total = score1 + score2 + score3;
    const avg = total / 3;
    return avg;
}
// Test data 1
const dolphinsAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);
// Test data 2
const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win, ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win, ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`No one wins`);
    }
}

checkWinner(dolphinsAvg1, koalasAvg1);
checkWinner(dolphinsAvg2, koalasAvg2);




