/**
 * Sliding Window | Hash Map | Counting
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow2nd = function(s, t) {
    
    if (s === t) return s;
    if (s.length < t.length) return "";

    const sFrequency = {};
    const tFrequency = {};

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        tFrequency[char] = (tFrequency[char] && tFrequency[char] + 1) || 1;
    }

    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let minSubString = "";

    while (right < s.length+1) {

        while (doesHaveAllChars(sFrequency, tFrequency)) {
                if (right-left < minLen) {
                    minLen = right-left;
                    minSubString = s.slice(left, right);
                }
                const leftChar = s[left];
                sFrequency[leftChar] -= 1;
                left++;
        }

        const rightChar = s[right];

        if (sFrequency[rightChar]) {
            sFrequency[rightChar] += 1;
        } else {
            sFrequency[rightChar] = 1;
        }

        right++;
    }

    return minSubString;
};

const doesHaveAllChars = (sFreq, tFreq) => {
    for (const key in tFreq) {
        if (!sFreq[key]) return false;
        if (sFreq[key] < tFreq[key]) return false;
    }
    return true;
}

/**
 * Two Pointer | Hashing
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-window-substring
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow1st = function(s, t) {
    
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