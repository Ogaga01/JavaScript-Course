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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movement) {
  containerMovements.innerHTML = ''

  movement.forEach((move, index) => {
    const type = move > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__value">${move}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html)
  })
}
displayMovements(account2.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
movements.forEach((move, i) => {
  move > 0 ? console.log(`Move ${i + 1}: You deposited ${move}$ to the bank`) :
    console.log(`Move ${i + 1}: You withdrew ${Math.abs(move)}$ from the bank`)
})
//////////////
// Coding Challenge
// function checkDogs(dogsJulia, dogsKate) {
//   const juliaDogs = dogsJulia.slice(1, -2)
//   const comboDogs = [...juliaDogs, ...dogsKate]
//   comboDogs.forEach((dog, i) => {
//     dog >= 3 ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`) :
//     console.log(`Dog number ${i + 1} is still a puppy🐶`)
//   })
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// movements.map((move, i) => {
//   if (move > 0) {
//     return `Move ${i + 1}: You deposited ${move}$ to the bank`
//   } else {
//     return `Move ${i + 1}: You withdrew ${Math.abs(move)}$ from the bank`
//   }
// })

function createUserName(accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => {
        name[0]
      })
      .join('')
  })
}
