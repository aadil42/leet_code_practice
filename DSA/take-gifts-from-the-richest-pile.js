/**
 * Max Priority Queue 
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/take-gifts-from-the-richest-pile
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    
    const maxQ = new MaxPriorityQueue({
        compare: (a,b) => b-a
    });

    for(let i = 0; i < gifts.length; i++) {
        maxQ.enqueue(gifts[i]);
    }

    while(k) {
        const maxPile = maxQ.dequeue();
        maxQ.enqueue(Math.floor(Math.sqrt(maxPile)));
        k--;
    }

    let total = 0;
    while(!maxQ.isEmpty()) {
        total += maxQ.dequeue();
    }

    return total;
};