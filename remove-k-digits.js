/**
 * 
 * Monotonic Stack
 * 
 * Time O(n) | Space O(n)
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
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