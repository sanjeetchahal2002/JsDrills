const inventory = require('../inventory.js')
const getBMWAndAudi = require('../Problem6.js')

const BMWAndAudi = getBMWAndAudi(inventory)

const jsonString = JSON.stringify(BMWAndAudi,null,2);

console.log(jsonString);
