/**
 * Linear
 * Time O(n) | Space O(n) 
 * https://leetcode.com/problems/trapping-rain-water
 * @param {number[]} height
 * @return {number}
 * 
 */
var trap = function(height) {
    
    const maxLeft = [];
    const maxRight = [];
    const minLeftRight = [];

    let current = 0;
    for(let i = 0; i < height.length; i++) {
     maxLeft.push(current);
     current  = Math.max(current, height[i]);
    }
    current = 0;
    for(let i = height.length - 1; i > -1; i--) {
        maxRight.push(current);
        current = Math.max(current, height[i]);
    }
    // because the elements were added reverse. 
    maxRight.reverse();

    for(let i = 0; i < height.length; i++) {
        const minofLeftRight = Math.min(maxLeft[i],maxRight[i]);
        minLeftRight.push(minofLeftRight);
    }

    let water = 0;
    for(let i = 0; i < height.length; i++) {
        if(minLeftRight[i] - height[i] > 0) {
            water += minLeftRight[i] - height[i];
        }
    }

    return water;
};

/**
 * Linear 
 * Time O(n) | Space O(1) 
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    
    let left = 0;
    let right = height.length - 1;
    let current = left;
    let maxLeft = 0;
    let maxRight = 0;
    let water = 0;
  
    while(left < right) {
        const waterBlock = Math.min(maxLeft, maxRight) - height[current];
        if(waterBlock > 0) {
            water += waterBlock;
        }
        maxLeft = Math.max(maxLeft, height[left]);
        maxRight = Math.max(maxRight, height[right]);
  
        if(maxLeft <= maxRight) {
            left++;
            current = left;
        } else {
            right--;
            current = right;
        }
    }
  
    return water;
  };