/**
 * Two Pointers | Greedy
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/longest-turbulent-subarray/
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    
    const higherAndLower = (start) => {

        let i = start;
        let shouldBeLow = true;

        while(i + 1 < arr.length) {
            if(shouldBeLow && arr[i+1] > arr[i]) break;
            if(!shouldBeLow && arr[i+1] < arr[i]) break;
            if(arr[i+1] === arr[i]) break;
            shouldBeLow = !shouldBeLow;
            i++;
        }

        return i;

    }

    const lowerAndHigher = (start) => {


        let i = start;
        let shouldBeHigh = true;

        while(i + 1 < arr.length) {
            if(shouldBeHigh && arr[i+1] < arr[i]) break;
            if(!shouldBeHigh && arr[i+1] > arr[i]) break;
            if(arr[i+1] === arr[i]) break;
            shouldBeHigh = !shouldBeHigh;
            i++;
        }

        return i;
    }


    let left = 0;
    let right = 1;
    let max = 1;

    while(right < arr.length) {

        if(arr[left] > arr[right]) {
            right = higherAndLower(left);
            max = Math.max(right-left+1, max);
            // console.log('high-low', left,right);
            left = right;
            right = right+1;
            continue;
        }

        if(arr[left] < arr[right]) {
            right = lowerAndHigher(left);
            max = Math.max(right-left+1, max);
            // console.log('low-high', left,right);
            left = right;
            right = right+1;
            continue;
        }

        if(arr[left] === arr[right]) {
            // console.log('equal', left,right);
            left++;
            right++;
        }

    }

    return max;
};

/**
 * Brute Force
 * Time O(n^2) | Space O(1)
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize0 = function(arr) {
    
    let maxLen = 0;
    let currLen = 0;

    for(let i = 0; i < arr.length; i++) {

        for(let j = i; j < arr.length - 1; j++) {
            if(j%2 && arr[j] > arr[j+1]) {
                currLen++;
                maxLen = Math.max(currLen, maxLen);
            } else if(!(j%2) && arr[j] < arr[j+1]) {
                currLen++;
                maxLen = Math.max(currLen, maxLen);
            } else {
                break;
            }
        }

        currLen = 0;
        for(let j = i; j < arr.length - 1; j++) {
            if(j%2 && arr[j] < arr[j+1]) {
                currLen++;
                maxLen = Math.max(currLen, maxLen);
            } else if(!(j%2) && arr[j] > arr[j+1]) {
                currLen++;
                maxLen = Math.max(currLen, maxLen);
            } else {
                break;
            }
        }
        currLen = 0;
    }

    return maxLen + 1;

};