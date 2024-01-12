/**
 * 
 * Binary Search
 * Time O(log(n)) | Space O(1)
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    let left = 0;
    let right = letters.length - 1;
    const str = letters.join('');
    let result = letters[0];
    while(left <= right) {
        const mid = left + Math.floor((right - left)/2);
        if(str.charCodeAt(mid) > target.charCodeAt(0)) {
            result = str[mid];
            right = mid - 1;
        }
        if(str.charCodeAt(mid) <= target.charCodeAt(0)) {
            left = mid + 1;
        }
    }

    return result;
};

/**
 * 
 * Linear search
 * Time O(n) | Space O(1)
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter1 = function(letters, target) {
    
    const str = letters.join('');
    for(let i = 0; i < letters.length; i++) {
        if(str.charCodeAt(i) > target.charCodeAt(0)) return str[i];
    }
    return str[0];
};

