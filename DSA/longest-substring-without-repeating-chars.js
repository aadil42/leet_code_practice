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
// console.log(lengthOfLongestSubstring(s));



// attempted 2nd time. with set
var lengthOfLongestSubstringRR = function(s) {
    const wordSet = new Set();
 let maxLen = 0;
 let curruntLen = 0;

let left = 0;
let right = 0;

 while(right < s.length){
     console.log(right,s.length);
     if(wordSet.has(s[right])) {
         
         while(s[left] !== s[right] && left < right) {
             wordSet.delete(s[left]);
             left++;
             curruntLen--;
         }
         curruntLen--;
         left++;
         right++;
         curruntLen++;
         maxLen = Math.max(curruntLen, maxLen);
     } else {

         wordSet.add(s[right]);
         right++;
         curruntLen++;
         maxLen = Math.max(curruntLen, maxLen);
     }

     // console.log(left, right);
 }

 return maxLen;
};

// attempted 3rd time. with set
var lengthOfLongestSubstringR = function(s) { 
    const wordSet = new Set();
    let maxLen = 0;
    let curruntLen = 0;

    let left = 0;
    let right = 0;

    while(right < s.length){
     if(wordSet.has(s[right])) {
        wordSet.delete(s[left]);
        left++;
     } else {
        wordSet.add(s[right]);
        right++;
     }
     maxLen = Math.max(wordSet.size, maxLen);
    }

    return maxLen;
};

console.log(lengthOfLongestSubstringR(s));
