/**
 * Array | Stack
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/time-needed-to-buy-tickets
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    tickets = tickets.map((ticket, idx) => {
        return [ticket, idx];
    });

    let time = 0;
    let i = 0;

    while(true) {
        let [left, idx] = tickets[i];
        left -= 1;
        time++;

        if(left === 0 && idx === k) return time; 
        
        (left > 0) && tickets.push([left, idx]);
        i++;
    }

};