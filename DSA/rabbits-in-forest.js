/**
 * HashSet | Counting | Math
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/rabbits-in-forest/
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
   
    const freq = {};
 
    for (let i = 0; i < answers.length; i++) {
 
     const num = answers[i];
     freq[num] = (freq[num] && freq[num] + 1) || 1;
    }
 
    let total = 0;
    for (const key in freq) {
      
      const count = freq[key];
      const groups = Math.ceil(count / (+key + 1));
      total += groups * (+key + 1);
    }
 
    return total;
 };