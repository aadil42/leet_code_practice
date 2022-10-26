var minWindow = function(s, t) {

const haveHash = {};
const needHash = {};


// filling the frequency of t strings chars
for(let k = 0; k < t.length;  k++) {
    let value = haveHash[t[k]];
    if(value) {
        haveHash[t[k]] += 1;
    } else {
        haveHash[t[k]] = 1;
    }
}

let have = 0;
let need = t.length;

let result = [-1, -1];
let resultLen = Number.MAX_VALUE;

left = 0;
right = 0;

while(right < s.length) {

    const c = s[right];
    if(needHash[c]) {
        needHash[c] = needHash[c] + 1;
    } else {
        needHash[c] = 1;
    }

    if(haveHash[c] && needHash[c] <= haveHash[c]) {
        have++;
    }
    
    while(have === need) {
        if(right - left + 1 < resultLen) {
            result[0] = left;
            result[1] = right;
            resultLen = right - left + 1;
        }

        needHash[s[left]] -= 1 
        if(haveHash[s[left]] && needHash[s[left]] < haveHash[s[left]]) {
            have--;
        }
        left++;
    }
    
    right++;
}

    return s.substring(result[0], result[1] + 1);
};


const s = 'ADOBECODEBANC';
const t = 'ABC';

// console.log(minWindow(s, t));


var minWindowR = function(s, t) {

    const haveHash = {};
    const needHash = {};

    for(let i = 0; i < t.length; i++) {
        if(haveHash[t[i]]) {
            haveHash[t[i]] += 1;
        } else {
            haveHash[t[i]] = 1;
        }
    }

    const result = [-1,-1];
    let have = 0;
    let need = t.length;


    let left = 0;
    let right = 0;
    let maxLen = Number.MAX_VALUE;

    while(right < s.length) {
        const char = s[right];

        if(needHash[char]) {
            needHash[char] += 1;
        } else {
            needHash[char] = 1;
        }

        if(haveHash[char] && needHash[char] <= haveHash[char]) {
            have++;
        }

        while(have === need) {
            if(maxLen > (right - left + 1)) {
                maxLen = right - left  + 1;
                result[0] = left;
                result[1] = right;
            }

            needHash[s[left]] -= 1;
            if(haveHash[s[left]] && needHash[s[left]] < haveHash[s[left]]) {
                have--;
            }
            left++;
        }

        right++;
    }
    return s.substring(result[0], result[1] + 1);
};

console.log(minWindowR(s,t));
