/**
 * Time O(n) | Space O(n)
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    // find the element with bs
    // add that center elmenet to left arr
    // create two pointers 
    // compare the absolute diff of both pointers
    // increment or decrement them

    const findIndex = (val) => {
        
        let left = 0;
        let right = arr.length - 1;

        while(left <= right) {
            const mid = Math.floor( left + (right - left)/2);
            if(arr[mid] === val) return mid;
            if(val > arr[mid]) left = mid+1;
            if(val < arr[mid]) right = mid-1;
        }

        let index = 0;
        let minDiff = Infinity;
        for(let i = 0; i < arr.length; i++) {
            const currentDiff = Math.abs(arr[i] - x);
            if(currentDiff < minDiff) {
                index = i;
                minDiff = currentDiff;
            }
        }

        return index;
    }

    const center = findIndex(x);
    // return;
    // if(center === 0) return arr.splice(center, k);
    // if(center > arr.length) return arr.slice(arr.length - k, k);
    // console.log(center);
    let l = center - 1;
    let r = center + 1;
    const left = [];
    const right = [];
    left.push(arr[center]);
    while(l > -1 && r < arr.length && left.length + right.length < k) {
        
        leftDiff = Math.abs(arr[l] - x);
        rightDiff = Math.abs(arr[r] - x);
        // console.log(l,r, leftDiff, rightDiff);
        if(leftDiff < rightDiff) {
            // console.log(l,r);
            left.push(arr[l]);
            l--;
        }
        if(rightDiff < leftDiff) {
            right.push(arr[r]);
            r++;
        }
        if(rightDiff === leftDiff && arr[l] <= arr[r]) {
            left.push(arr[l]);
            l--;
        }
        if(rightDiff === leftDiff && arr[r] <= arr[l]) {
            right.push(arr[r]);
            r++;
        }
        // console.log(left, right);
    }

    while(left.length + right.length < k && l > -1 && r >= arr.length) {
        left.push(arr[l]);
        l--;
    }

    while(left.length + right.length < k && r < arr.length && l < 0) {
        right.push(arr[r]);
        r++;
    }
    const result = [...left.reverse(), ...right];
    if(result.length > k) {
        result.pop();
    } 
    return result;
    // return [...left.reverse(), ...right];
};

