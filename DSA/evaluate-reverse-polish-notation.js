/**
 * Stack
 * Time O(n) | Space O(n)
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
   
    const stack = [];
    const operetors = new Set(['+', '-', '/', '*']);
     let result = tokens[0];
    for(let i = 0; i < tokens.length; i++) {
        if(operetors.has(tokens[i])) {
            const operand2 = stack.pop();
            const  operand1 = stack.pop();
            result = evaluate(+operand1, +operand2, tokens[i]);
 
            if(result < 0 && result % 1 !== 0) {
                result = Math.ceil(result);
            }
            if(result > 0 && result % 1 !== 0) {
                result = Math.floor(result);
            }
            stack.push(result);
        } else {
            stack.push(tokens[i]);
        }
 
 }
 
    function evaluate(o1,o2, o) {
        if(o === '+') return o1 + o2;
        if(o === '-') return o1 - o2;
        if(o === '*') return o1 * o2;
        if(o === '/') return o1 / o2;
    }
 
    return result;
 };