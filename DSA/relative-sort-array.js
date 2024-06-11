/**
 * Sorting | Hashing 
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/relative-sort-array/
 * 
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    const arrToIdx = new Map();
    
    for(let i = 0; i < arr2.length; i++) {
        arrToIdx.set(arr2[i], i);
    }

    const arr3 = arr1.filter((num) => !arrToIdx.has(num));
    arr3.sort((a,b) => a-b);

    const arr4 = [];

    for(let i = 0; i < arr1.length; i++) {
        const num = arr1[i];
        const idx = arrToIdx.get(num);
        
        if(idx === undefined) continue;

        if(arr4[idx]) {
            arr4[idx].push(num);
        } else {
            arr4[idx] = [num];
        }
    }

    return [...arr4.flat(), ...arr3];
};