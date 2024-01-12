/**
 * 
 * Time O(n) | Space O(n);
 * @param {string} s
 * @return {number[]}
 */


var partitionLabels = function(s) {
    
    s = s.split('');

    const hash = new Map();

    for(let i = 0; i < s.length; i++) {
        hash.set(s[i], i);
    }

    const result = [];
    let start = 0;
    let end = hash.get(s[start]);

    for(let i = 0; i < s.length; i++) {
        end = Math.max(hash.get(s[i]), end);
        if(i === end) {
            result.push(end - start + 1);
            start = end+1;
            end = hash.get(s[start]);
        }
    }

    return result;
};