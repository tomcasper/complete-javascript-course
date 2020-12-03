/*
let js = 'amazing';
//console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(true);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1977;
// birthYear = 1990;

// not legal
// const job;

// var is the old way of declaring vars
var job = 'programmer';
job = 'teacher';

// actually don't even need to declare variables - creates a property global object
lastName = 'Casper';
*/

/*
const now = 2037;
const ageThomas = now - 1977;
const ageSarah = now - 2018;
console.log(ageThomas, ageSarah);

console.log(ageThomas * 2, ageThomas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 === 2 * 2 * 2

const firstName = 'Thomas';
const lastName = 'Casper';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;
x++; // x = x + 1
x--;
console.log(x);

// comparison operators
console.log(ageThomas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageThomas = now - 1977;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);  // 10, 10 because ... = ... is right-associative

const averageAge = ageSarah + ageThomas / 2; // will be incorrect because division be done first
const avgAge = (ageSarah + ageThomas) / 2;
console.log(ageThomas, ageSarah);
*/

// Coding Challenge #1
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
const markBMI2 = markMass2 / (markHeight2 ** 2);
const johnBMI2 = johnMass2 / (johnHeight2 ** 2);
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI, johnBMI);
console.log(markBMI2, johnBMI2);
console.log("Test data 1, Mark's BMI greater than John's? " + markHigherBMI);
console.log("Test data 2, Mark's BMI greater than John's? " + markHigherBMI2);
*/

// 17. Strings and Template Literals
/*
const firstName = 'Tom';
const lastName = 'Casper';
const job = 'programmer';
const birthYear = 1977;
const year = 2037;

const tom = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(tom);

const tomNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(tomNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multilple \n\
lines');

console.log(`String
with
multiple
lines`);
*/

// 18. Taking Decisions, if/else statements
/*
const age = 15;
const isOldEnough = age > 18;
if (age >= 18) {
    console.log(`Sarah can start driving license `);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cannot start driving yet 😟 wait another ${yearsLeft} years.`);
}
let century;
const birthYear = 1977;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Coding Challenge #2
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
const markBMI2 = markMass2 / (markHeight2 ** 2);
const johnBMI2 = johnMass2 / (johnHeight2 ** 2);
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI, johnBMI);
console.log(markBMI2, johnBMI2);
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}

// 20. Type Conversion and Coercion
// Type conversion
/*
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number('Jonas')) // NaN

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old'); // auto String(23)
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1; // 11 - 1
console.log(n);
*/

// 21. Truthy and Falsy values
// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY Height is defined");
} else {
    console.log("Height is undefined");
}
*/

// 22. Equality operators: == vs ===
// == will do type coercion, so '18' == 18 is true whereas '18' === 18 is false
/*
const age = 18;
if (age === 18) console.log("You just became an adult");
console.log('18' == 18, '18' === 18);

const favorite = Number(prompt("What is your favorite number? "));
console.log(favorite);
console.log(typeof favorite);
if (favorite === 42) { // '42' == 42
    console.log("Cool! 42 is the answer to everything");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else if (favorite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 42 or 7 or 9");
}

if (favorite !== 42) console.log("Why not 42");
*/

// 23. Boolean logic

// 24. Logical operators
const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive");
// }
/*
const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}
*/

// 25. Coding challenge #3
// Test Data 1
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;
// const minimumRequiredScore = 100;
// const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalasAveragaeScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Dolphins score is ${dolphinsAverageScore} and the Koalas score is 
// ${koalasAveragaeScore}`);
// if (dolphinsAverageScore > koalasAveragaeScore && dolphinsAverageScore >= minimumRequiredScore) {
//     console.log("The Dolphins Win!");
// } else if (koalasAveragaeScore > dolphinsAverageScore && koalasAveragaeScore >= minimumRequiredScore) {
//     console.log("The Koalas Win!");
// } else if (dolphinsAverageScore === koalasAveragaeScore &&
//     dolphinsAverageScore >= minimumRequiredScore && koalasAveragaeScore >= minimumRequiredScore) {
//     console.println("We hava a DRAW!");
// } else {
//     console.log("We sadly don't have a winner :(");
// }

// Test Data 2
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;
const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 123;
const minimumRequiredScore = 100;
const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAveragaeScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(`Dolphins score is ${dolphinsAverageScore} and the Koalas score is 
${koalasAveragaeScore}`);
if (dolphinsAverageScore > koalasAveragaeScore && dolphinsAverageScore >= minimumRequiredScore) {
    console.log("The Dolphins Win!");
} else if (koalasAveragaeScore > dolphinsAverageScore && koalasAveragaeScore >= minimumRequiredScore) {
    console.log("The Koalas Win!");
} else if (dolphinsAverageScore === koalasAveragaeScore &&
    dolphinsAverageScore >= minimumRequiredScore && koalasAveragaeScore >= minimumRequiredScore) {
    console.println("We hava a DRAW!");
} else {
    console.log("We sadly don't have a winner :(");
}

// 26. The Switch Statement
/*
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}
*/

// 27. Statements and Expressions
/*
3 + 4 //expression
1991 // expression (because they have value)
true && false && !false

// statement
if (23 > 10) {
    const str = '23 is bigger';  // expression
}

console.log(`I'm ${2037 - 1991} years old`);
*/

// 28. The conditional ternary operator
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : water}`);
*/

// Coding Challenge #4
let bill = 275;
let tip = (bill < 50 || bill > 300) ? bill * 0.2 : bill * 0.15;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);








