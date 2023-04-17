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

// efficient way

/**
 * Next greater element/ stack
 * 
 * Time O(n) | Space O(n)
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    let stack = [];
    const leftDirectionLimit = [];
    const rightdirectionLimit = [];

    for(let i = 0; i < heights.length; i++) {
        // if(!stack.length) {
        //     leftDirectionLimit.push(0);
        //     stack.push(i);
        //     continue;
        // }
        while(stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
           stack.pop();
        }
        if(!stack.length) {
            leftDirectionLimit.push(0);
        } else {
            leftDirectionLimit.push(stack[stack.length - 1] + 1);
        }
        stack.push(i);
    }

    stack = [];
    for(let i = heights.length - 1; i > -1; i--) {
        // if(!stack.length) {
        //     leftDirectionLimit.push(0);
        //     stack.push(i);
        //     continue;
        // }
        while(stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
           stack.pop();
        }
        if(!stack.length) {
            rightdirectionLimit.push(heights.length - 1);
        } else {
            rightdirectionLimit.push(stack[stack.length - 1] - 1);
        }
        stack.push(i);
    }
    rightdirectionLimit.reverse();
    // console.log(leftDirectionLimit, rightdirectionLimit);

    // calculate max histogram
    let maxArea = 0;

    for(let i = 0; i < heights.length; i++) {
        const currentMax = (rightdirectionLimit[i] - leftDirectionLimit[i] + 1) * heights[i];
        maxArea = Math.max(maxArea, currentMax);
    }

    return maxArea;
};