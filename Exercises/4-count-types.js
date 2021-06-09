'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];
const hash = { number: 0, string: 0, boolean: 0 };

const countTypesInArray = (arr) => {
  for (const elem of arr) {
    console.log(typeof elem);
    let prop = typeof elem;
    if (hash.hasOwnProperty(prop)) {
      hash[prop]++;
    }
  }
}
module.exports = { countTypesInArray };
