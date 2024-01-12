/**
 * Merge sort.
 * Time O(n*log(n)*log(n))(not sure about it.) | Space O(n*log(n))
 * https://leetcode.com/problems/largest-number/
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {

    if(Math.max(...nums) === 0) return "0";

    const merge = (left, right) => {

        const arr = [];
        while(left.length && right.length) {
            if(left[0] + "" + right[0] > right[0] + "" + left[0]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        }

        return [...arr, ...left, ...right];
    }

    const mergeSort = (arr) => {
        if(arr.length < 2) return arr;
        const mid = Math.floor(arr.length/2);
        return merge(mergeSort(arr.splice(0, mid)), mergeSort(arr));
    }

    return mergeSort(nums).join("");
}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the larger combo. 
        if (left[0] + "" + right[0] > right[0] + "" + left[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}

const arr = [10,2,9,39,17];
console.log(mergeSort(arr));