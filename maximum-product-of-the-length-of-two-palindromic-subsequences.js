/**
 * BackTracking | Recursion
 * Time O(3^n) | Space O(n)
 * https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {

    const isPal = (arr) => {
        let left = 0;
        let right = arr.length - 1;

        while(left < right) {
            if(arr[left] !== arr[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let max = 0;
    const dfs = (i, s1, s2) => {

        if(i >= s.length) {
            if(isPal(s1) && isPal(s2)) {
                max = Math.max(max, s1.length*s2.length);
            } 
            return;
        }

        s1.push(s[i]);
        dfs(i+1, s1, s2);
        s1.pop();
        
        s2.push(s[i]);
        dfs(i+1, s1, s2);
        s2.pop();

        dfs(i+1, s1, s2);
    }

    dfs(0,[],[]);
    return max;
};


var maxProduct1 = function(s) {
    const bitMaskHash = new Map();
    const strlen = s.length;
    for(let i = 1; i < (1 << strlen); i++) {
        let paliString = '';
        for(j = 0; j < strlen; j++) {
            if(i & (1 << j)) {
                paliString += s[strlen - 1 - j];
            }
        }
        if(paliString === paliString.split('').reverse().join('')) {
            bitMaskHash.set(i, paliString.length);
        }
    }

    let result = 0;
    for(const [key, value] of bitMaskHash) {
        for(const [key1, value1] of bitMaskHash) {
            if((key & key1)  === 0) {
                result = Math.max(result, value * value1);
            }
        }
    }
    return result;
};

const s = 'leetcodecom';
console.log(maxProduct(s));