/**
 * HashMap
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/   
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    
    const rankHash = {};
    let sortedArr = arr.map((n) => n).sort((a,b) => a-b);
    sortedArr = new Set(sortedArr);
    sortedArr = [...sortedArr];

    for(let i = 0; i < sortedArr.length; i++) {
        rankHash[sortedArr[i]] = i+1;
    }

    return arr.map((n) => rankHash[n]);
};