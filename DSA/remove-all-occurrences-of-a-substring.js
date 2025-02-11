/** 
 * Stack
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    
    let stack = [];
    
    let i = 0;

    while (i < s.length) {
        
        stack.push(s[i]);

        if (stack.length >= part.length &&
            stack[stack.length - 1] === part[part.length - 1]) {
            const doesMatch = stack.slice(0).reverse().slice(0, part.length).reverse().join("") === part;
                              //     copy     reverse    slice                  reverse  string 
            if(doesMatch) {
                stack.splice(stack.length - part.length);
            }
        }   
        i++;
    }

    return stack.join("");
};

/** 
 * BruteForce | String | Recursion
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences1 = function(s, part) {
    const rec = (s, part) => {
        if (s.includes(part)) return rec(s.replace(part, ""), part);
        return s;
    }
    return rec(s, part);
};

/** 
 * BruteForce | String
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences0 = function(s, part) {
    
    while(s.includes(part)) {
        const idx = s.indexOf(part);
        s = s.slice(0, idx) + s.slice(idx+part.length);
    }

    return s;
};