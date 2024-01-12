/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * 
 * Binary Search 
 * Time O(n*log(n)) | Space O(1);
 * @param {number} n
 * @return {number}
 */
// bewear the guess function will give you undefine function, because it doesn't exist here. You have to run this code in leetcode environment.
var guessNumber = function(n) {
    
    let left = 1;
    let right = n;

    while(left <= right) {
        const myGuess = Math.floor((left+right)/2);
        const guessHint = guess(myGuess);
        console.log(myGuess);
        if(guessHint ===  0) return myGuess;
        if(guessHint === -1) {
            right = myGuess - 1;
        } else {
            left = myGuess + 1
        } 
    }
};