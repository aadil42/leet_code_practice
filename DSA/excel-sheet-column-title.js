/**
 * 
 * Time O(log(n)) | Space O(log(n))
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

    const result = [];
    while(columnNumber > 0) {
      const remainder = (columnNumber - 1) % 26;
      const char = String.fromCharCode('A'.charCodeAt(0) + remainder);
      result.push(char);
      columnNumber = Math.floor((columnNumber - 1)/26);
    }
  
    return result.reverse().join('');
  };


/**
 * https://leetcode.com/problems/excel-sheet-column-title/
 * 
 * Brute  Force 
 * Time O(n) | Space O(1)
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle1 = function(columnNumber) {
    const alphabetObj = {
      '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F', '7': 'G', '8': 'H', '9': 'I', '10': 'J',
      '11': 'K', '12': 'L', '13': 'M', '14': 'N', '15': 'O', '16': 'P', '17': 'Q', '18': 'R', '19': 'S', '20': 'T',
      '21': 'U', '22': 'V', '23': 'W', '24': 'X', '25': 'Y', '26': 'Z',
      'A': '1', 'B': '2', 'C': '3', 'D': '4', 'E': '5', 'F': '6', 'G': '7', 'H': '8', 'I': '9', 'J': '10',
    'K': '11', 'L': '12', 'M': '13', 'N': '14', 'O': '15', 'P': '16', 'Q': '17', 'R': '18', 'S': '19', 'T': '20',
    'U': '21', 'V': '22', 'W': '23', 'X': '24', 'Y': '25', 'Z': '26'
    };
  
    const result = [];
    for(let i = 0; i < 1000; i++) {
      result.push('');
    }
    let index = 1;
    while(index < columnNumber + 1) {
      let digitIndex = 0;
  
      while(result[digitIndex] === 'Z') {
        result[digitIndex] = 'A';
        digitIndex += 1;
      }
  
      if(result[digitIndex] === '') {
        result[digitIndex] = 'A';
        index++;
        continue;
      }
      const currentAlphabet = result[digitIndex];
      result[digitIndex] = alphabetObj[(+alphabetObj[currentAlphabet] + 1).toString()];
      index++;
    }
  
    return result.reverse().join('');
  };