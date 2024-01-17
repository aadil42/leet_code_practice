/**
 * Hashing | Counting
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/unique-number-of-occurrences/
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    const frequency = {};

    for(let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] && frequency[arr[i]] + 1) || 1;
    }

    const uniqueOccurances = new Set();

    for(const key in frequency) {
        occurance = frequency[key];
        if(uniqueOccurances.has(occurance)) return false;
        uniqueOccurances.add(occurance);
    }

    return true;
};