// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

let n = 0
function getOldCars(res){
    for(let i = 0; i< res.length;i++){
        if(res[i] < 2000){
            n++
        }
    }
    return n
}

module.exports = getOldCars