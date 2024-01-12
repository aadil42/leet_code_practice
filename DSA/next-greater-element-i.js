/**
 * Brute force
 * Time O(n^2) | Space O(1) // if you don't count the ans array which includes the ans then it's O(1) space. We're not using hashmap like the below solution.
 * https://leetcode.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    const ans = [];

    for(let i = 0; i < nums1.length; i++) {

        for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                for(let k = j+1; k < nums2.length; k++){
                    if(nums1[i] < nums2[k]) {
                        ans.push(nums2[k]);
                        break;
                    };
                }
                break;
            }
        }

        if(ans.length === i) ans.push(-1);
    }

    return ans;
};


var nextGreaterElement1 = function(nums1, nums2) {
    
    const AnsArr = [];
    // burte force
    const myMap = new Map();
    
    nums2.forEach((num, index) => {
        myMap.set(num, index);
    });
    
    // burte force
    for(let i = 0; i < nums1.length; i++) {
        for(let j = myMap.get(nums1[i]); j < nums2.length; j++) {
            if(nums2[j] > nums1[i]) {
                AnsArr.push(nums2[j]);
                break;
            }
            if(j == nums2.length - 1) {
                AnsArr.push(-1);
            }
        }
    }
    
    return AnsArr;
};

console.log(nextGreaterElement([2,4], [1,2,3,4]));