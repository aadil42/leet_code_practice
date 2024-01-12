/**
 * Bit manupilation
 * Time O(n*log(n)) | Space O(n) // because of merge sort.
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
 * 
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

    arr = arr.sort((a,b) => {
        let a1s = 0;
        let b1s = 0;
    
        for(let i = 0; i < 14; i++) {
            const checker = 1 << i;
            const isa1 = (a & checker) === checker;
            if(isa1) a1s++;
    
            const isb1 = (b & checker) === checker;
            if(isb1) b1s++;
        }
    
        if(a1s === b1s) return a - b;
        return a1s - b1s;
    });
    
    return arr;
    };