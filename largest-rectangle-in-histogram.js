/**
 * Brute force
 * 
 * Time O(n^2) | Space O(1)
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    largestArea = 0;
    for(let i = 0; i < heights.length; i++) {
        largestArea = Math.max(largestArea, findArea(i));
    }

    function findArea(center) {
        let left = center - 1;
        let right = center + 1;

        while(left >= 0 &&  heights[left] >= heights[center]) {
            left--;
        }
        while(right < heights.length && heights[right] >= heights[center]) {
            right++;
        }

        const width = right - left - 1;
        const height = heights[center];
        return width*height;
    }

    return largestArea;
};