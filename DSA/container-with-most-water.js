// time complexity O(n^2)
var maxAreaBrute = function(height) {


    let mostWaterArea = 0;
    let currentArea = 0;
    for(let i = 0; i < height.length;  i++) {
        for(let j = i + 1; j < height.length;  j++) {

            currentArea = Math.min(height[i], height[j]) * (j - i);
            mostWaterArea = Math.max(currentArea, mostWaterArea);
        }
    }

    return mostWaterArea;
};

var maxArea = function(heights) {

    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    let maxWaterArea = 0;

    while(leftPointer < rightPointer) {
        let width = rightPointer -  leftPointer;
        let height = Math.min(heights[leftPointer], heights[rightPointer]);

        maxWaterArea = Math.max(width * height, maxWaterArea);

        // this condition is pretty important. this is saving us from n^2.
        if(heights[leftPointer] > heights[rightPointer]) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }

    return maxWaterArea;
};



const heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(heights));