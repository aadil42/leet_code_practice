/**
 * Array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid 
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    

    let opening = 0;
    let closing = 0;

    for(let i = 0; i < s.length; i++) {
        const par = s[i];
        if(par === "(") {
            opening++;
        } else if(par === ")" && opening > 0) {
            opening--;
        } else {
            closing++;
        }
    }

    return opening+closing;
};


var minAddToMakeValid0 = function(s) {
    
    
    const myMap = new Map();
    myMap.set(')','(');
    const myStack = [];
    myStack.push(s[0]);
    
    for(let i = 1; i < s.length; i++) {
        if(myStack[myStack.length - 1] && myMap.get(s[i]) == myStack[myStack.length - 1]) {
            myStack.pop();
        } else {
            myStack.push(s[i]);
        }
    }
    console.log(myStack);
    return myStack.length
};

console.log(minAddToMakeValid("()()()"));