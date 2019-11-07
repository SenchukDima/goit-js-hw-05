"use strict";

const Storage = function([...items]) {
  this.items = items;
};

Storage.prototype.getItems = function() {
  console.log(this.items);
};

Storage.prototype.addItem = function(item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function(item) {
  let index = this.items.indexOf(item); 
    if (index >= 0) this.items.splice(index, 1);
    return this.items;
};

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);


const items = storage.getItems();
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]