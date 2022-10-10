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

// Coding Challenge 1
const Car = function (make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function (){
    this.speed += 10
    console.log(this.speed)
}

Car.prototype.brake = function () {
    this.speed -= 5
    console.log(this.speed)
}

const camaro = new Car('Chevrolet', 360)
camaro.accelerate()
camaro.brake()

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)

class PersonCl {
    constructor(fullname, birthyear) {
        this.fullname = fullname
        this.birthyear = birthyear
    }

    calcAge() {
        const currentYear = new Date().getFullYear()
        return currentYear - this.birthyear
    }

    set fullname(name) {
        if (name.includes(' ')) {
            this._fullname = name;
        } else {
            alert('input your first and last name')
        }
    }

    get fullname() {
        return this._fullname
    }

    greet() {
        console.log(`hey ${this.fullname}`)
    }
}

const debs = new PersonCl('Deborah Asein', 1997)
console.log(debs)
debs.greet()
