"use strict";

// function describeCountry (country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const nigeria = describeCountry('Nigeria', 200, 'Abuja')
// const usa = describeCountry('United State', 250, 'Washington DC')
// const australlia = describeCountry('Australlia', 100, 'Sydney')

// console.log(nigeria)
// console.log(usa)
// console.log(australlia)

// const nigeriaPercent = console.log(countryPercent(200))
// const chinaPercent = console.log(countryPercent(1440))
// const americaPercent = console.log(countryPercent(250))

// function countryPercent (countryPopulation){
//     const worldPopulation = 7900
//     return (countryPopulation/worldPopulation)*100
// }

// const percentageOfWorld = function (countryPopulation){
//     const worldPopulation = 7900
//     return (countryPopulation/worldPopulation)*100
// }
// const nigeria = console.log(percentageOfWorld(200))
// const china = console.log(percentageOfWorld(1440))
// const america = console.log(percentageOfWorld(250))

// const serviceYear = 25
// const retirementAge = 60

// const yearsLeft = (age, yearsServed)=>{
//     let yearsRemaining;
//     if (yearsServed > serviceYear){
//         return `You should have retired ${(yearsServed - serviceYear)} years ago`
//     }else if (yearsServed < serviceYear){
//         if (age > retirementAge){
//             return `You should have retired ${age - retirementAge} years ago`
//         }else if (age === retirementAge){
//             return `You should retire this year`
//         }else if(age < retirementAge && retirementAge - age <= serviceYear - yearsServed){
//             yearsRemaining = retirementAge - age
//             return `You still have ${yearsRemaining} years left`
//         }else {
//             yearsRemaining = serviceYear - yearsServed
//             return `You still have ${yearsRemaining} years left`
//         }
//     }else {
//         return `You should be retiring this year`
//     }
// }

// const tony = yearsLeft(50,25)
// console.log(tony)
// const celia = yearsLeft(53, 18)
// console.log(celia)
// const george = yearsLeft(42, 24)
// console.log(george)

// const percentageOfWorld = (countryPopulation)=>{
//     const worldPopulation = 7900
//     return (countryPopulation/worldPopulation)*100
// }

// const decribePopulation = (country, population)=>{
//     const countryPopulation = percentageOfWorld(population)
//     return `${country} has a population of ${population} million people, which is about ${countryPopulation}% of the world.`
// }
// const nigeria = console.log(decribePopulation('Nigeria', 200))
// const china = console.log(decribePopulation('China', 1440))
// const america = console.log(decribePopulation('America', 250))

// const calcAverage = (score1, score2, score3) => {
//     const averageScore = (score1+score2+score3)/3
//     return averageScore
// }

// const dolphins = calcAverage(85, 54, 41)
// const koalas = calcAverage(23, 34, 27)

// const checkWinner = (averageDolphins, averageKoalas) => {
//     if (averageDolphins >= averageKoalas * 2){
//         return console.log(`Dolphins win (${averageDolphins} vs ${averageKoalas})`)
//     }else if (averageDolphins * 2 <= averageKoalas){
//         return console.log(`Koalas win (${averageKoalas} vs ${averageDolphins})`)
//     }else {
//         return `Nobody wins`
//     }
// }

// console.log(checkWinner(dolphins, koalas))

// const year = new Array(1997, 1998, 1999, 2000, 2001)
// console.log(year)

// const populationArray = [200, 1400, 700, 9]
// console.log(populationArray.length === 4)

// const percentageOfWorld = (countryPopulation)=>{
//     const worldPopulation = 7900
//     return (countryPopulation/worldPopulation)*100
// }

// const percentages = [(percentageOfWorld(populationArray[0])), (percentageOfWorld(populationArray[1])), (percentageOfWorld(populationArray[2])), (percentageOfWorld(populationArray[populationArray.length - 1]))]
// console.log(percentages)

// const neighbours = ['Cameroon', 'Benin Republic', 'Chad', 'Atlantic Ocean']
// neighbours.push('Utopia')
// neighbours.pop()
// if (neighbours.includes('Germany')){
//      console.log(`It includes Germany`)
// }else {
//      console.log(`Germany is not an African country`)
// }
// neighbours[2] = 'Ghana'
// console.log(neighbours)

// const calcTip = (bill) => {
//     let tip;
//     if (bill >= 50 && bill <= 300){
//         tip = 0.15 * bill
//     }else {
//         tip = 0.2 * bill
//     }
//     return tip
// }

// const testData = [125, 555, 44]
// const tips = [calcTip(testData[0]), calcTip(testData[1]), calcTip(testData[testData.length - 1])]
// console.log(tips)

// const myCountry = {
//     country: 'Antari',
//     capital: 'Andromeda',
//     population: 700,
//     language: 'Iskolo',
//     neighbours: ['Pantra', 'Boscan', 'Pitroli', 'Astavia Ocean'],
//     countryAge: function () {
//         this.currentYear = 3506
//         this.independenceYear = 2035
//         return this.currentYear - this.independenceYear
//     },
//     independent: true,
//     decribeCountry : function () {
//         return (`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length -1} neighbouring countries and a capital called ${this.capital}`)
//     }

// }
// myCountry.countryAge()
// console.log(myCountry.independenceYear)
// console.log(`${myCountry.country} has ${myCountry.neighbours.length} neighbours, and his favorite neighbour is ${myCountry.neighbours[3]}`)
// console.log(`${myCountry.country} has been independent for ${myCountry.countryAge()} years, and is  ${myCountry.independent ? 'independent' : 'not independent'}`)
// console.log(myCountry.population = 702)
// console.log(myCountry['population'] = 700)
// console.log(myCountry.decribeCountry())
// console.log(myCountry.currentYear)

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length - 1} neighbouring countries and a capital called ${myCountry.capital}`)

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     height: 1.69,
//     weight: 78,
//     calcBMI: function (){
//         this.bMI = this.weight /(this.height ** 2)
//         return this.bMI
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     height: 1.95,
//     weight: 92,
//     calcBMI: function (){
//         this.bMI = this.weight /(this.height ** 2)
//         return this.bMI
//     }
// }
// mark.calcBMI()
// john.calcBMI()

// mark.calcBMI() > john.calcBMI() ? console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s BMI (${john.calcBMI()})`) :
// console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s BMI (${mark.calcBMI()})`)

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter ${voter} is currently voting`)
// }

// const populationArray = [200, 1400, 700, 9]
// console.log(populationArray.length === 4)

// const percentageOfWorld = (countryPopulation)=>{
//     const worldPopulation = 7900
//     return (countryPopulation/worldPopulation)*100
// }

// const percentages = [(percentageOfWorld(populationArray[0])), (percentageOfWorld(populationArray[1])), (percentageOfWorld(populationArray[2])), (percentageOfWorld(populationArray[populationArray.length - 1]))]
// console.log(percentages)
// let percentage2 = []
// for (let i = 0; i < populationArray.length; i++){
//     percentage2.push(percentageOfWorld(populationArray[i]))
// }
// console.log(percentage2)

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++)
// for(let j = 0; j < listOfNeighbours[i].length; j++)
// console.log(`Neighbour: ${listOfNeighbours[i][j]}`);

// const sumMultiples = (num)=>{
//     let val = 0
//     for (let i = 1; i <= num; i++){
//         if (i % 3 === 0 || i % 5 === 0){
//            val += i
//         }
//     }return val
// }
// console.log(sumMultiples(10))

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const calcTip = (bill) => {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = 0.15 * bill;
//   } else {
//     tip = 0.2 * bill;
//   }
//   return tip;
// };

// let tips = [];

// let total = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   total.push(tip + bills[i]);
// }

// console.log(tips, total);

// const x = 10;
