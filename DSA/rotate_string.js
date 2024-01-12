var rotateString = function(s, goal) {
  
    sArr = s.split('');
    for(let i = 0; i < sArr.length; i++) {
        if(s === goal) {
            return true;
        } else {
           sArr.push(sArr[0]);
           sArr.shift();
           s = sArr.join('');
        }
    }

    return false;
};

// const s = "abcde";
// const goal = "cdeab";

// console.log(rotateString(s, goal));

var rotateStringClever = function(s, goal) {
  
originalStrLen = s.length;    
totalString = s + s;
totalString = totalString.split('');

let i = 0;
let j = originalStrLen;
let k = 0;
for(let i = 0; i < originalStrLen; i++){
tempStr = totalString.slice(k, j);
if(tempStr.join('') == goal) {
    return true;
} else {
    k++;
    j++;
}
}

return false;
};

const s = "abcde";
const goal = "abced";
console.log(rotateStringClever(s, goal));
