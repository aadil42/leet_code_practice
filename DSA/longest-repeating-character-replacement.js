var characterReplacement = function(s, k) {
    

    const myhash = new Map();

    // frequency map
    let left = 0;
    let right = 0;
    let max = 0;
    
    while(right < s.length) {
        
        if(myhash.has(s[right])) {
            myhash.set(s[right], myhash.get(s[right])+1);
        } else {
            myhash.set(s[right], 1);
        }
        let maxChar = 0;
        for([key, value] of myhash) {
            maxChar = Math.max(value, maxChar);
        }

        // this condition is freaking imortant understand this and you'll understand the algoright for the solution.
        if((right - left + 1) - maxChar > k) {
            myhash.set(s[left], myhash.get(s[left]) - 1);
            left++;
        }
        right++;
        max = Math.max(max, right - left);
    }

    return max;
};


const s = 'AABABBA';
const k = 1;
// console.log(characterReplacement(s, k));

// revision

var characterReplacementR = function(s, k) {
    
    let left = 0;
    let right = 0;
    let max = 0;

    const wordFrequency = new Map();

    while(right < s.length) {
        
        if(wordFrequency.has(s[right])) {
            wordFrequency.set(s[right], wordFrequency.get(s[right])  + 1);
        } else {
            wordFrequency.set(s[right], 1);
        }

        let maxChar = 0;

        for([key, value] of wordFrequency) {
            maxChar = Math.max(maxChar, value);
        }

        if((right - left + 1) - maxChar > k) {
            wordFrequency.set(s[left], wordFrequency.get(s[left]) - 1);
            left++;
        }

        right++;
        max = Math.max(right - left, max);
    }

    return max;
};

console.log(characterReplacementR(s,k));