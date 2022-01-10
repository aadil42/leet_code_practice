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

const s = "abcde";
const goal = "cdeab";

console.log(rotateString(s, goal));