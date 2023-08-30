let inventory = require('../inventory.js')
const LastCarId = require('../Problem2.js')
const lastCar = LastCarId(inventory)

console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`)