"use strict";

// function fruitProcessor(apples, oranges) {
//     const juice = `A juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)
// const appleOrangeJuice = fruitProcessor(3, 3)
// console.log(appleOrangeJuice)

// // Function Declaration and Function Espression

// function calcAge(currentYear, birthYear) {
//     const age = currentYear - birthYear
//     return `You are ${age} years old`
// }

// const age1 = calcAge(2022, 1946)

// const calcAge2 = function (currentYear, birthYear) {
//     const age = currentYear - birthYear;
//     return `You are ${age} years old`;
// }

// const age2 = calcAge2(2022, 2004)
// console.log(age1, age2);

const yearUntilRetirement = (birthYear, currentYear, yearOfEmployment) => {
    const age = currentYear - birthYear
    const ageOfRetirement = 60
    const serviceYear = 25
    const yearsServed = currentYear - yearOfEmployment

    if (age > ageOfRetirement) {
        console.log( `You should have been retireed ${age - ageOfRetirement} years ago`)
    } else if (age === ageOfRetirement || yearsServed === serviceYear) {
        console.log( `You would retire this year`)
    } else if (age < ageOfRetirement && yearsServed > serviceYear) {
        console.log(`You should have retired ${age - yearsServed} years ago`)
    } else {
        console.log(`You should retire in ${serviceYear - yearsServed} years time`)
    }
}

yearUntilRetirement(1997, 2040, 2028)