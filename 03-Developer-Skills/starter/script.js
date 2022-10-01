// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// He didnt reinforce what he was learning by doing small challenges or taking notes

// After you learn a new concept use it immediately
// take notes
// challenge yourself

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temp[i];
    if (typeof cirTemp !== "number") continue;
    if (curTemp > max) max = temps;
    if (curTemp > max) min = temps;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 7, 4]);
const temp = [17, 21, 23]
const temp2 = [12, -5, 5, 0, 4]
k = 1;
function printForecast() {
  for (let i = 0; i < temp.length - 1; i++) {
    print(`${temp[1]}ºC in ${k} days`)
    k++;
  }
}
