/**
 * Math | Arithmatic seris | Iteration
 * Time O(n) | Space O(1)
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    
    const gaussTotal = (start, end) => {
        return (start+(end - 1))*((end-start)/2);
    }

    let round = 1;
    let total = 0;
    while(n > 0) {
        let totalDays = 7;
        if(n-7 < 0) totalDays = n;

        total += gaussTotal(round, round+totalDays);
        n -= 7;
        round++;
    }
    return total;
};