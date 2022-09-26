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


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...names) {
    for (let i of names) {
      console.log(`${i}: ${this.score}`);
    }
  },
};

// // Task 1
// for (const [j, k] of game.scored.entries()) {
//   console.log(`Goal ${j + 1}: ${k}`);
// }

// // Task 2
// let sum = 0
// for (const l of Object.values(game.odds)) {
//   sum += l
// }
// sum /= Object.values(game.odds).length;
// console.log(sum)

// //Task 3
// for (const [ m, n ] of Object.entries(game.odds)) {
//   const teamStr = m === 'x' ? 'draw' : `victory ${game[m]}`
//   console.log(`Odds of ${teamStr}: ${n}`)
// }
// // Bonus

// const scorers = {
// }
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers)


// // Task 1
// const [player1, player2] = game.players
// console.log(player1, player2) 
// //Task 2
// const [gk, ...fieldPlayers] = player1
// console.log(gk, fieldPlayers)
// // Task 3
// const allPlayers = [...player1, ...player2]

// for (let i of allPlayers.entries()) {
//   console.log(i[0])
// }
// console.log(allPlayers)
// // Task 4
// const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(player1Final)
// // Task 5
// const { team1, x: draw, team2 } = game.odds
// console.log(team1, draw, team2)
// // Task 6
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// game.printGoals(...game.scored)
// // Task 7
// team1 < team2 && console.log(`Team 1 is most likely to win`)


// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu)

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

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// CC 3
//Task 1
const events = new Set(gameEvents.values())

console.log(events)

gameEvents.delete(64)
console.log(gameEvents)
