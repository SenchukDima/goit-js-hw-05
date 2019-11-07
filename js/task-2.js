"use strict";

const User = function({name, age, followers }) {
  this.name = name;
  this.age = age;
  this.followers = followers;
};

User.prototype.getInfo = function() {
  console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
};


const maango = new User({ name: 'Mango', age: 2, followers: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 followers

const pooly = new User({ name: 'Poly', age: 3, followers: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 followers