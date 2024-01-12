// time complexity n^3 (not very good.)
var longestPalindrome1 = function(s) {
    
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

// overall time complexity is n^2  it is slightly efficint then the above algorithm
function longestPalindrome(s) {

    let longestPalindrome = '';

    // this is for odd palindrome
    for(let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while(left >= 0 && 
              right < s.length &&
              s[left] === s[right]) {
                const currentPalindrome = s.slice(left,right + 1);
                if(currentPalindrome.length > longestPalindrome.length) {
                    longestPalindrome = currentPalindrome;
                }
                left--;
                right++;
        }
    } 

    // this is for even palindrom
    for(let i = 0; i < s.length; i++) {
        let left = i;
        let right = i + 1;
        while(left >= 0 && 
              right < s.length &&
              s[left] === s[right]) {
                const currentPalindrome = s.slice(left,right + 1);
                if(currentPalindrome.length > longestPalindrome.length) {
                    longestPalindrome = currentPalindrome;
                }
                left--;
                right++;
        }
    } 
    
    return longestPalindrome;
}

const s = "abcdbbfcb";
console.log(longestPalindrome(s));


// solved it second time.
function longestPalindromeR(s) {

    let longestPalindrome = '';

    for(let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        while(left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPalindrome = s.slice(left, right + 1);
            
            if(currentPalindrome.length > longestPalindrome.length) {
                longestPalindrome = currentPalindrome;
            }
            left--;
            right++;
        }
    }

    for(let i = 0; i < s.length;  i++) {
        let left = i;
        let right = i + 1;

        while(left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPalindrome = s.slice(left, right + 1); 
            if(currentPalindrome.length > longestPalindrome.length) {
                longestPalindrome = currentPalindrome;
            }
    
            left--;
            right++;
        }
    }

    return longestPalindrome;
}

