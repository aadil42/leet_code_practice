/**
 * Brute Force. 
 * Time O(n*m) | Space O(1) | weirdly the brute force does get accepted even though the constraints are too high.
 * https://leetcode.com/problems/most-profit-assigning-work/
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    
    let maxProfit = 0;

    for(let i = 0; i < worker.length; i++) {
        let maxProfitOfWorker = 0;
        for(let j = 0; j < difficulty.length; j++) {
            if(difficulty[j] <= worker[i]) {
                maxProfitOfWorker = Math.max(maxProfitOfWorker, profit[j]);
            }
        }
        maxProfit += maxProfitOfWorker;
    }

    return maxProfit;
};