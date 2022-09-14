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

// const serviceYear = 25;
// const retirementAge = 60;

// const yearsLeft = (age, yearsServed) => {
//   let yearsRemaining;
//   if (yearsServed > serviceYear) {
//     return `You should have retired ${yearsServed - serviceYear} years ago`;
//   } else if (yearsServed < serviceYear) {
//     if (age > retirementAge) {
//       return `You should have retired ${age - retirementAge} years ago`;
//     } else if (age === retirementAge) {
//       return `You should retire this year`;
//     } else if (
//       age < retirementAge &&
//       retirementAge - age <= serviceYear - yearsServed
//     ) {
//       yearsRemaining = retirementAge - age;
//       return `You still have ${yearsRemaining} years left`;
//     } else {
//       yearsRemaining = serviceYear - yearsServed;
//       return `You still have ${yearsRemaining} years left`;
//     }
//   } else {
//     return `You should be retiring this year`;
//   }
// };

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

// function calcAge(currentYear, birthYear) {
//   const age = currentYear - birthYear;
//   return `You are ${age} years old`;
// }

// const years = [1990, 1847, 2005, 1987, 1614]

// const age1 = calcAge(2096, years[0])
// const age2 = calcAge(2037, years[years.length - 1]);
// const age3 = calcAge(2025, years[3])

// console.log(age1, age2, age3)
// console.log(years.length - 1);

// const calcTip = (bill) => {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//       tip = 0.15 * bill;
//     } else {
//       tip = 0.2 * bill;
//     }
//     return tip;
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
// // console.log(tips)
// console.log(totals)

const ogee = {
    firstName: "Ogaga",
    lastName: "Iyara",
    age: 25,
    job: "Software developer",
    nationality: "Nigerian",
    friends: ["Andre", "Micheal", "Faith"]
}

const question = prompt('What would you like to know about Ogee?')
console.log(ogee[question])

console.log(`${ogee.firstName} has ${ogee.friends.length} friends and his bestfriend name is ${ogee.friends[1]}`)