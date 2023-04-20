/**
 * Stack
 * 
 * Time O(n) | Space O(n)
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    stack.push([s[0], 1]);
    for(let i = 1; i < s.length; i++) {

      if(stack.length && stack[stack.length - 1][0] === s[i]) {
        stack[stack.length - 1][1] += 1;
      }  else {
        stack.push([s[i], 1]);
      }

      if(stack.length && stack[stack.length - 1][0] === s[i] && stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    }

    let result = '';
    for(let i = 0; i < stack.length; i++) {
      for(let k = 0; k < stack[i][1]; k++) {
        result += stack[i][0];
      }
    }

    return result;
};