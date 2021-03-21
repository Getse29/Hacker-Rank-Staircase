'use strict';

function staircase(n) {
  let space = ' ';
  let symbol = '#';

  for (let i = 1; i <= n; i++) {
    console.log(`${space.repeat(n - i)}${symbol.repeat(i)}`);
  }
  return;
}

staircase(80);

//My solution does not work and i had to search when i could solve it :(
//https://medium.com/@alireubenstone/two-ways-to-solve-the-hackerrank-staircase-problem-in-javascript-8036d2254567
const stairCaseSymbol = n => {
  const symbol = '#';
  const space = ' ';
  let symbolAdd = '';
  let spaceAdd = '';
  const arrSymbol = [];
  const arrSpace = [];
  let i = 0;
  let j = n - 1;
  while (i < n) {
    symbolAdd += symbol;
    spaceAdd += space;
    arrSpace.push(spaceAdd);
    arrSymbol.push(symbolAdd);
    i++;
  }
  for (i = 0; i < arrSymbol.length; i++) {
    j--;
    console.log(arrSpace[j + 1], arrSymbol[i]);
  }
  return;
};

stairCaseSymbol(90);
