let js = "amazing";

if (js === "amazing") alert("Javascript is amazing");
40 + 8 + 23 - 10;

// console.log("Jonas");

// let firstName = "Jonas";
// let jonas_matilda = "JM";

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true)
// console.log(typeof 'Jonas')
// console.log(typeof 23)
// console.log(typeof null)
// job = "teacher";
// var job = "programmer";
// let age = 30;
lastName = "Vinicius Farias";
console.log(lastName);

// const birthYear = 1991;
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas - ageSarah);
console.log(ageJonas * 3);
//2 ** 3 means 2 to the power of 3

//Concatenation or use template strings
const firstName = "Vinicius";
const lastName = "Farias";
console.log(firstName + " " + lastName);

//Assignment operators
// let x = 10 + 5;
// x += 20;
// x *= 4;

//Comparison operators

console.log(ageJonas > ageSarah);
console.log(ageSah >= 18);
const isFullAge = ageSarah >= 18;
// > ->greater
//x = x+ 10;
//reassigning the x value
//times = vezes(asteristicos)
//asterisk
//var deve ser evitada, utiliza em codigos antigos

console.log(now - 19991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y - 25 - 10 - 5;

//Average Calculator
const average = (ageJonas + ageSarah) / 2;

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

const markMass = 78;
const johnMass = 95;
const johnHeight = 1.88;
const markHeight = 1.69;
const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiJohn, bmiMark, markHigherBMI);

// const birthYear = 1991;
// const year = 2037;
// const job = teacher;
// "I'm" + firstName + ", a" + (year - birthYear) + "years old" + job + "!";
// console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log("String with \n\
multiple \n\
lines");

//Taking decisions if/else statemenst
//Control structure
// const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
// o que declaramos dentro do bloco nao sera acessivel fora do bloco

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!  `);
} else {
  console.log(`John's (${bmiJohn}) BMI is higher than Mark's (${bmiMark})!`);
}

const inputYear = "1991";
//the original value was not converted
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
//NaN not a number(numero invalido)
console.log(String(23), 23);

//Type coercion
console.log("I am" + 23 + " years old");
//If we use minus they are converted to number
//If we use plus they are converted to string
console.log("23" - "10" - 3);
console.log("23" * "2");
//times converts to number two

//Truthy and falsy values

console.log(Boolean(0)); //fase
console.log(Boolean(undefined));
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); //trie
// Ocorre na condicao de if e else na coerçao

const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job");
}

let height;
//height sera convertida para um booleano

if (height) {
  console.log("YAy Height is defined");
} else {
  console.log("Heigh is undefined");
}

const age = 18;
if (age === 18) console.log("You just became a adult :D(strict)");
if (age == 18) console.log("You just became an adult(loose)");

// aparece um prompt na tela e armazena um valor
const favourite = prompt("What's your favorite number?");

console.log(favourite);

console.log(typeof favourte);

if (favourite == 23) {
  console.log("Cool| 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourte == 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourte !== 23) {
  console.log("Why not 23?");
}

//Basic Boolean Logic
// Sarah has a driver's license AND good vision
// If one is false all is false
// Sarah has a driver's license OR good vision
// If two are true or one they all are true

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
//basta que uma seja verdadeira para as duas serem verdadeiras

const shouldDrive = hasDriversLicense && hasGoodVision;

const isTired = false;
if (hasDriversLicense & hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

console.log(isTired || hasGoodVision || hasDriversLicense);

///////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
var dolphins = (96 + 108 + 89) / 3;
var koalas = 97 + 112 + 101 / 3;
var averageTeams = (dolphins + koalas) / 2;
if (dolphins > koalas) {
  console.log("Dolphins wins");
} else if (koalas > dolphins) {
  console.log("Koalas wins");
} else if (dolphins == koalas) {
  console.log("DRAW!");
}

var dolphins = (97 + 112 + 101) / 3;
var koalas = 109 + 95 + 123 / 3;

if (dolphins > koalas && dolphins >= 100) {
  console.log("Dolphins wins with a score higher than 100");
} else if (koalas > dolphins && koalas >= 100) {
  console.log("Koalas wins with a score higher than 100");
} else if (dolphins == koalas) {
  console.log("DRAW!");
}

var dolphins = (97 + 112 + 101) / 3;
var koalas = (109 + 95 + 106) / 3;

if (dolphins > koalas && dolphins >= 100) {
  console.log("Dolphins wins with a score higher than 100");
} else if (koalas > dolphins && koalas >= 100) {
  console.log("Koalas wins with a score higher than 100");
} else if (dolphins == koalas && dolphins >= 100 && koalas >= 100) {
  console.log("DRAW!");
}

const day = "monday";
switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Go to the college");
    break;
  case "saturday":
  case "sunday":
    console.log("Sleep");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan Course Structure");
  console.log("Go to the coding metup");
} else if (day === "wednesday") {
  console.log("Nothing to do");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Go to the college");
} else if (day === "saturday" || day === "sunday") {
  console.log("Sleep");
} else {
  console.log("Not a valid day");
}

//Statements and Expressions
//Statement is a big piece of code that is executed that not produce value on itself and we can comparise with normal language
// Expressions produce values
if (23 > 10) {
  const str = "23 is bigger";
}
// you cannot insert an if statement inside a template string

//The condicional operator(ternary)

const ageVini = 22;
age >= 10 ? "I like do drink wiwin" : "i like to drin water";
//if we want to be true is after the interrogation and false after two poitns

let drink2;
ageVini > 18 ? "Wine " : "🍼";

console.log(`I like to drink {ageVini > 18 ? 'Wine ' : '🍼';}`)
