/**
 * Brute Force | Set
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/naming-a-company/
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    
    const uniqueNameSet = new Set(ideas);

    const swapNames = (name1, name2) => {

        name1 = name1.split('');
        name2 = name2.split('');

        name1Latter = name1[0];
        name2Latter = name2[0];

        name1[0] = name2Latter;
        name2[0] = name1Latter;

        return [name1.join(''), name2.join('')];
    }

    let totalDistinctNames = 0;
    for(let i = 0; i < ideas.length; i++) {
        for(let j = i+1; j < ideas.length; j++) {
            const [newName1, newName2] = swapNames(ideas[i], ideas[j]);
            if(!uniqueNameSet.has(newName1) && !uniqueNameSet.has(newName2)) totalDistinctNames++;
        }
    }
    return totalDistinctNames*2;
};