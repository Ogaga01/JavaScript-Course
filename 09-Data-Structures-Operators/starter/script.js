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

  orderMenu: function (starterindex, index) {
    return[this.starterMenu[starterindex], this.mainMenu[index]]
  },

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
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

// const { name: bukka, openingHours, orderMenu } = restaurant
// console.log(bukka, openingHours, orderMenu)

// const { hut = [] } = restaurant
// console.log(hut)

// restaurant.orderMenu();

// console.log(restaurant.orderMenu(3, 0))
// let [starter, main] = restaurant.orderMenu(0, 0);
// console.log(starter, main);

// [main, starter] = [starter, main]
// console.log(starter, main);

// const [c, d, e] = restaurant.categories
// console.log(c, d, e)

