"use strict";

function fruitProcessor(apples, oranges) {
    const juice = `A juice with ${apples} apples and ${oranges} oranges`
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)
const appleOrangeJuice = fruitProcessor(3, 3)
console.log(appleOrangeJuice)