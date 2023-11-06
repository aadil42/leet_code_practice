/**
 * Iteration
 * Time O(flowerbed.length) | Space O(1)
 * https://leetcode.com/problems/can-place-flowers/
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    for(let i = 0; i < flowerbed.length; i++) {
        if(!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]) {
            n--;
            flowerbed[i] = 1;
        }
    }

    return n <= 0;
};