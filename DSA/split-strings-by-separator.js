/**
 * k = average len of each word in the array.
 * Time O(n*k) | Space O(n*k)
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    
    const result = [];
    
    for(let i = 0; i < words.length; i++) {
    
        result.push(...words[i].split(separator));
    }
    
    return result.filter((word) => word !== '');
};