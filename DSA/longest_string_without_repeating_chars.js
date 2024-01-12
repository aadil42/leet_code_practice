var lengthOfLongestSubstring = function(s) {

    charSet = new Set();

    let i = 0;
    let j = 0;
    let totalLen = 0;

    while(j < s.length) {
        if(!charSet.has(s[j])){
            charSet.add(s[j]);
            j++;
        } else {
            charSet.delete(s[i]);
            i++;
        }
        totalLen = Math.max(totalLen, charSet.size);
    }

    return totalLen;
};

const str = 'pwwkew';
console.log(lengthOfLongestSubstring(str));
//abcabcbb abbcdeaacdefhj aa