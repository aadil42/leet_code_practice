/**
 * String | Array | Counting
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/determine-if-string-halves-are-alike
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {

    let i = 0;
    let vowels1 = 0;
    while (i < s.length/2) {
        if("aeiouAEIOU".includes(s[i])) vowels1++;
        i++;
    }
    let vowels2 = 0;
    while (i < s.length) {
        if("aeiouAEIOU".includes(s[i])) vowels2++;
        i++;
    }

    return vowels1 === vowels2;
};

/**
 * String | Array | Counting
 * Time O(n) | Space O(n) (because of split method).
 * https://leetcode.com/problems/determine-if-string-halves-are-alike
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike1 = function(s) {
    return s.slice(0, s.length/2).split("").filter((char) => "aeiouAEIOU".includes(char)).length === s.slice(s.length/2).split("").filter((char) => "aeiouAEIOU".includes(char)).length;
};

/**
 * String | Recursion | Counting
 * Time O(n) | Space O(n);
 * https://leetcode.com/problems/determine-if-string-halves-are-alike
 * 
 * @param {string} s
 * @return {boolean}
 * Solved it with recursion
 */ 
var halvesAreAlike2 = function(s) {
    
    const dfs = (i, count) => {
        if(i===s.length && count === 0) return true;
        if(i===s.length) return false;

        if(i < s.length/2) {
            if("aeiouAEIOU".includes(s[i])) count++;
           return dfs(i+1, count);
        } 
        if(i >= s.length/2) {
             if("aeiouAEIOU".includes(s[i])) count--;
           return dfs(i+1, count);
        }
    }

    return dfs(0, 0);
};