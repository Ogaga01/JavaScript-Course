// 'use strict';

// const bookings = []

// function createBooking(flightNum, numOfPassengers, price) {
    
//     const booking = {
//         flightNum,
//         numOfPassengers,
//         price
//     }

//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking('LA22B', 58, 260000)

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }
// console.log(oneWord('I am wonderfully made'));

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(),  ...others].join(' ')
// }

// function transformString(str, fn) {
//     console.log(fn(str));
//     return fn(str)
// }

// transformString('i am beautiful inside and out', upperFirstWord);

// function greeting(greet) {
//     return function (name) {
//         console.log(`${greet} ${name}`)
//     }
// }

// greeting('hey')('mama')

// const greeting2 = (greet2) => {
//     return (name) => {
//         console.log(`${greet2} ${name}`)
//     }
// }

// greeting2('hey')('mama');

const airPeace = {
    airline: 'Air Peace',
    iataCode: 'AP',
    bookings: []
}

const arikAir = {
    airline: 'Arik Air',
    iataCode: 'AA',
    bookings: []
}

function book(flightCode, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightCode}`)
    this.bookings.push({flight: `${this.iataCode}${flightCode}`, name})
}

book.call(arikAir, 625, 'John')
console.log(arikAir.bookings)

// Bind Method
const bindAP = book.bind(airPeace)
bindAP(045, 'Lukewarm Waters')

airPeace.planes = 300
arikAir.planes = 50

function buyPlanes() {
    this.planes++
    console.log(this)
    console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', buyPlanes.bind(arikAir))

