/**
 * Hashing 
 * Time O(n*26^2) | Space O(n);
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {

    const sets = [];

    for(let i = 0; i < 26; i++) {
        sets.push(new Set());
    }

    for(let i = 0; i < ideas.length; i++) {
        const firstLatter = ideas[i][0];
        sets[firstLatter.charCodeAt(0) - 97].add(ideas[i].slice(1));
    }

    const same = [];
    for(let i = 0; i < 26; i++) {
        same.push(Array(26).fill(0));
    }

    for(let i = 0; i < 26; i++) {
        for(let suffix of sets[i]) {
            for(let j = i+1; j < 26; j++) {
                if(sets[j].has(suffix)) same[i][j]++;
            }
        }
    }

    let total = 0;
    for(let i = 0; i < 26; i++) {
        for(let j = i+1; j < 26; j++) {
            total += (sets[i].size - same[i][j]) * (sets[j].size - same[i][j]) * 2;
        }
    }

    return total;
};

/**
 * Brute Force | Set
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/naming-a-company/
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames1 = function(ideas) {
    
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