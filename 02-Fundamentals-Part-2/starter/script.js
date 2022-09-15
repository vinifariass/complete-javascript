"use strict";
function logger() {
  console.log("My name is jonas");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log();

  const juice = `Juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//keep your code dry dont repeat yourselves

//Function declarations and expressions
//generic function
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
calcAge1(1997);
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// functions are like vale but is not type and we can store than in a variable

const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function is a shorter form but faster to write
const calcAge3 = (birthYear) => 2037 - birthYear;
