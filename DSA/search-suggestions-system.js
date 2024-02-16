/**
 * 
 * Sorting | Greedy
 * Time O(n+m) | Space O(n)
 * https://leetcode.com/problems/search-suggestions-system/
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {

    // this will sort words lexicographically
    products.sort();
    
    const suggestedWords = [];
    let left = 0;
    let right = products.length - 1;

    for(let i = 0; i < searchWord.length; i++) {
        const char = searchWord[i];

        while(left < products.length && products[left][i] !== char) {
            left++;
        }

        while(right > -1 && products[right][i] !== char) {
            right--;
        }

        const minLen = Math.min(right-left + 1, 3);

        const currentSuggestion = [];

        for(let j = left; j < left + minLen; j++) {
            currentSuggestion.push(products[j]);
        }

        suggestedWords.push(currentSuggestion);
    }

    return suggestedWords;
};

/**
 * Sorting | Greedy
 * 
 * Time O(n*log(n) + m*n) | Space O(m)
 * https://leetcode.com/problems/search-suggestions-system/description/
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts1 = function(products, searchWord) {

    products.sort((product1, product2) => {
        if(product1 < product2) {
            return -1;
        }
        if(product2 < product1) {
            return 1;
        }
        if(product1 === product2) {
            return 0;
        }
    });

    const result = [];
    let left = 0;
    let right = products.length - 1;
    for(let i = 0;  i < searchWord.length; i++) {
        let char = searchWord[i];
        
        while(left <= right && (products[left].length - 1 < i || products[left][i] !== char)) {
            left++;
        }
        while(left <= right && (products[right].length - 1 < i || products[right][i] !== char)) {
            right--;
        }

        const subResult = [];
        const len = Math.min(right - left + 1, 3);
        for(let j = 0; j < len; j++) {
            subResult.push(products[left+j]);
        }
        result.push(subResult);
    }

    return result;
};