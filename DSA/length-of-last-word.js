var lengthOfLastWord = function(s) {

    let firstCharOccurance = false;
    let lastWordLen = 0;

    for(let i = s.length - 1; i > -1; i--) {
        if(s[i] !== ' ') {
            firstCharOccurance = true;
            lastWordLen++;
        }
        if(firstCharOccurance && s[i] === ' ') {
            break;
        }
    }
    return lastWordLen;
};