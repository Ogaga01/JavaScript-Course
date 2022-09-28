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

// const airPeace = {
//     airline: 'Air Peace',
//     iataCode: 'AP',
//     bookings: []
// }

// const arikAir = {
//     airline: 'Arik Air',
//     iataCode: 'AA',
//     bookings: []
// }

// function book(flightCode, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightCode}`)
//     this.bookings.push({flight: `${this.iataCode}${flightCode}`, name})
// }

// book.call(arikAir, 625, 'John')
// console.log(arikAir.bookings)

// // Bind Method
// const bindAP = book.bind(airPeace)
// bindAP(045, 'Lukewarm Waters')

// airPeace.planes = 300
// arikAir.planes = 50

// function buyPlanes() {
//     this.planes++
//     console.log(this)
//     console.log(this.planes)
// }

// document.querySelector('.buy').addEventListener('click', buyPlanes.bind(arikAir))

// function addTax(rate) {
//     return function (value) {
//         value += rate * value
//         return value
//     }
// }

// console.log(addTax(.20)(500))

// const poll = {
// question: "What is your favourite programming language?",
// options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
// // This generates [0, 0, 0, 0]. More in the next section!
// answers: new Array(4).fill(0),
// };

// function displayResults(type = 'array') {
//     if (type === 'array') {
//         console.log(this.answers)
//     } else if (type === 'string') {
//         console.log(`Poll results are: ${this.answers.join(', ')}`);
//     }
// }


// const displayBind = displayResults.bind(poll)

// function registerNewAnswer() {
//     const answer = Number(
//       window.prompt(
//         `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     if (isNaN(answer) || answer > this.options.length - 1 || answer < 0) {
//        window.alert(`incorrect answer`)
//     } else {
//         this.answers[answer]++
//     }
//     displayBind('string')
// }

// const pollFunc = registerNewAnswer.bind(poll);

// document.querySelector('.poll').addEventListener('click', pollFunc)

// (function() {
//     console.log('God is the Greatest')
// })()

function calcInterest(rate) {
    return function (value) {
        console.log(rate * value)
    }
}
const ten = calcInterest(.1)
ten(200)

function checkPosition() {
    let position = 0
    return function () {
        position++
        console.log(position)
    }
}

const post = checkPosition()
post()
post()
post()

