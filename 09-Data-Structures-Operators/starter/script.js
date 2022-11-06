'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[this.mainMenu]]
  },
};

const arr = [2, 3, 4]

const a = arr[0]
const [x, y, z] = arr;
// const [main, , secondary] = restaurant.categories
console.log(main, secondary)
const temp = main
main = secondary
secondary = temp;
console.log(main, secondary)
//Switching variables
[main, secondary] = [secondary, main]
console.log(main, secondary)

const [starter, main] = (restaurant.order(2, 0))
console.log(starter, main)
const nested = [2, 4, [5, 6]]
const [i, [j, k]] = nested
console.log(i, j, k)

const [p, q, r] = [8, 9]
console.log(p, q, r)
// Destructure objects

const { name, openingHours, categories } = restaurant
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
}
  = restaurant;
console.log(restaurantName, hours, tags)

const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

//Mutating variables
let a = 111
let b = 999
const obj = { a: 23, b: 7, c: 14 }
  ({ a, b } = obj);

//nested objects = objetos aninhados

const { fri: { open, close } } = openingHours
console.log(open, close)

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2
})
const arr2 = [7, 8, 9]
const badNewArray = [1, 2, arr2[0], arr2[1], arr2[2]]
console.log(badNewArray)

//Spread operator

const newArray = [1, 2, ...arr2]
// expand this array to all results
console.log(newArray)

const mainMenuCopy = [...restaurant.mainMenu]

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu]

//iterables: arrays, strings,maps,sets.not objects

const str = 'Jonas'
const letters = [...str,'','S.']

