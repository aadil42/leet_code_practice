/**
 * Hashmap | Counting
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/divide-players-into-teams-of-equal-skill
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    
    const numFrequency = {};
    for(let i = 0; i < skill.length; i++) {
        const num = skill[i];
        numFrequency[num] = (numFrequency[num] && numFrequency[num]+1) || 1;
    }

    const numOfTeams = skill.length/2;
    const target = skill.reduce((acc, num) => acc+num, 0)/numOfTeams;

    let result = 0;
    for(let i = 0; i < skill.length; i++) {
        const num = skill[i];
        const numCompliment = target  - skill[i];
        if(numFrequency[num] === undefined) return -1;
        if(numFrequency[numCompliment] === undefined) return -1;
        if(num === numCompliment && numFrequency[num]%2) return -1;
        if(numFrequency[num] !== numFrequency[numCompliment]) return -1;
        if(numFrequency[num] === 0 && numFrequency[numCompliment] === 0) continue;

        numFrequency[num] -= 1;
        numFrequency[numCompliment] -= 1;
        result += num*numCompliment;
    }

    return result;
};