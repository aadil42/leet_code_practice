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
console.log(characterReplacement(s, k));