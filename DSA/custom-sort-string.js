/**
 * Sorting | Hashing
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/custom-sort-string
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    
    const rank = {};

    for(let i = 0; i < order.length; i++) {
        rank[order[i]] = i;
    }

    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(97+i); 
        if(rank[char] === undefined) {
            rank[char] = Infinity;
        }
    }

    return s.split("").sort((a, b) => {
        return rank[a] - rank[b];
    }).join("");

};