/**
 * Sliding Window
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
 * @param {string} s
 * @return {number}
 */
// solved it second time
var minFlips = function(s) {
    
    const alt1 = [];
    const alt2 = [];

    for (let i = 0; i < 2 * s.length; i++) {
        i%2 ? alt1.push("0") : alt1.push("1");
        i%2 ? alt2.push("1") : alt2.push("0");
    }

    let min = Infinity;
    
    min = Math.min(min, getMinFlips(0, s.length, alt1, s+s));
    min = Math.min(min, getMinFlips(0, s.length, alt2, s+s));

    return min;
};

const getMinFlips = (left, right, alt, s) => {

    console.log(left, right, alt, s);
    let min = Infinity;
    let diff = 0;
    for (let i = 0; i < right; i++) {
        if (s[i] !== alt[i]) diff++;
    }

    min = Math.min(min, diff);
    
    while (left < s.length/2) {
        if (alt[left] !== s[left]) diff--;
        if (alt[right] !== s[right]) diff++;
        left++;
        right++;
        min = Math.min(min, diff);
    }

    return min;    
}

/**
 * Sliding Window.
 * Time O(n) | space O(n)
 * @param {string} s
 * @return {number}
 */
var minFlips0 = function(s) {


    const alt1 = [];
    const alt2 = [];
  
    for(let i = 0; i < 2 * s.length; i++) {
        // 101010 
        i%2 ? alt1.push('0') :  alt1.push('1');
        // 010101
        i%2 ? alt2.push('1') :  alt2.push('0');
    }
    
    let minType2 = Infinity;
    const left = 0;
    const right = s.length - 1;
    s += s;
    minType2 = Math.min(minType2, findMin(s, left, right, alt1));
    minType2 = Math.min(minType2, findMin(s, left, right, alt2));

    return minType2;
}

function findMin(s, left, right, alt) {
    let min = Infinity;
    let current = 0;

    for(let i = 0; i < right + 1; i++) {
        if(s[i] !== alt[i]) {
            current++;
        } 
    }

    min = Math.min(min, current);
    current = min;
    left++;
    right++;
    while(right < s.length) {
        if(s[left-1] !== alt[left-1]) {
            current--;
        }
        if(s[right] !== alt[right]) {
            current++;
        }
        min = Math.min(current, min);
        left++;
        right++;
    }

    return min;
}


/**
 * Brute force 
 * Time O(n^2) | Space O(n)
 * @param {string} s
 * @return {number}
 */
 var minFlipsBF = function(s) {
    
    let left = 0;
    let right = s.length;
    let minType2 = Infinity;
    const alteration1 = s.split('').map((char, index) => {
        if(index%2) {
            return '0'
        } else {
            return '1';
        }
    });

    const alteration2 = s.split('').map((char, index) => {
        if(index%2) {
            return '1';
        } else {
            return '0';
        }
    });

    s += s;
    console.log(s);
    while(right <= s.length) {
        const newS = s.slice(left, right);
 
        minType2 = Math.min(checkAlteration(newS,alteration1, alteration2), minType2);
        // console.log(minType2);
        left++;
        right++;
    }

    return minType2;
};

function checkAlteration(s,alt1,alt2) {
    let min = Infinity;
    let current = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== alt1[i]) {
            current++;
        } 
    }

    min = Math.min(current, min);
    current = 0;
    for(let i = 0; i < s.length; i++) {
         if(s[i] !== alt2[i]) {
            current++;
        } 
    }

    return Math.min(current, min);
}


const s = "01001001101";
console.log(minFlips(s));