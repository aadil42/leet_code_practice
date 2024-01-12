/**
 * Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/maximum-number-of-coins-you-can-get
 * 
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {

    piles.sort((a,b) => a-b);
    let mePointer = piles.length-2;
    let bobPointer = 0;

    let maxScore = 0;

    while(bobPointer < mePointer) {
        maxScore += piles[mePointer];
        mePointer -= 2;
        bobPointer += 1;
    }

    return maxScore;
};