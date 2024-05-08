/**
 * Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/relative-ranks/?envType=daily-question&envId=2024-05-08
 * 
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
    score = score.map((s, idx) => [s, idx]);

    score.sort((a,b) => {
        return b[0] - a[0];
    });

    const ans = [];

    if(score[0] !== undefined) ans[score[0][1]] =  "Gold Medal";
    if(score[1] !== undefined) ans[score[1][1]] = "Silver Medal"; 
    if(score[2] !== undefined) ans[score[2][1]] = "Bronze Medal";
 
    for(let i = 3; i < score.length; i++) {
        idx = score[i][1];
        ans[idx] = (i+1) + '';
    }

    return ans;
};