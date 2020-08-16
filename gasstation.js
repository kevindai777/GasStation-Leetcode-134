//Objective is to see whether it's possible to start at an index and move in a 
//clockwise direction, adding gas from the 'gas' array and losing gas from the 'cost'
//array. If we ever run out of gas along the route that index is not possible.

let gas = [1,2,3,4,5], cost = [3,4,5,1,2]


//O(n) solution where n is the length of either array
//we try every possible index with 'currTank' and if it fails, we reset with
//a new index

let totalTank = 0
let currTank = 0
let start = 0

for (let i = 0; i < gas.length; i++) {
    totalTank += gas[i] - cost[i]
    currTank += gas[i] - cost[i]
    
    //If we run out of gas at this station, try again at new index
    if (currTank < 0) {
        start = i + 1
        currTank = 0
    }
}

//Check if there's even a valid solution
return totalTank < 0 ? -1 : start