/**
 * Queue | Sorting 
 * Time O(n^2) | Space O(n) | Time complexity can be brought down to n*log(n) by using a linked-list-queue. I'm lazy so I didn't implement it.
 * https://leetcode.com/problems/reveal-cards-in-increasing-order
 * 
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    
    const queue = [];

    for(let i = 0; i < deck.length; i++) {
        queue.push(i);
    }

    deck.sort((a,b) => a-b).reverse(); // doing reverse so we can perform pop operation to get the smallest value instead of shift method which is O(n)
    const result = [];

    let skip = false;
    while(queue.length) {
        const idx = queue.shift(); // get the first item

        if(!skip) {
            const val = deck.pop();
            result.push([idx, val]);
        }

        if(skip) queue.push(idx);

        skip = !skip;
    }

    result.sort((a,b) => a[0]-b[0]);

    return result.map((item) => item[1]);
};