/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanData = [   
            ["I", 1],
            ["IV", 4],
            ["V", 5],
            ["IX", 9],
            ["X", 10],
            ["XL", 40],
            ["L", 50],
            ["XC", 90],
            ["C", 100],
            ["CD", 400],
            ["D", 500],
            ["CM", 900],
            ["M", 1000],
            ];

  let romanNum = '';
  while(num > 0) {
    let romanDigit = '';
    for(let i = romanData.length - 1; i > -1; i--) {
        if(Math.floor(num/romanData[i][1]) > 0) {
          romanDigit = romanData[i];
          for(let j = 0; j < Math.floor(num/romanData[i][1]); j++) {
            romanNum += romanData[i][0];
          }
          break;
      }
    }
    num = num % (Math.floor(num/romanDigit[1]) * romanDigit[1]);
  }

  return romanNum;
};