// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const testArr1 = [17, 21, 23];
const testArr2 = [12, 5, -5, 0, 4];

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}° in ${i + 1} days `;
  }
  return str;
};
console.log(testArr1);
console.log(printForcast(testArr1));
