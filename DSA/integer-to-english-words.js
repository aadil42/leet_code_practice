/**
 * Hashing | Array
 * Time O(1) | Space O(1)
 * https://leetcode.com/problems/integer-to-english-words/
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    
    // edge case.
    if(num === 0) return "Zero";

    const oneHash = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        0: ""
    };
    
    const tenHash = {
        2: "Twenty",
        3: "Thirty",
        4: "Forty",
        5: "Fifty",
        6: "Sixty",
        7: "Seventy",
        8: "Eighty",
        9: "Ninety",
        0: ""
    }

    const teenHash = {
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        0: ""
    }

    // helper methods.
    const removeLeadingZeros = (num) => {
        num = num.split("");
        while(num[0] === "0") num.shift();
        return num.join("");
    }

    const shouldSpace = (num) => {
            if(oneHash[num]) return " ";
            if(tenHash[num]) return " ";
            return "";
    }

    const getThreeDigitToWord = (num) => {

        num = removeLeadingZeros(num);
        // if num is one digit
        if(num.length === 0) return "";

        if(num.length === 1) return oneHash[num];
        // console.log(num, 'haha');

        // if num is two digit
        if(num.length === 2) {
            // if the digits are ten.
            if(num[0] == 1 && num[1] == 0) return "Ten";
            if(num[0] == 1) return teenHash[num];
        }
        
        if(num.length === 2) {
            return `${tenHash[num[0]]}${shouldSpace(num[1])}${oneHash[num[1]]}`;
        }

        // if the num is 3 digit
        if(num[1] == 1) {
            // if the last two digit are ten.
            if(num[2] == 0) return `${oneHash[num[0]]} Hundred Ten`; 
            return `${oneHash[num[0]]} Hundred ${teenHash[num[1]+num[2]]}`;
        }

        word = "";
        word += `${oneHash[num[0]]}${shouldSpace(num[0])}${oneHash[num[0]] && "Hundred"}`;
        word += `${shouldSpace(num[1])}${tenHash[num[1]]}`;
        word += `${shouldSpace(num[2])}${oneHash[num[2]]}`;
        return word;
    }

    let strNum = num + "";
    strNum = strNum.split("").reverse();

    let numArr = [];
    
    while(strNum.length) {
        numArr.push(strNum.splice(0,3).reverse());
    }

    numArr = numArr.reverse();
    
    const wordHash = [""," Thousand"," Million"," Billion"].reverse();

    let ans = [];
    while(numArr.length) {
        const num = numArr.pop().join("");
        const word = getThreeDigitToWord(num);
        if(word) {
            ans.push(word+wordHash.pop());
            continue;
        }
        wordHash.pop();
    }

    ans = ans.reverse().join(" ");
    return ans;
};