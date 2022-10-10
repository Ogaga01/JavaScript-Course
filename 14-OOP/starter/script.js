'use strict';

const Person = function (firstname, lastname, birthyear) {
    this.firstname = firstname
    this.lastname = lastname
    this.birthyear = birthyear
}

const gee = new Person('Ogaga', 'Iyara', 1928)
const nick = new Person('Nicklaus', 'Mikelson', 1000)
console.log(gee, nick)

Person.prototype.calcAge = function () {
    const currentYear = new Date().getFullYear()
    return currentYear - this.birthyear
}

console.log(gee.calcAge(), nick.calcAge)
