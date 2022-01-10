var countCharacters = function(words, chars) {
let goodWordsLength = 0;    
charCountArr = new Array(26).fill(0);

chars.split('').forEach((char, index) => {
    charCountArr[char.charCodeAt(0) - 97]++;
});

words.forEach((word) => {
    const tmepArr = [...charCountArr];
    let charCount = 0;
    word.split('').forEach((char) => {
        if(tmepArr[char.charCodeAt(0) - 97] > 0) {
            charCount++;
            tmepArr[char.charCodeAt(0) - 97]--;
        }
    });
    if(charCount == word.length) {
        goodWordsLength += charCount;
    }
});

return goodWordsLength;
};

const  words = ["hello","world","leetcode"];
const chars = "welldonehoneyr";
console.log(countCharacters(words, chars));