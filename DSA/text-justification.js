/**
 * 
 * m = number of words. n = maxWidth.
 * Time O(m*n) | Space O(m)
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
    const getText = (start, wc, charCount) => {
        const text = [];

        // if it's the last line.
        if(start + wc === words.length) {
            let total = 0;
            for(let i = start; i < words.length; i++) {
                if(i === words.length - 1) {
                    text.push(words[i]);
                    total += words[i].length;
                    continue;
                }
                text.push(words[i]+ " ");
                total += words[i].length+1
            }
            console.log(start, wc, maxWidth, total, 'this');
            if(maxWidth-total > 0) {
                text.push(" ".repeat(maxWidth - total));
            }
            return text.join("");
        }

        // if there's only one word 
        if(wc === 1) {
            text.push(words[start]);
            text.push(" ".repeat(maxWidth-charCount));
            return text.join("");
        }   

        
        const space = " ".repeat(Math.floor((maxWidth-charCount)/(wc-1)));
        let leftSpaces = ((maxWidth-charCount)%(wc-1));

        let i = start;
        while(wc) {
            if(wc === 1) {
                text.push(words[i]);
                i++;
                wc--;
                continue;
            }
            if(leftSpaces) {
                text.push(words[i]);
                text.push(space + " ");
                leftSpaces--;
                wc--;
                i++;
                continue;
            }
            text.push(words[i]);
            text.push(space);
            wc--;
            i++;

        }
        return text.join("");
    }

    let start = 0;
    const result = [];

    while(start < words.length) {
        currentWC = 1;
        charCount = words[start].length;
        i = start+1;

        while(i < words.length && (currentWC + charCount + words[i].length) <= maxWidth) {
            currentWC++;
            charCount += words[i].length;
            i++;
        }

        result.push(getText(start, currentWC, charCount));
        start = i;
    }

    return result;
};


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
var fullJustify1 = function(words, maxWidth) {
    
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