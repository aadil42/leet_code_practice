/**
 * Brute force.
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/string-compression-ii
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
    
    const runLengthEncoded = (str) => {
        const encodedStr = [];
        let left = 0;
        let right = 1;

        while(right < str.length + 1) {
            while(str[left] === str[right]) {
                right++;
            }
            const len = right - left;
            if(len > 1) {
                encodedStr.push(str[left], len);
            } else {
                encodedStr.push(str[left])
            }
            
            left = right;
            right++;
        }

        return encodedStr.join("").length;
    }

    let min = Infinity;
    const dfs = (i, str, deleteLeft) => {
        // console.log(str)
        const hash = `${i}-${deleteLeft}`;
        
        if(i === s.length) {
            min = Math.min(min, runLengthEncoded(str))
            return;
        }
        if(deleteLeft > 0) {
            return Math.min(dfs(i+1, str+s[i], deleteLeft), dfs(i+1, str, deleteLeft-1));
        }
        return dfs(i+1, str+s[i], deleteLeft);
    }

    dfs(0, "", k);
    return min;
};