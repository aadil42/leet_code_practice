/**
 * Bit Masking | Recursion | DP | Math
 * Time O(n^2 * 2^n * log(m))
 * https://leetcode.com/problems/maximize-score-after-n-operations/ (not that hard problem once you wrap your head around for loop and bit-masking in recursion)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    
    const cache = new Map();

    const gcd = (num1, num2) => {
        if(num2 > num1) {
            [num1, num2] = [num2, num1];
        }
        if(!(num1%num2)) return num2;

        return gcd(num2, num1%num2);
    }

    const dfs = (level, mask) => {
        if(cache.has(mask)) return cache.get(mask);

        for(let i = 0; i < nums.length; i++) {
            for(let j = i+1;  j < nums.length; j++) {

                if((1 << i) & mask || (1 << j) & mask) continue;

                const newMask = mask | (1 << i) | (1 << j);
                const currentGcd = level * gcd(nums[i], nums[j]);

                cache.set(mask, 
                         Math.max( 
                                  (cache.get(mask) || 0), 
                                  currentGcd + dfs(level+1, newMask) 
                                  )
                         );
            }
        }

        return (cache.get(mask) || 0);
    }

    return dfs(1, 0);
};