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
// const age1 = calcAge1(1991);
// calcAge1(1997);
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// functions are like vale but is not type and we can store than in a variable

// const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function is a shorter form but faster to write
// are excellent for function of one line
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge1(1991);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Vinicius"));

const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples ${orangePieces}and pieces of oranges`;
}

fruitProcessor(2, 3);

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
*/

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(85, 23, 71);

function checkWinner() {
  if (avgDolhins > avgKoalas * 2) {
    console.log(`Dolphins wins(${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas wins(${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No teams wins");
  }
}

//Introduction of Array
//como um grande conteiner na qual pode lançar variaveis e são armazenados nessas estrutura de dados
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = [friend1, friend2, friend3];
console.log(friends);
//A function that call with parentheses
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length[friends.length - 1]);

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas.length);

const yearsAge = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);

//Basic Operators Methods

// method push -> add an element in the final of n array
//Add elements
const friendsS = ["Michael", "Steven", "Peter"];
const newLength = friendsS.push("Jay");
console.log(newLength);
friends.unshift("John");
//Remove elements
const popped = friends.pop();
console.log(popped);
console.log("John");
friends.unshift(); //First
//search a parameter in
console.log(friends.indexOf("Steven"));

//verifica se esta dentro do array
console.log(friends.includes("Steven"));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

var bill = 275;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);

function calcTip(bill) {
  var tip = bill > 50 && bill < 300 ? 0.15 : 0.2;
  var total = bill * tip;
  return total;
}
function createArray(value1, value2, value3) {
  return [value1, value2, value3];
}

let bill1 = 125;
let bill2 = 555;
let bill3 = 44;

console.log(createArray(bill1, bill2, bill3));
let tips1 = calcTip(bill1);
let tips2 = calcTip(bill2);
let tips3 = calcTip(bill3);
createArray(tips1, tips2, tips3);
console.log(createArray(tips1, tips2, tips3));
