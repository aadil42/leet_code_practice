/**
 * Brute force
 * 
 * Time O(n^2) | Space O(1)
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea1 = function(heights) {
    
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


/**
 * Monotonic Stack 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * Tip: imaging the current element as the smallest height and find out 
 * /// untill how long we can extend it in the left and right direction getting
 * // the largest possible width with that element as the smallest element.
 * 
 * @param {number[]} heights
 * @return {number}
 */

var Stack = function() {
    this.stack = [];
}

Stack.prototype.pop = function() {
    return this.stack.pop();
}

Stack.prototype.push = function(el) {
    this.stack.push(el);
}

Stack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.stack.length === 0;
}

Stack.prototype.clear = function() {
    this.stack = [];
}

var largestRectangleArea = function(heights) {

    const stack = new Stack();

    const leftMinRange = [];
    const rightMinRange = [];

    for(let i = 0; i < heights.length; i++) {

        while(!stack.isEmpty() && heights[i] <= heights[stack.top()]) {
            stack.pop();
        }

        if(stack.isEmpty()) {
            leftMinRange.push(-1);
        } else {
            leftMinRange.push(stack.top());
        }

        stack.push(i);
    }

    stack.clear();

    for(let i = heights.length; i > -1; i--) {

        while(!stack.isEmpty() && heights[i] <= heights[stack.top()]) {
            stack.pop();
        }

        if(stack.isEmpty()) {
            rightMinRange.push(heights.length);
        } else {
            rightMinRange.push(stack.top());
        }

        stack.push(i);
    }

    rightMinRange.reverse();

    let maxArea = 0;

    for(let i = 0; i < heights.length; i++) {
        const width = (i - leftMinRange[i] - 1) + (rightMinRange[i] - i - 1) + 1;
        const height = heights[i]
        maxArea = Math.max(maxArea, width*height);
    }
    
    return maxArea;
};

// efficient way

/**
 * Next greater element/ stack
 * 
 * Time O(n) | Space O(n)
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea0 = function(heights) {
    
    let stack = [];
    const leftDirectionLimit = [];
    const rightdirectionLimit = [];

    for(let i = 0; i < heights.length; i++) {
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