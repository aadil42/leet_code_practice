/**
 * 
 * Time O(n) | Space O(numRows*n)
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if(numRows === 1) return s;
    let zigZagArr = [];
    for(let i = 0; i < numRows; i++) {
        zigZagArr.push([]);
    };

    let row = 0;
    let column = 0;
    let i = 0;
    let goUp = false;
    while(i < s.length) {
        if(!goUp) {
           [row, i] = goDown(row, column, i);
           goUp = !goUp;
           column++;
        } else {
            [row,column, i] = goUpD(row,column,i);
            goUp = !goUp;
        }
    }

    function goUpD(r,c,i) {
        
        while(r > -1 && i < s.length) {
            zigZagArr[r][c] = s[i];
            i++;
            c++;
            r--;
        }
        r = 1;
        c = c - 1;
        return [r,c,i];
    }

    function goDown(r,c,i) {
        
        while(r < numRows) {
            zigZagArr[r][c] = s[i];
            i++;
            r++;
        }

        r = numRows - 2;
        return [r,i];
    }

    zigZagArr = zigZagArr.map((arr) => {
        return arr.filter((char) => {
            return char !== undefined;
        });
    });
    
    let result = '';
    for(let i = 0; i < zigZagArr.length; i++) {
        result += zigZagArr[i].join('');
    };

    return result;
};


/**
 * 
 * Time O(n) | Space O(1)
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if(numRows === 1) return s;
    
    let result = '';
    for(let i = 0; i < numRows; i++) {
        const increament = 2 * (numRows - 1);
        for(let j = i; j < s.length; j+=increament) {
            result += s[j];
            // this condition is the meat of the code. understand this and you'll understand the logic
            if(i > 0 && i < numRows - 1 && j + increament - 2 * i < s.length) {
                result += s[j + increament - 2 * i];
            }
        }
    }

    return result;
};