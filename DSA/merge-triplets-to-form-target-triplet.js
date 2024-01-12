/**
 * 
 * Greedy 
 * Time O(n) | Space O(1);
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */

// brute force for some reason it's not working for this parameter
// triplets =
// [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]
// target =
// [5,5,5]
var mergeTriplets = function(triplets, target) {
    

    for(let i = 0; i < triplets.length; i++) {
        for(let j = i+1; j < triplets.length; j++) {
            if(checkTriplet(triplets[i], triplets[j])) return true;
        }
    }

    function checkTriplet(arr1, arr2) {
        const result = [];
        for(let i = 0; i < arr1.length; i++) {
            result.push(Math.max(arr1[i], arr2[i]));
        }
        for(let i = 0; i < target.length; i++) {
            if(result[i] !== target[i]) return false;
        }

        return true;
    }

    return false;
};


// optimal approch
var mergeTriplets = function(triplets, target) {
    
    const goodSet = new Set();

    for(let i = 0; i < triplets.length; i++) {
        if(triplets[i][0] > target[0] ||
           triplets[i][1] > target[1] ||
           triplets[i][2] > target[2] 
        ) continue;

        for(let j = 0; j < 3; j++) {
            console.log(triplets[i][j], target[j]);
            if(triplets[i][j] === target[j])  goodSet.add(j);
        }
    }
    return goodSet.size === 3;
};