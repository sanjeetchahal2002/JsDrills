let inventory = require('../inventory.js'); 
const findCarById = require('../Problem1.js');
const car = findCarById(inventory, 33);

console.log(`Car ${car.id} is a ${car.car_year} ${car.car_make} ${car.car_model}`);
