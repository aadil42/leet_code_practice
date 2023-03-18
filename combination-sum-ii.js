/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// bad solution
var combinationSum2 = function(candidates, target) {
    
    candidates.sort((a,b) => a - b);
    const result = [];
    function dfs(remaining, candidate, index) {
        if(remaining === 0) {
            result.push(candidate.slice(0));
            return;
        }
        if(remaining <= 0) return;
        for(let i = index; i < candidates.length; i++) {
            candidate.push(candidates[i]);
            dfs(remaining - candidates[i], candidate, i+1);
            candidate.pop();
        }
    }

    dfs(target, [], 0);

    const unique = new Set();
    for(let i = 0; i < result.length; i++) {
        let hash = '';
        for(let j = 0; j < result[i].length; j++) {
            hash += result[i][j] + '#';
        }
        hash = hash.split('#');
        hash.pop();
        hash = hash.join('#');
        unique.add(hash);
    }
    // console.log(unique);
    const output = [];
    for(hash of unique) {
        hash = hash.split('#');
        const temp = [];
        for(let i = 0; i < hash.length; i++) {
            temp.push(+hash[i]);
        }
        output.push(temp);
    }

    return output;
};

const candidates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const target = 30;

console.log(combinationSum2(candidates, target));