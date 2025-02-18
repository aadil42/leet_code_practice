/** 
 * Sliding Winidow | Hashmap
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/fruit-into-baskets/
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    
    let freq = new Map();
    let max = 0;
    let left = 0;
    let right = 0;

    while (right < fruits.length) {

        const fruitType = fruits[right];
        const preCount = freq.get(fruitType) || 0;
        freq.set(fruitType, preCount+1);

        while (left < right && freq.size > 2) {
            const leftFruitType = fruits[left];
            const leftFruitTypeCount = freq.get(leftFruitType);
            freq.set(leftFruitType, leftFruitTypeCount-1);

            if (freq.get(leftFruitType) === 0) {
                freq.delete(leftFruitType);
            }

            left++;
        }

        max = Math.max(max, right-left+1);
        right++;
    }

    return max;
};