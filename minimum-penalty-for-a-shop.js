/**
 * Linear
 * https://leetcode.com/problems/minimum-penalty-for-a-shop/
 * 
 * Time O(n) | Space O(1)
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {

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