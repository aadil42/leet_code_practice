/**
 * Stack
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    
  const stack = [];

  for(let i = 0; i < s.length + 1; i++) {

      while(stack.length && stack[stack.length - 1][1] === k) {
          let popi = 0;
          while(popi < k) {
              stack.pop();
              popi++;
          }
      }

      if(stack.length && stack[stack.length - 1][0] === s[i]) {
          stack.push([s[i], stack[stack.length - 1][1] + 1]);
          continue;
      }

      // this is because of an edge case.
      if(i < s.length) {
          stack.push([s[i], 1]);
      }
  }

  
  return stack.map((s) => s[0]).join("");
};

/**
 * Stack
 * 
 * Time O(n) | Space O(n)
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates0 = function(s, k) {
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