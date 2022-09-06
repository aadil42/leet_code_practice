// time complexity n^3 (not very good.)
var longestPalindrome = function(s) {
    
    let longestPalindrome = '';
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            const palindrome = getPalindrome(s.slice(i,j));
            if(palindrome) {
               if(palindrome.length > longestPalindrome.length) {
                   longestPalindrome = palindrome;
               }
            }
        }
    }

    return longestPalindrome;
};

function getPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while(i < j) {
        
        if(s[i] !== s[j]) {
            s = false;
            break;
        }
        i++;
        j--;
    }
    
    return s;
}

const s = "abcdbbfcba";
console.log(longestPalindrome(s));

