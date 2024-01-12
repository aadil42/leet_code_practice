/**
 * 
 * Linear
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/reverse-string
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        swap(s, left, right);
        left++;
        right--;
    }
};

function swap(s, left, right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
}