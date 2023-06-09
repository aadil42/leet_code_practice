/**
 * 
 * Linear search
 * Time O(n) | Space O(1)
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    const str = letters.join('');
    for(let i = 0; i < letters.length; i++) {
        if(str.charCodeAt(i) > target.charCodeAt(0)) return str[i];
    }
    return str[0];
};