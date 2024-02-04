/**
 * Two Pointer | Hashing
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-window-substring
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    const tFrequency = {};

    for(let i  = 0; i < t.length;  i++) {
        tFrequency[t[i]] = (tFrequency[t[i]] && tFrequency[t[i]] + 1) || 1;
    }

    const currentTFrequency = {};


    const isValid = () => {
        for(const key in tFrequency) {
            if(!currentTFrequency[key]) return false;
            if(currentTFrequency[key] < tFrequency[key]) return false;
        }    
        return true;
    }

    let left = 0;
    let right = 0;

    let min = Infinity;
    let result = "";

    while(right < s.length + 1) {
        if(isValid()) {
            if(min > right - left) {
                result = s.slice(left, right);
                min = right - left;
            }
            currentTFrequency[s[left]] -= 1;
            left++;
            continue;
        }
        
        currentTFrequency[s[right]] = (currentTFrequency[s[right]] && currentTFrequency[s[right]] + 1) || 1; 
        right++;
    }

    return result;
};