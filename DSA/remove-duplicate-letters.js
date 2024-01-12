/**
 * Stack 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/remove-duplicate-letters
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {

    const lastSeen = {};
    const seen = new Set();
    const result = [];
    // add lastSeen chars
    for(let i = 0; i < s.length; i++) {
        lastSeen[s[i]] = i;
    }
    for(let i = 0; i < s.length; i++) {

        if(seen.has(s[i])) continue; // it is important to check this at the start

        while(result.length && result[result.length - 1] > s[i] && lastSeen[result[result.length - 1]] > i) {
            seen.delete(result.pop());
        }
        result.push(s[i]);
        seen.add(s[i]);
    }

    return result.join('');
};
/**
 * DP (Mike, Inspect this code. The above code is done using Stack.)
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters1 = function(s) {
    
    let targetLen = 0;
    const charSet = new Set();
    for(let i = 0; i < s.length; i++) {
        if(charSet.has(s[i])) continue;
        charSet.add(s[i]);
        targetLen++;
    }
    charSet.clear();

    const getSmallerLexoStr = (str1, str2) => {
        if (str1 < str2) {
            console.log(str1);
            return str1;
        } else {
            console.log(str2);
            return str2;
        }
    }

    const dfs = (index, currStr) => {
        if(index === s.length || currStr.length === targetLen) return currStr;
        

        if(!charSet.has(s[index])) {
            charSet.add(s[index]);
            const choice1 = dfs(index+1, currStr + s[index]);
            charSet.delete(s[index]);
            const choice2 = dfs(index+1, currStr);
            return getSmallerLexoStr(choice1, choice2);
        } else {
            const choice1 = dfs(index+1, currStr);
            return choice1;
        }
    }
    
    return dfs(0, '');
};