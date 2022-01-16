var letterCombinations = function(digits) {
  
    const result = [];
    digitsMap = new Map();

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