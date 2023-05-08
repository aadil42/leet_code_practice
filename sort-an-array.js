/**
 * Merge Sort
 * Time O(n*log(n)) | Space O(n*log(n))
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {


    const merge = (arr1, arr2) => {

        const temp = [];
        let pointer1 = 0;
        let pointer2 = 0;

        while(pointer1 < arr1.length && pointer2 < arr2.length) {
            if(arr1[pointer1] < arr2[pointer2]) {
                temp.push(arr1[pointer1]);
                pointer1++;
            } else {
                temp.push(arr2[pointer2]);
                pointer2++;
            }
        }

        while(pointer1 < arr1.length) {
            temp.push(arr1[pointer1]);
            pointer1++;

        }
        while(pointer2 < arr2.length) {
            temp.push(arr2[pointer2]);
            pointer2++;
        }
        return temp;
    }  

    const mergeSort = (nums) => {

        if(nums.length === 1) return nums;

        const mid = Math.floor(nums.length/2);
        const leftArrSorted = mergeSort(nums.slice(0, mid));
        const rightArrSorted = mergeSort(nums.slice(mid));

        return merge(leftArrSorted, rightArrSorted);
    }

    return mergeSort(nums);
};  