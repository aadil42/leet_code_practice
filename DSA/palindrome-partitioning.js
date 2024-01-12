/**
 * 
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
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