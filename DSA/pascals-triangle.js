/**
 * Better Solution (better code)
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
  const result = [[1]];

  if(numRows === 1) return result;

  let index = 1;
  while(index < numRows) {
      const preLayer = result[index-1];
      const currentLayer = [];

      for(let i = 0; i < preLayer.length + 1;  i++) {
          currentLayer[i] = (preLayer[i-1] || 0) + (preLayer[i] || 0);
      }
      
      result.push(currentLayer);
      index++;
  }

  return result;
};
/**
 * Better Solution
 * Time  O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/pascals-triangle
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function(numRows) {
    
  if(numRows === 1) return [[1]];
  if(numRows === 2) return [[1],[1,1]];

  const getPascalRow = (pre, curr) => {
      let i = 1;
      let j = 2;
      while(pre[j]) {
          curr.push(pre[i] + pre[j]);
          i++;
          j++;
      }
      curr.push(1);
      return curr;
  }

  const pascal = [];
  pascal.push([1]);
  pascal.push([1,1]);
  
  let i = 2;
  while(i < numRows) {
      pascal.push([1,i]);
      i++;
  }

  i = 2;
  while(i < pascal.length) {
      getPascalRow(pascal[i-1],pascal[i]);
      i++;
  }
  return pascal;
};

// link to the problem https://leetcode.com/problems/pascals-triangle/
// the time complexity will basically be the number of elements in pascale tringle. roughly height of tringle * number of honeycomb in each row.
// O(n^2);

var generate2 = function(num) {
    
    const outerArray = [];
    // adding first two rows of pascals triangle
    if (num >= 2) {
      outerArray.push([1]);
      outerArray.push([1, 1]);
    } else {
      outerArray.push([1]);
    }
  
    // will  only run if we had number greater than 2
    if (num > 2) {
      for (let i = 2; i < num; i++) {
        let subArray = [];
         subArray.push(1);
        for (let j = 0; j < outerArray[i - 1].length - 1; j++) {
          subArray.push(outerArray[i - 1][j] + outerArray[i - 1][j + 1]);
        }
        subArray.push(1);
        outerArray.push(subArray);
      }
    }
  
    return outerArray;
 };