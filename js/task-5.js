"use strict";

class Car {
  static getSpecs(car) {
    console.log(car);
  }
 
  constructor({maxSpeed, speed = 0, isOn = false, distance = 0, price}) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    return this.isOn = true;
  }

  accelerate(value) {
    if (this.speed < this.maxSpeed) {
      return this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
    return  this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn = true) {
    return this.distance += (hours * this.speed);
    }
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
 }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();


Car.getSpecs(mustang);  
// // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000