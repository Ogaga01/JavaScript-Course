'use strict';

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

// createBooking('LA22b', 58, 260000)

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(),  ...others].join(' ')
}

function transformString(str, fn) {
    console.log(fn(str));
    return fn(str)
}

transformString('i am beautiful inside and out', upperFirstWord);

