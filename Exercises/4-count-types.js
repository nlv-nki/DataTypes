'use strict';

const countTypesInArray = (arr) => {
  const hash = { };
  for (const elem of arr) {
    const prop = typeof elem;
    if (prop in hash) {
      hash[prop]++;
    }
    else {
      hash[prop] = 1;
    }
  }
  return hash;
};

module.exports = { countTypesInArray };
