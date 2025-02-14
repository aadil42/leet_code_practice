/**
 * Time O(n^n) | Space O(2^n) | (I was confused between n^n and 2^n for time-complexity. But I think it's n^n)
 * Recursion | Backtracking
 * https://leetcode.com/problems/palindrome-partitioning
 * @param {string} s    
 * @return {string[][]}
 */
var partition = function(s) {

    const isPalindrome = (start, end) =>  {
        while(start < end) {
            if(s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true;
    }   
    
    const allSubs = [];
    const dfs = (start, palindromes) => {
        if(start === s.length) allSubs.push(palindromes.slice(0));

        for(let i = start; i < s.length; i++) {
            if(isPalindrome(start, i)) {
                palindromes.push(s.slice(start, i+1));
                dfs(i+1, palindromes);
                palindromes.pop();
            }
        }
    }
    
    dfs(0,[]);
    return allSubs;
};

/**
 * 
 * @param {string} s
 * @return {string[][]}
 */
var partition0 = function(s) {
    
    const palindromeSubStrings = [];
    const singlePalindrome = [];
    
    function dfs(i) {
        if(i >= s.length) {
            
            palindromeSubStrings.push(singlePalindrome.slice(0));
            return;
        }

        for(let j = i; j < s.length; j++) {
            if(isPalindrome(s, i, j)) {
                console.log(i);
                singlePalindrome.push(s.slice(i, j+1));
                dfs(j+1);
                singlePalindrome.pop();   
            }
        }
    }

    dfs(0);
    return palindromeSubStrings;
}

function isPalindrome(s,i,j) {
    while(i < j) {
        if(s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}

const s = "aab";
console.log(partition(s));


/**
 * BackTrack | Brute Force
 * @param {string} s
 * @return {string[][]}
 */
var partition1 = function(s) {
    
    const ans = [];

    const isPalindrome = (str) => {

        let left = 0;
        let right = str.length - 1;
        while(left < right) {
            if(str[left] !== str[right]) return false;
            left++;
            right--;
        }

        return true;
    }

    const dfsBackTrack = (idx, currArr) => {
        if(idx === s.length) {
            ans.push(currArr.slice(0));
            return;
        }

        for(let i = idx+1; i < s.length+1; i++) {
            const str = s.slice(idx, i);
            if(isPalindrome(str)) {
                currArr.push(str);
                dfsBackTrack(i, currArr);
                currArr.pop();
            }
        }
    }

    dfsBackTrack(0,[]);

    return ans;
};