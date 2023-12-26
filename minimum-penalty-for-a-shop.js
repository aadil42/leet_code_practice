/**
 * Array
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/minimum-penalty-for-a-shop/
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    
  let totalY = customers.split("").filter((char) => char === "Y").length;
  let yTaken = 0;
  let nTaken = 0;
  let minPanelty = Infinity;
  let minHour = 0;
  
  let i = 0; 
  while(i < customers.length + 1) {
      const currPanelty = (totalY - yTaken) + nTaken;
      if(currPanelty < minPanelty) {
          minPanelty = currPanelty;
          minHour = i;
      }
      if(customers[i] === "Y") yTaken++;
      if(customers[i] === "N") nTaken++;
      i++; 
  }
  return minHour;
  
};

/**
 * Array
 * https://leetcode.com/problems/minimum-penalty-for-a-shop/
 * 
 * Time O(n) | Space O(1)
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime1 = function(customers) {

    // count open penelty
    let op = 0;
    customers.split('').forEach((customer) => {
      if(customer === 'Y') op++;
    });
    // keep the closed penelty 0
    let cp = 0;
    let closedAt = 0;
    let minPenalty = Infinity;
  
    // the iterator 
    let current = 0;
    while(current < customers.length + 1) {
      // update closedAt and minPenalty
      if(op + cp < minPenalty) {
        minPenalty = op+cp;
        closedAt = current;
      }
      // updated op and cp
      if(customers[current] === 'Y') op--;
      if(customers[current] === 'N') cp++;
      current++;
    }  
  
    return closedAt;
  };