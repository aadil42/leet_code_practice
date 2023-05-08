/**
 * Merge Sort
 * Time O(n*log(n)) | Space O(n*log(n))
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray1 = function(nums) {


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

/**
 * 
 * Sorting in place
 * Time O(n*log(n)) | Space O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    const merge = (left, mid, right) => {
        const arr1 = nums.slice(left, mid+1);
        const arr2 = nums.slice(mid+1, right + 1);
        
        // console.log(arr1, arr2);
        let p1 = 0; 
        let p2 = 0;
        let gp = left;

        while(p1 < arr1.length && p2 < arr2.length) {
            if(arr1[p1] < arr2[p2]) {
                nums[gp] = arr1[p1];
                p1++;
            } else {
                nums[gp] = arr2[p2];
                p2++;
            }
            gp++;
        }

        while(p1 < arr1.length) {
            nums[gp] = arr1[p1];
            p1++;
            gp++;
        }

        while(p2 < arr2.length) {
            nums[gp] = arr2[p2];
            p2++;
            gp++;
        }
        return nums;
    }  

    const mergeSort = (left, right) => {

        // console.log(left, right);
        if(left === right) return nums; // if there is only one element in the array then this return will come in handy otherwise you don't need to return anything you can return undefine if you want
        
        const mid = Math.floor((left+right)/2);
        // const mid = Math.floor(nums.length/2);
        mergeSort(left, mid);
        mergeSort(mid+1, right);
        return merge(left, mid, right);
    }

    return mergeSort(0, nums.length  - 1);
};  