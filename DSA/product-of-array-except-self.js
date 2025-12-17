/**
 * Array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const result = [];

    // add prefixes
    let currPreFix = 1;
    for(let i = 0; i < nums.length; i++) {
        result.push(currPreFix);
        currPreFix *= nums[i];
    }
    
    let currPostFix = 1;
    for(let i = nums.length - 1; i > -1; i--) {
        result[i] = currPostFix*result[i];
        currPostFix *= nums[i];
    }

    return result;
};

var productExceptSelf1 = function(nums) {
    
let currunt = 1;
const result = [];
nums.forEach((num) => {

result.push(currunt);
currunt *=  num;
});

currunt = 1;

for(let i = nums.length  -1; i >=0; i--) {
    result[i] *= currunt;
    currunt *= nums[i];
}

return result;
};


const nums = [-1,1];

// console.log(productExceptSelf(nums));

// solving it second time
var productExceptSelfR = function(nums) {
    const preProduct = [];
    const postProduct = [];
 
    let current = 1; 
    for(let i = 0; i < nums.length; i++) {
        current = current * nums[i];
        preProduct.push(current);
    }

    // takes O(n)
    preProduct.unshift(nums[0]);
    preProduct.pop();


    // for post array 
    current = 1;
    for(let i = nums.length - 1; i > -1; i--) {
        current = nums[i] * current;
        postProduct[i] = current; 
    }

    // takes (n)
    postProduct.shift();
    postProduct.push(nums[nums.length - 1]);

    // console.log(preProduct);
    // console.log(postProduct);

    const result = [];
    // takes log(n);
    result[0] = postProduct[0];
    for(let i = 1; i < nums.length - 1; i++) {
        result.push(postProduct[i]*preProduct[i]);
    }

    result.push(preProduct[preProduct.length - 1]);

    return result;
};

/**
 * Array | prefix_product
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
// solve it third time.
var productExceptSelfR3 = function(nums) {
    
    const forward = nums.reduce((newArr, curr, idx) => {
        const currProduct = (idx != 0) ? newArr[newArr.length - 1] : 1;

        newArr.push(curr*currProduct);
        return newArr;
    }, []);

    const backward = nums.reverse().reduce((newArr, curr, idx) => {
        const currProduct = (idx != 0) ? newArr[newArr.length - 1] : 1;
        newArr.push(curr*currProduct);
        return newArr;
    }, []).reverse();

    forward.unshift(1);
    forward.push(1);
    backward.unshift(1);
    backward.push(1);

    const result = [];

    for (let i = 1; i < forward.length - 1; i++) {
        result.push(forward[i-1]*backward[i+1]);
    }

    return result;
};

console.log(productExceptSelfR(nums));