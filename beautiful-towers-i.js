/**
 * Brute Force
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/beautiful-towers-i/
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function(maxHeights) {
    
    const findMountainSum = (peakIndex) => {
        const peakHeight = maxHeights[peakIndex];
        let currentPeakHeight = peakHeight;

        // for the left part
        let i = peakIndex;
        let mountainSum = 0;
        while(i > -1) {
            currentPeakHeight =  Math.min(currentPeakHeight, maxHeights[i]);
            mountainSum += currentPeakHeight;
            i--;
        }
        // for the right part
        currentPeakHeight = peakHeight;
        i = peakIndex + 1;
        while(i < maxHeights.length) {
            currentPeakHeight = Math.min(currentPeakHeight, maxHeights[i]);
            mountainSum += currentPeakHeight;
            i++;
        }

        return mountainSum;
    }

    let max = 0;
    for(let i = 0; i < maxHeights.length; i++) {
        max = Math.max(max, findMountainSum(i));
    }
    return max;
};