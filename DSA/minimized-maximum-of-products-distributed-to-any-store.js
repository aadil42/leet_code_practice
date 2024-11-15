/**
 * Binary Search
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
  
    const canDistribute = (maxGoods) => {
  
      let store = 0;
      let quantityIdx = 0;
      const copyQuantities = [...quantities];
  
      while (store < n && quantityIdx < copyQuantities.length) {
          const temp = copyQuantities[quantityIdx];
          copyQuantities[quantityIdx] -= maxGoods;
          if (temp - maxGoods <= 0) {
              quantityIdx++;
          }
          store++;
      }
  
      // console.log(copyQuantities, "after trying small value");
      for (let i = 0; i < copyQuantities.length; i++) {
          if (copyQuantities[i] > 0) return false;
      }
  
      return true;
    }
  
  
    let left = 0;
    let right = quantities.reduce((acc, quan) => acc+quan, 0);
    let minProducts = Infinity;
  
    while (left <= right) {
      const mid = left + Math.floor((right - left)/2);
      if (canDistribute(mid)) {
          minProducts = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
    }
  
    return minProducts;
};