/**
 * Two Pointers | Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    
    let totalMinCoast = 0;
    let left = 0;
    let right = left+1;
    
    const getMinCoast = (start, end) => {
        const array = neededTime.slice(start,end);
        array.sort((a,b) => a-b);
        
        // remove the biggest time
        array.pop();

        return array.reduce((acc, time) => {
            return acc+time;
        }, 0);
    }

    while(right < colors.length) {

        while(colors[left]===colors[right]) {
            right++;
        }
        if(right-left > 1) {
            totalMinCoast += getMinCoast(left, right);
        }
        right++;
        left = right - 1;
    }

    return totalMinCoast;
};