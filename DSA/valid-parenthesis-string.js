/**
 * 
 * Recursion/memoization
 * 
 * Time O(n^3) | Space O(n^2)
 * @param {string} s
 * @return {boolean}
 */
var checkValidStringRecursion = function(s) {
    
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
var checkValidString = function(s) {
    
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