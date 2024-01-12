/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to
 * 
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    
    const groupHash = new Map();
    groupSizes.forEach((group, index) => {
        const g = groupHash.get(group) || [];
        groupHash.set(group, [...g, index]);
    });

    const result = [];
    for(const [key, value] of groupHash) {
        while(value.length) {
            // console.log(value);
            const group = value.splice(0, key);
            result.push(group);
        }
    }

    return result;
};