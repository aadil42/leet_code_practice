/**
 * Two Pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/backspace-string-compare
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    
    const resolveBackSpace = (i, str) => {
        let skip = 0;
        while(i > -1) {
            if(str[i] === "#") {
                skip++;
                i--;
                continue;
            }
            if(skip > 0) {
                skip--;
                i--;
                continue;
            }
            break;
        }
        return i;
    }

    let si = s.length - 1;
    let ti = t.length - 1;

    while(si > -1 || ti > -1) {
        si = resolveBackSpace(si, s);
        ti = resolveBackSpace(ti, t);

        const sChar = s[si];
        const tChar = t[ti];
        if(sChar !== tChar) return false;
        si--;
        ti--;
    }
    return true;
};

/**
 * 
 * Time O(n) | Space O(n) (because we're converting  the str to array). 
 * Another solution without stack. 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare2 = function(s, t) {
    
    const resolveBackSpace = (strArr) => {

        let i = strArr.length - 1;
        let backSpaceCount = 0;

        while(i > -1) {
            if(strArr[i] === "#") {
                backSpaceCount++;
                i--;
                continue;
            }
            let didGoInWhile = false;
            while(i > -1 && backSpaceCount && strArr[i] !== "#") {
                strArr[i] = "-";
                backSpaceCount--;
                i--;
                didGoInWhile = true;
            }
            if(!didGoInWhile) i--;
        }

        const result = strArr.filter((char) => {
            return char !== "#" && char !== "-";
        }).join('');
        console.log(result);
        return result
    }
    
    return resolveBackSpace(s.split('')) === resolveBackSpace(t.split(''));
};

/**
 * Stack 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/backspace-string-compare/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare1 = function(s, t) {
    
    const sStack  = [];
    const tStack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "#") {
            sStack.pop();
            continue;
        };
        sStack.push(s[i]);
    }
    for(let i = 0; i < t.length; i++) {
        if(t[i] === "#") {
            tStack.pop();
            continue;
        };
        tStack.push(t[i]);
    }
    return tStack.join('') === sStack.join('');
};
