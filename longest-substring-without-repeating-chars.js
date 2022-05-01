var lengthOfLongestSubstring = function(s) {
    
    const stringHash = new Map();
    
    let left = 0;
    let right = 0;
    let max = 0;

    while(right < s.length) {
        if(stringHash.has(s[right])) {
            // modify the hash
            stringHash.delete(s[left]);
            left++;
        } else {
            // set the hash
            stringHash.set(s[right], 1);
            right++;
        }
        max = Math.max(max, right - left);
    }

    return max;
};

const s = "bbbbb";
console.log(lengthOfLongestSubstring(s));
