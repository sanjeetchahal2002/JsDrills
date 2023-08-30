// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
const model_arr = []
function getSorted(inventory){
   for(let i = 0;i < inventory.length;i++){
    model_arr.push(inventory[i].car_model)
   }
   return model_arr.sort()
}
module.exports = getSorted