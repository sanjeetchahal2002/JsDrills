const inventory = require('../inventory')
const getYears = require('../Problem4')
const res =  getYears(inventory)
const getOldCars= require('../Problem5')

const n = getOldCars(res)

console.log("Number of Cars Before 2000 : " + n)