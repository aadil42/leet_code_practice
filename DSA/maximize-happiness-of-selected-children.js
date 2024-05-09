/**
 * Sorting 
 * Time O(n*log(n)) | Space O(log(n)) (Because of the recursive tree height)
 * https://leetcode.com/problems/maximize-happiness-of-selected-children/
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    
    let happinessFactor = 0;
    happiness.sort((a,b) => b-a);


    let maxHappiness = 0;
    for(let i = 0; i < happiness.length; i++) {
        const childHappiness = happiness[i] + happinessFactor;
        if(childHappiness > 0 && k > 0) maxHappiness += childHappiness;
        k--;
        happinessFactor--;
    }  

    return maxHappiness;
};