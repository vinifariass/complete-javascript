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
  return (age = 2037 - birthYear);
}
