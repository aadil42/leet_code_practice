/**
 * Binary Search
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    
    potions.sort((a,b) => a-b);

    const findEarliestOccurance = (currSpell) => {

        let minPos;
        let left = 0;
        let right = potions.length - 1;

        while(left <= right) {

            const mid = left + Math.floor((right-left)/2);
            
            if(currSpell * potions[mid] >= success) {
                minPos = mid
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return minPos;
    }

    const pairs = [];
    for(let i = 0; i < spells.length; i++) {
        firstOccuranceIdx = findEarliestOccurance(spells[i]);

        if(firstOccuranceIdx === undefined) {
            pairs.push(0);
            continue;
        }

        pairs.push(potions.length - firstOccuranceIdx);
    }

    return pairs;
};