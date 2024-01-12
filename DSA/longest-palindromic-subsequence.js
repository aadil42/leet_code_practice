/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    
    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while(left < right) {
            if(str[left] !== str[right]) return 0;
            left++;
            right--;
            console.log(left,right);
        }

        return str.length;
    }
    const dfs = (i, subString) => {
        console.log(i, subString);
        if(i === s.length) return isPalindrome(subString);
        return Math.max(dfs(i+1, subString + s[i]), dfs(i+1, subString));
    }

    return dfs(0,'');
};

const s = 'bbbab';
console.log(longestPalindromeSubseq(s));