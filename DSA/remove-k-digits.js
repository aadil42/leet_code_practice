/**
 * Monotonic Stack
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/remove-k-digits
 * 
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    let mStack = [];

    num = num.split("").map((n) => +n);

    for(let i = 0; i < num.length; i++) {
        while(k > 0 && mStack[mStack.length - 1] > num[i]) {
            mStack.pop();
            k--;
        }
        mStack.push(num[i]);
    }

    // if we have digits and k. then remove the last ones because the'll be the largest.
    while(mStack.length && k > 0) {
        mStack.pop();
        k--;
    }

    // edge case.
    if(+mStack.join("") === 0) return "0";

    // taking care of leading zeros
    i = 0;
    while(i < mStack.length && mStack[i] === 0) {
        mStack[i] = "#";
        i++;
    }

    return mStack.filter((num) => num !== "#").join("") || "0";
};

/**
 * 
 * Monotonic Stack
 * 
 * Time O(n) | Space O(n)
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits0 = function(num, k) {
    
    const monotonicStack = [];
    const nums = num.split('').map((n) => +n);
    for(let i = 0; i < nums.length; i++) {
        while(k > 0 && 
              monotonicStack.length && 
              monotonicStack[monotonicStack.length - 1] > nums[i]) {
                 monotonicStack.pop();
                 k--;
             }
        monotonicStack.push(nums[i]);
    }

    // if all the digits were in increasing order then we need to  remove the last k of them.
    while(monotonicStack.length && k > 0) {
        monotonicStack.pop();
        k--;
    }

    // if it turns out to be a big 000000000000000000000000000000000 then we just return here
    if(parseInt(monotonicStack.join('')) === 0) return '0';

    // taking care of leading zeros if we have digits after them.
    let i = 0;
    while(i < monotonicStack.length && monotonicStack[i] === 0) {
        monotonicStack[i] = '#';
        i++;
    }

    // removing leading zeros
    const result = monotonicStack.map((digit) => {
        if(digit !== '#') return digit;
    });


    // every digit has been removed and nothing is left hence returning '0' here
    if(!result.length) return '0';

    // finally join everything and return it as a string
    return result.join('');
};