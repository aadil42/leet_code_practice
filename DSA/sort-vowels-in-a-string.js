/**
 * Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/sort-vowels-in-a-string/
 * 
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    const vowels = s.split('').filter((char) => {
        if(vowelsSet.has(char)) return char;
    });

    s = s.split('').map((char) => {
        if(vowelsSet.has(char)) return false;
        return char;
    });


    vowels.sort();

    let i = 0;
    const t = s.map((char) => {
        if(!char) {
            i++;
            return vowels[i-1];
        }
        return char;
    });

    return t.join('');
};