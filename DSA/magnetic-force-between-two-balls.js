/**
 * Binary Search | Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/magnetic-force-between-two-balls
 * 
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {

    position.sort((a,b) => a-b);
    
    const canPlace = (dist) => {
        let lastPlaced = position[0];
        let ballCount = 1;

        for(let i = 1; i < position.length; i++) {
            if(position[i] - lastPlaced >= dist) {
                ballCount++;
                lastPlaced = position[i];
            }
            if(ballCount >= m) return true;
        }

        return false;
    }

    let ans = 1;
    let low = 1;
    let high = Math.floor((position[position.length - 1] - position[0]) / (m-1));

    while(low <= high) {
        const mid = low + Math.floor((high-low)/2);
        if(canPlace(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
};