var minWindow = function(s, t) {

const haveHash = {};
const needHash = {};


// filling the frequency of t strings chars
for(let k = 0; k < t.length;  k++) {
    let value = haveHash[t[k]];
    if(value) {
        haveHash[t[k] + 1];
    } else {
        haveHash[1];
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

    if(haveHash[c] && haveHash[c] === needHash[c]) {
        have++;
    }

    while(have === need) {
        if(right - left + 1 < resultLen) {
            result[0] = left;
            result[1] = right;
            resultLen = right - left + 1;
        }

        needHash[c] -= 1 
        if(haveHash[s[left]] && needHash[s[left]] < haveHash[s[left]]) {
            have--;
        }
        left++;
    }
    
    right++;
}
    console.log(result[0], result[1]);
    return s.substring(result[0], result[1] + 1);
};


const s = 'ADOBECODEBANC';
const t = 'ABC';

console.log(minWindow(s, t));


// bruteforce
var minWindowBrute = function(s, t) {
    

    const myHash = new Map();


    for(let i = 0; i < t.length; i++) {
        let value =  myHash.get(t[i]);
        if(value) {
            myHash.set(t[i], value+1);
        } else {
            myHash.set(t[i], 1);
        }
    }

    console.log(myHash);

    let minStr = '';
    let i = 0;
    let j = 0;
    // k will determin if the  t string has ended.
    let k = 0;

    while(j < s.length) {
        
    }
};

const s1 = "ADOBECODEBANC";
const t1 = "ABCCCC";
// console.log(minWindowBrute(s1,t1));