'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // const account = accounts.find((acc) => {
// //  return acc.owner === 'Jessica Davis'
// // })
// // console.log(account)

// // for (const acc of accounts) {
// //   if (acc.owner === 'Jessica Davis') {
// //     console.log(acc)
// //   }
// // }

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

function createUserName(accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
console.log(createUserName(accounts));

// function displaySummary(acc) {
//   const calcIncomeSummary = acc.movements
//     .filter(move => {
//       return move > 0;
//     })
//     .reduce((acc, move) => {
//       return acc + move;
//     }, 0);
//   labelSumIn.textContent = `${calcIncomeSummary}???`;

//   const calcWithdrawalSummary = Math.abs(
//     acc.movements
//       .filter(move => {
//         return move < 0;
//       })
//       .reduce((acc, move) => {
//         return acc + move;
//       }, 0)
//   );
//   labelSumOut.textContent = `${calcWithdrawalSummary}???`;

//   const interest = acc.movements
//     .filter(move => {
//       return move > 0;
//     })
//     .map(move => {
//       return (move * acc.interestRate) / 100;
//     })
//     .filter(move => {
//       return move > 1;
//     })
//     .reduce((acc, move) => {
//       return acc + move;
//     }, 0);
//   labelSumInterest.textContent = `${interest}???`;
// }

// const displayBalance = (acc) => {
//   acc.balance = acc.movements.reduce((acc, move) => {
//     return acc + move;
//   });
//   labelBalance.textContent = `${acc.balance}???`;
// };

// const displayMovements = function (movement) {
//   containerMovements.innerHTML = '';

//   movement.forEach((move, index) => {
//     const type = move > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       index + 1
//     } ${type}</div>
//         <div class="movements__value">${move}???</div>
//       </div>
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

// let currentUser;


// btnLogin.addEventListener('click', e => {
//   e.preventDefault();
//   let userName = inputLoginUsername.value;
//   let pin = inputLoginPin.value;
  
//   // currentUser = accounts.find((acc) => {
//   //   return acc.userName === userName
//   // })
//   // console.log(currentUser);
//   if (userName === '' || pin === '') {
//     console.log('Invalid Credentials')
//   } else {
//   //   currentUser = accounts.find(acc => {
//   //     return acc.userName === userName && acc.pin === pin;
//   //   });
//   //   displayMovements(currentUser.movements);
//   // }
//       accounts.forEach((acc) => {
//         if (acc.userName === userName && acc.pin === Number(pin)) {
//           currentUser = acc
//           return currentUser
//         }
//       })
//     displayMovements(currentUser.movements);
//     containerApp.classList.add('show');
//     labelWelcome.textContent = `Welcome User ${
//       currentUser.owner.split(' ')[0]
//       }`;
//     displaySummary(currentUser);
//     displayBalance(currentUser);
//   }
//   inputLoginUsername.value = '';
//   inputLoginPin.value = '';
// });

// btnTransfer.addEventListener('click', (e) => {
//   e.preventDefault()
//   const amount = inputTransferAmount.value
//   const recipient = accounts.find((acc) => {
//     return acc.userName === inputTransferTo.value;
//   })

//   if (recipient === '' || amount === '') {
//     console.log('Invalid Credentials');
//   } else if (
//     currentUser.balance >= amount &&
//     recipient &&
//     recipient.userName !== currentUser.userName &&
//     amount > 0
//   ) {
//     recipient.movements.push(Number(amount));
//     currentUser.movements.push(-Number(amount));
//   }
//   console.log(currentUser, recipient)
//   displaySummary(currentUser);
//   displayBalance(currentUser);
//   displayMovements(currentUser.movements);
//   inputTransferAmount.value = '';
//   inputTransferTo.value = '';
// })

// btnLoan.addEventListener('click', e => {
//   e.preventDefault();
//   const amount = Number(inputLoanAmount.value);
//   if (amount > 0 &&
//     currentUser.movements.some(move => {
//       return move * 0.1;
//     })
//   ) {
//     currentUser.movements.push(amount);
//   }
//   displaySummary(currentUser);
//   displayBalance(currentUser);
//   displayMovements(currentUser.movements);
// });

// btnClose.addEventListener('click', (e) => {
//   e.preventDefault()
//   const user = inputCloseUsername.value
//   const pin = inputClosePin.value
  
//   if (user === currentUser.userName && Number(pin) === currentUser.pin) {
//     const currentIndex = accounts.findIndex(acc => {
//       return acc.userName === currentUser.userName;
//     });
//     console.log(currentIndex);
//     accounts.splice(currentIndex, 1)
//     containerApp.classList.remove('show');
//     console.log(accounts)
//   }
//   inputCloseUsername.value = '';
//   inputClosePin.value = '';
// })


// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// /////////////////////////////////////////////////
// // movements.forEach((move, i) => {
// //   move > 0 ? console.log(`Move ${i + 1}: You deposited ${move}$ to the bank`) :
// //     console.log(`Move ${i + 1}: You withdrew ${Math.abs(move)}$ from the bank`)
// // })
// //////////////
// // Coding Challenge
// // function checkDogs(dogsJulia, dogsKate) {
// //   const juliaDogs = dogsJulia.slice(1, -2)
// //   const comboDogs = [...juliaDogs, ...dogsKate]
// //   comboDogs.forEach((dog, i) => {
// //     dog >= 3 ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`) :
// //     console.log(`Dog number ${i + 1} is still a puppy????`)
// //   })
// // }
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// // movements.map((move, i) => {
// //   if (move > 0) {
// //     return `Move ${i + 1}: You deposited ${move}$ to the bank`
// //   } else {
// //     return `Move ${i + 1}: You withdrew ${Math.abs(move)}$ from the bank`
// //   }
// // })

// const allMovemoents = accounts.map((acc) => {
//   return acc.movements
// })

// console.log(allMovemoents)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // const deposits = movements.filter((move) => {
// //   return move > 0
// // })
// // console.log(deposits)
// // const withdrawals = movements.filter((move) => {
// //   return move < 0
// // })
// // console.log(withdrawals)

// // const balance = movements.reduce((acc, move, i, arr) => {
// //   return acc + move
// // })
// // console.log(balance)

// // const max = movements.reduce((acc, move) => {
// //   if (acc > move) {
// //     return acc
// //   } else {
// //     return move
// //   }
// // }, movements[0])

// // console.log(max)

// // Coding Challenge

// // function calcAverageHumanAge(arr) {
// //   const humanAge = arr
// //     .map(dogAge => {
// //       if (dogAge <= 2) {
// //         return 2 * dogAge;
// //       } else {
// //         return 16 + dogAge * 4;
// //       }
// //     })
// //     .filter(age => {
// //       return age >= 18;
// //     })
// //     .reduce((acc, dog, i, ar) => acc + dog / ar.length, 0);
// //   return humanAge
// // }
// // //


// // const z = Array.from({ length: 100 }, () => {
// //   return Math.trunc(Math.random()*6 + 1)
// // })
// // console.log(z)
// // const count = {}

// // z.forEach((item) => {
// //   count[item] = (count[item] || 0) + 1
// // })

// // console.log(count)


// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// const displayFood = (arr) => {
//   arr.forEach((dog) => {
//   dog.recommendedFood = dog.weight ** 0.75 * 28;
// })
// }

// displayFood(dogs)
// console.log(dogs)

// const sarahDog = dogs.find((dog) => {
//   return dog.owners.includes('Sarah')
// })
// if (sarahDog.curFood > sarahDog.recommendedFood) {
//   console.log(`${sarahDog.owners[0]}'s dog eats too much`)
// } else {
//   console,log(`${sarahDog.owners[0]}'s dog eats too little`)
// }

// const ownersEatTooMuch = dogs.filter((dog) => {
//   return dog.curFood > dog.recommendedFood
// }).map((dog) => {
//   return dog.owners
// }).flat()
// console.log(ownersEatTooMuch)

// const ownersEatTooLittle = dogs.filter((dog) => {
//   return dog.curFood < dog.recommendedFood
// }).map((dog) => {
//   return dog.owners
// }).flat()
// console.log(ownersEatTooLittle)
