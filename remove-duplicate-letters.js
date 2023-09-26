/**
 * 
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    
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