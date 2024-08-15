/**
 * Array | Counting
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

    let fiveBills = 0;
    let tenBills = 0;
    let twentyBills = 0;

    for(let i = 0; i < bills.length; i++) {
        const bill = bills[i];

        if(bill === 5) {
            fiveBills += 1;
            continue;
        }

        if(bill === 10) {
            if(!fiveBills) return false;
            fiveBills -= 1;
            tenBills += 1;
            continue;
        }

        if(bill === 20) {

            if(fiveBills < 3 && !tenBills) return false;

            if(!tenBills && fiveBills >= 3) {
                fiveBills -= 3;
                twentyBills += 1;
                continue;
            }

            // if we only had one 10 bill no other bills
            if(!fiveBills) return false;

            fiveBills -= 1;
            tenBills -= 1;
            twentyBills += 1;
        }
    }

    return true;
};