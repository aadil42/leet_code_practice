/**
 * DP | Stack | Memoization | Recursion
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/valid-parenthesis-string/
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    
    const calculated = new Map();

    const dfs = (i, balancer) => {
        const hash = `${i}-${balancer}`;
        if(calculated.has(hash)) return calculated.get(hash);
        if(i === s.length) return balancer === 0;

        if(s[i] === "*") {                           // this condition where balancer has to be > 0 inorder to take this ")" into account is the key insight. This condition is in the last case also.
            const validity = dfs(i+1, balancer+1) || (balancer > 0 && dfs(i+1, balancer-1)) || dfs(i+1, balancer);
            calculated.set(hash, validity);
            return validity;
        }
        if(s[i] === "(") {
            const validity = dfs(i+1, balancer+1);
            calculated.set(hash, validity);
            return validity;
        }
        if(s[i] === ")") {
            const validity = balancer > 0 && dfs(i+1, balancer-1);
            calculated.set(hash, validity);
            return validity;
        }
    }

    return dfs(0, 0);
};

/**
 * 
 * Recursion/memoization
 * 
 * Time O(n^3) | Space O(n^2)
 * @param {string} s
 * @return {boolean}
 */
var checkValidStringRecursion0 = function(s) {
    
    const hashSet = new Map();
    function dfs(validCount, i) {
        const hash = validCount + '-' + i;
        if(hashSet.has(hash)) return hashSet.get(hash);
        if(i === s.length) {
            if(validCount === 0) return true;
            return false;
        }

        if(s[i] === '*') {
            // branch off
            const result = dfs(validCount+1, i+1)  ||
                           dfs(validCount, i+1) ||
                           (validCount > 0 && dfs(validCount-1, i+1));
            hashSet.set(hash, result);
            return result;
        }

        if(s[i] === '(') {
            const result = dfs(validCount+1, i+1);
            hashSet.set(hash, result);
            return result;
        }
        if(s[i] === ')') {
            const result = validCount > 0 && dfs(validCount-1, i+1);
            hashSet.set(hash, result);
            return result;
        }
    }

    return dfs(0, 0);
};


/**
 * 
 * Time O(n) | Space O(1)
 * @param {string} s
 * @return {boolean}
 */
var checkValidString1 = function(s) {
    
    let chooseLeft = 0;
    let chooseRight = 0;
  
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            chooseLeft += 1;
            chooseRight += 1;
        }
        if(s[i] === ')') {
            chooseLeft -= 1;
            chooseRight -= 1;
        }
        if(s[i] === '*') {
            chooseLeft += 1;
            chooseRight -= 1;
        }
        if(chooseLeft < 0) return false;
        if(chooseRight < 0) chooseRight = 0;
    }
  
    return chooseRight === 0;
  };