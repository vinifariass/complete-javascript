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
job = "teacher";
var job = "programmer";
let age = 30;
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

const birthYear = 1991;
const year = 2037;
const jonas =
  "I'm" + firstName + ", a" + (year - birthYear) + "years old" + job + "!";
console.log(jonas);
