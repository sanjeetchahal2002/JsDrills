let inventory = require('/home/sanjeet/JsDrills/inventory.js'); 
const findCarById = require('/home/sanjeet/JsDrills/Problem1.js');
const car = findCarById(inventory, 33);

console.log(`Car ${car.id} is a ${car.car_year} ${car.car_make} ${car.car_model}`);
