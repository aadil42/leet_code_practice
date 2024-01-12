/**
 * Recursion | Backtracking
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Time O(n^n) | Space O(26) 
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(!digits) return [];
    const numberToLetter = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];
    const dfs = (currStrArr, index) => {
        if(currStrArr.length === digits.length) {
            result.push(currStrArr.join(''));
            return;
        }

        const currentDigit = digits[index];
        const corrospondingDigits = numberToLetter[currentDigit].split('');

        for(let i = 0; i < corrospondingDigits.length; i++) {
            currStrArr.push(corrospondingDigits[i]);
            dfs(currStrArr, index+1);
            currStrArr.pop();
        }        
    }
    dfs([], 0);
    return result;
};

var letterCombinations2 = function(digits) {
  
    const result = [];
    const digitsMap = new Map();

    digitsMap.set('2', 'abc');
    digitsMap.set('3', 'def');
    digitsMap.set('4', 'ghi');
    digitsMap.set('5', 'jkl');
    digitsMap.set('6', 'mno');
    digitsMap.set('7', 'qprs');
    digitsMap.set('8', 'tuv');
    digitsMap.set('9', 'wxyz');

    function digitRecursion(i, currentString) {
        if(currentString.length === digits.length) {
            result.push(currentString);
            return;
        }
        digitsMap.get(digits[i]).split('').forEach((char) => {
            digitRecursion(i+1, currentString + char);
        });
    }

    if(digits) {
        digitRecursion(0, '');
    } else {
        return [];
    }

    return result;
};

const digits = "2345";
console.log(letterCombinations(digits));