/**
 * 
 * Appproch: (Recommended to read the code first.)
 * 1. sort the tokens.
 * 2. initialize two pointers left as zero and right as length - 1
 * 3. if power is less than the current left token and score is also zero then return maxScore.
 * 4. if power is greater than current left token then increament the score, update maxScore, subtract left token from power.
 * 5. if power is less than current left and score is more than 0 then decrement the score, add right token to power.
 * 
 * Sorting | Greedy | Two Pointers
 * Time O(n*log(n)) Space O(1) 
 * https://leetcode.com/problems/bag-of-tokens
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    
    tokens.sort((a,b) => a-b);
    
    let maxScore = 0;
    let score = 0;

    let left = 0;
    let right = tokens.length - 1;

    while(left <= right) {
        if(power < tokens[left] && score === 0) return maxScore;
        if(power >= tokens[left]) {
            power -= tokens[left];
            score++;
            maxScore = Math.max(maxScore, score);
            left++;
            continue;
        }
        if(score > 0) {
            power += tokens[right];
            score--;
            right--;
            continue;
        }
    }

    return maxScore;
};