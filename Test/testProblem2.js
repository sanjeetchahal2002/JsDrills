let inventory = require('/home/sanjeet/JsDrills/inventory.js')
const LastCarId = require('/home/sanjeet/JsDrills/Problem2js')
const lastCar = LastCarId(inventory)

console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`)