/**
 * Problem is very easy. If anything is hard about this problem is thoes fucking edge cases!
 * https://leetcode.com/problems/text-justification/
 * 
 * m = number of words. n = maxWidth.
 * Time O(m*n) | Space O(m)
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
    let i = 0;
    const result = [];

    const getLen = (line) => {
        return line.reduce((acc, word) =>{
            return acc + word.length;
        },0);
    }

    const fixLine = (line) => {
        let EvenSpaces = Math.floor((maxWidth - getLen(line))/Math.max(1, (line.length - 1)));
        let remainderSpaces = ((maxWidth - getLen(line))%Math.max(1, (line.length - 1)));
        for(let i = 1; i < line.length; i++) {
            line[i] = ' '.repeat(EvenSpaces) + line[i];
            if(remainderSpaces) {
                line[i] = ' ' + line[i];
                remainderSpaces--;
            }
        }
        if(line.length === 1) {
            line[1] = ' '.repeat(EvenSpaces + remainderSpaces);
        }
        return line;
    }

    const fixLastLine = (line) => {
        return line.join(' ') + ' '.repeat(maxWidth - (getLen(line) + line.length - 1));
    }

    let line = [];
    while(i < words.length) {

        if(getLen(line) + line.length + words[i].length > maxWidth) {
            fixLine(line);
            result.push(line.join(''));
            line = [];
            continue;
        }

        line.push(words[i]);
        i++;
    }

    result.push(fixLastLine(line));
    return result;
};