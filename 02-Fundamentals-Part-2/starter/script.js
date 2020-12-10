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
/*
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
*/

// 39. Arrays
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
*/

// 40. Basic Array Operations
// add elements
/*
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

// ES6 method - uses strict equality - no type coercion
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false
console.log(friends.includes(23)); // true

if (friends.includes('Peter')) {
    console.log('You have a friend named Peter');
}
*/

// 41. Coding Challenge #2
/*
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15;
    } else {
        return bill * .20;
    }
}

console.log(calcTip(301));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
*/

// 42. Objects

// object with 5 properties
/*
const tom = {
    firstName: 'Tom',
    lastName: 'Casper',
    age: 2037 - 1977,
    job: 'programmer',
    friends: ['Michael', 'Peter', 'Steven']
};

// 43. Dot vs Bracket Notation
console.log(tom);

console.log(tom.lastName);
console.log(tom['lastName']);

const nameKey = 'Name';
console.log(tom['first' + nameKey]);
console.log(tom['last' + nameKey]);

// console.log(tom.'last' + nameKey);
const interestedIn = prompt('What do you want to know about Tom? Choose between firstName, lastName, age, job, and friends');

console.log(tom[interestedIn]);

if (tom[interestedIn]) {
    console.log(tom[interestedIn]);
} else {
    console.log('Wrong request');
}

tom.location = 'US';
tom['twitter'] = '@tmcasper';
console.log(tom);

// Challenge
// "Tom has 3 friends and his best frindn is called Michael"
console.log(`${tom.firstName} has ${tom.friends.length} friends, and his best friend is ${tom.friends[0]}`);
*/
// 44. Object Methods
/*
const tom = {
    firstName: 'Tom',
    lastName: 'Casper',
    birthYear: 1977,
    job: 'programmer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    calcLicenseStr: function () {
        return this.hasDriversLicense ? 'a' : 'no';
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }



};

console.log(tom.calcAge());
console.log(tom.calcAge());
console.log(tom.calcAge());
console.log(tom.calcAge());
// console.log(tom['calcAge']());

// Challenge
// "Tomn is a 60 year old programmer, and he has a driver's license.

console.log(`${tom.firstName} is a ${tom.calcAge()} programmer, and he has ${tom.calcLicenseStr()} driver's license.`);
console.log(tom.getSummary());
*/

// Coding challenge #3
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`);
} else {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`);
}
*/

// 46. Iteration: The for loop
/*
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/
// 47. Looping arrays, breaking and continuing
/*

const tom = [
    'Tom',
    'Casper',
    2037 - 1977,
    'programmer',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < tom.length; i++) {
    // reading from tom array
    console.log(tom[i], typeof tom[i]);

    // filling types array
    types[i] = typeof tom[i];
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < tom.length; i++) {
    if (typeof tom[i] !== 'string') continue;
    console.log(tom[i], typeof tom[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < tom.length; i++) {
    if (typeof tom[i] === 'number') break;
    console.log(tom[i], typeof tom[i]);
}
*/

// 48. Looping Backwards and Loops in Loops
/*
const tom = [
    'Tom',
    'Casper',
    2037 - 1977,
    'programmer',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = tom.length - 1; i >= 0; i--) {
    console.log(i, tom[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition ${rep}`);
    }
}*/

// 49. While loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/*
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6);
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/

// 50. Coding Challenge #4
/*
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15;
    } else {
        return bill * .20;
    }
}

const calcAverage = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
*/

// 51. 

