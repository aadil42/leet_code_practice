/**
 * Two Pointers
 * Time O(n^2) | Space
 * https://leetcode.com/problems/palindromic-substrings
 *  
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    // O(n)
    const getTotalPalindrome = (left, right) => {
        let total = 0;
        while(left > -1 && right < s.length && s[left] === s[right]) {
            total++;
            left--;
            right++;
        }
        return total;
    }

    let totalPalindrome = 0;
    // O(n)
    for(let i = 0; i < s.length; i++) {
        // calculate odd number of palindrome.
        totalPalindrome += getTotalPalindrome(i,i);
        // calculate even number of palindrome.
        totalPalindrome += getTotalPalindrome(i,i+1);
    }

    return totalPalindrome;
};

// the time complexity is n^3
var countSubstrings1 = function(s) {
    let totalPalindrome = 0;

    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            if(isPlindrome1(s.slice(i,j))) {
                totalPalindrome++;
            }
        }
    }

    return totalPalindrome;
};

function isPlindrome1(s) {
    let i = 0;
    let j = s.length - 1;
    while(i < j) {
        if(s[i] !== s[j]) {
            s = false;
            break;
        } 
        i++
        j--;
    }
    return s;
}

const s = 'abbacddc';
// console.log(countSubstrings1(s));

// slightly efficient // with time coplexity of n^2.
var countSubstrings2 = function(s) {
    let totalPalindrome = 0;

    for(let i = 0; i < s.length; i++) {
            // this is for odd.
            totalPalindrome += isPlindrome(s, i, i);
            // this is for even.
            totalPalindrome += isPlindrome(s, i, i+1);
    }
    return totalPalindrome;
};

function isPlindrome(s, left, right) {
    let i = left;
    let j = right;
    let total = 0;
    while(i >= 0 && j < s.length) {
        if(s[i] !== s[j]) {
            break;
        }
        total++;
        i--;
        j++;
    }
    return total;
}
console.log(countSubstrings(s));

// solved it again. with n^2
var countSubstringsR = function(s) {

    let total = 0;
    
    for(let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
    
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            total += 1;
            left--;
            right++;
        }
    }
    
    for(let i = 0; i < s.length; i++) {
    
        let left = i;
        let right = i + 1;
    
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            total += 1;
            left--;
            right++;
        }  
    }
    
    return total;
    };