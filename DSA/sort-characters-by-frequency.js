/**
 * Sorting | Counting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/sort-characters-by-frequency
 * 
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    const frequency = {};

    for(let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] + 1) || 1; 
    }

    const frequencyArr = [];

    for(const key in frequency) {
        frequencyArr.push([key,  frequency[key]]);
    }

    frequencyArr.sort((a,b) => b[1]-a[1]);

    result = frequencyArr.map((freq) =>  {
        return freq[0].repeat(freq[1]);
    });

    return result.join("");
};
