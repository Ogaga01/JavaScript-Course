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

// const yearUntilRetirement = (birthYear, currentYear, yearOfEmployment) => {
//     const age = currentYear - birthYear
//     const ageOfRetirement = 60
//     const serviceYear = 25
//     const yearsServed = currentYear - yearOfEmployment

//     if (age > ageOfRetirement) {
//         console.log( `You should have been retireed ${age - ageOfRetirement} years ago`)
//     } else if (age === ageOfRetirement || yearsServed === serviceYear) {
//         console.log( `You would retire this year`)
//     } else if (age < ageOfRetirement && yearsServed > serviceYear) {
//         console.log(`You should have retired ${age - yearsServed} years ago`)
//     } else {
//         console.log(`You should retire in ${serviceYear - yearsServed} years time`)
//     }
// }

// yearUntilRetirement(1997, 2040, 2028)

// const avgKoalas = (score1, score2, score3) => {
//     const averageScore = (score1 + score2 + score3) / 3
//     return averageScore
// }

// const avgDolphins = (score1, score2, score3) => {
//   const averageScore = (score1 + score2 + score3) / 3;
//   return averageScore;
// };

// const checkWinner = (scoreDolphins, scoreKoalas) => {
//     scoreDolphins = avgDolphins(85, 54, 41)
//     scoreKoalas = avgKoalas(23, 34, 27)
//     if (scoreDolphins >= scoreKoalas * 2) {
//         console.log (`Dolphins win ${scoreDolphins} vs ${scoreKoalas}`)
//     } else if (scoreKoalas >= scoreDolphins * 2) {
//         console.log(`Koalas win ${scoreKoalas} vs ${scoreDolphins}`)
//     }else {console.log(`no one wins`)}
// }

// checkWinner()

function calcAge(currentYear, birthYear) {
  const age = currentYear - birthYear;
  return `You are ${age} years old`;
}

const years = [1990, 1847, 2005, 1987, 1614]

const age1 = calcAge(2096, years[0])
const age2 = calcAge(2037, years[years.length - 1]);
const age3 = calcAge(2025, years[3])

console.log(age1, age2, age3)
console.log(years.length - 1);