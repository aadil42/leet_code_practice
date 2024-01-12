    /**
    * Radix sort (all elemetns are positive integers that is why radix sort)
    * Time O(n) | Space O(n) // we're sorting with radix sort that is why time O(n)
    * https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging
    * @param {number[]} arr
    * @return {number}
    */
    var maximumElementAfterDecrementingAndRearranging = function(arr) {
        
        // arr.sort((a,b) => a-b);


        const redixSort = (nums) => {

            nums = nums.map((num) => {
                return num.toString();
            });

            let maxLenDigit = Math.max(...nums.map((num) => num.length)); 

            // append zeros
            for(let i = 0; i < nums.length; i++) {
                const remainingDigits = maxLenDigit - nums[i].length;
                const proceedingZeros = '0'.repeat(remainingDigits);
                nums[i] = proceedingZeros + nums[i];
            }

            for(let i = maxLenDigit-1; i > -1; i--) {

                const bucket = [];
                for(let j = 0; j < 10; j++) {
                    bucket.push([]);
                }

                for(let j = 0; j < nums.length; j++) {
                    let digit = nums[j][i]; 
                    digit = +digit;
                    bucket[digit].push(nums[j]); // + because we convert string to number
                }

                nums = [];
                for(let j = 0; j < bucket.length; j++) {
                    for(let k = 0; k < bucket[j].length; k++) {
                        nums.push(bucket[j][k]);
                    }
                }
            }

            return nums.map((num) => +num);
        }
        // the first element must be 1 :1st condition

        arr = redixSort(arr);
        let index = 1;
        arr[0] = 1;

        while(index < arr.length) {
            
            const pre = arr[index-1];
            const curr = arr[index];
            if(Math.abs(curr - pre) > 1 && pre + 1 < curr) {
                arr[index] = pre + 1;
            }
            index++;
        }
        
        return Math.max(...arr);
};



/**
 * Sorting
 * Time O(n*log(n)) | Space O(n)
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging1 = function(arr) {
    
    arr.sort((a,b) => a-b);

    // the first element must be 1 :1st condition
    let index = 1;
    arr[0] = 1;

    while(index < arr.length) {
        
        const pre = arr[index-1];
        const curr = arr[index];
        if(Math.abs(curr - pre) > 1 && pre + 1 < curr) {
            arr[index] = pre + 1;
        }
        index++;
    }
    
    return Math.max(...arr);
};