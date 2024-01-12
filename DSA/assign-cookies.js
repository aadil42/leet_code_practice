/**
 * Sorting | Greedy | Array
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/assign-cookies
 * 
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    g = g.sort((a,b) => a-b);
    s = s.sort((a,b) => a-b);

    let gPointer = 0;
    let sPointer = 0;
    let satisfiedChildren = 0;

    while(gPointer < g.length && sPointer < s.length) {
        
        if(s[sPointer] < g[gPointer]) {
            sPointer++;
            continue;
        }
        if(s[sPointer] >= g[gPointer]) satisfiedChildren++;

        sPointer++;
        gPointer++;
    }

    return satisfiedChildren;
};