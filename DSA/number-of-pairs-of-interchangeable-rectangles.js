/**
 * Array | Math
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
 * 
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    
    const ratios = rectangles.map((ract) => (ract[0]/ract[1]));
    ratios.sort((a,b) => a-b);
    
    const gaussTotal = (n) => {
        return (1+n)*(n/2);
    }

    
    let left = 0;
    let right = 0;
    let total  = 0;
    console.log(ratios);
    while(right < ratios.length) {
        while(right < ratios.length && ratios[right] === ratios[left]) {
            right++;
        }
        total += gaussTotal(right-left-1);
        left = right;
    }

    return total;
};

// brute force O(n^2)
var interchangeableRectangles1 = function(rectangles) {
    
    let totalPair = 0;
    for(let i = 0; i < rectangles.length; i++) {
        for(let j = i + 1; j < rectangles.length; j++) {
            if(rectangles[i][1] / rectangles[i][0] === rectangles[j][1] / rectangles[j][0]) {
                totalPair++;
            }
        }
    }
    return totalPair;
};


// O(n) doing some fancy math.
var interchangeableRectangles2 = function(rectangles) {
    
    const ratioFrequency = {};

    for(let i = 0; i < rectangles.length;  i++) {
        const ratio = rectangles[i][1] / rectangles[i][0];
        if(ratioFrequency[ratio.toString()]) {
            ratioFrequency[ratio.toString()] += 1;
        } else {
            ratioFrequency[ratio.toString()] = 1;
        }
    }

    let totalPair = 0;
    for(const key in ratioFrequency) {
        if(ratioFrequency[key] !== 1) {
            totalPair += (ratioFrequency[key] * (ratioFrequency[key] - 1)) / 2;
        }
    }

    return totalPair;
};
