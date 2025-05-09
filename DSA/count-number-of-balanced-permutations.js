/**
 * Recursion | BackTracking | Brute-force
 * Time O(n^n) | Space O(n)
 * https://leetcode.com/problems/count-number-of-balanced-permutations
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function(num) {
    
    const distinctPerm = new Set();

    const dfs = (currSum, add, takenDigitState, perm) => {

        if (takenDigitState.size === num.length && 
            currSum === 0 && 
            !distinctPerm.has(perm)) {
                distinctPerm.add(perm);
                return 1;
            }
        if (takenDigitState.size === num.length) return 0;
        
        let total = 0;
        for (let i = 0; i < num.length; i++) {
            if (takenDigitState.has(i)) continue;

            if (add) {
                takenDigitState.add(i);
                total += dfs(currSum + +num[i], !add, takenDigitState, perm+num[i]);
                takenDigitState.delete(i)
            } else {
                takenDigitState.add(i);
                total += dfs(currSum - +num[i], !add, takenDigitState, perm+num[i]);
                takenDigitState.delete(i)
            }
        } 

        return total;
    }

    return dfs(0, true, new Set(), "");
};