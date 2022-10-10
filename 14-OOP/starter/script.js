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

    //Static methods
    static hey() {
        console.log('Hey There 👋')
    }
}

const debs = new PersonCl('Deborah Asein', 1997)
console.log(debs)
debs.greet()

//Coding Challenge2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    return this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120)

console.log(ford.speedUS);
console.log(ford.accelerate());
ford.speedUS = 50
console.log(ford)

// Inheritance
const Student = function (firstname, lastname, birthyear, course) {
    Person.call(this, firstname, lastname, birthyear)
    this.course = course
}
Student.prototype.constructor = Student
Student.prototype = Object.create(Person.prototype)
const mike = new Student('Mike', 'Scott', 2007, 'Geography')
console.log(mike.calcAge());

