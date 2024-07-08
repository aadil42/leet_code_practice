/**
 * Queue 
 * Time O(n) | Spacce O(n)
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {

    const q = new Queue();

    for(let i = 0; i < n; i++) {
        q.enqueue(i+1);
    }

    let i = 1;
    while(q.size() > 1) { 
        if(i%k === 0) {
            q.dequeue();
            i++;
            continue;
        }
        q.enqueue(q.dequeue());
        i++;
    }

    return q.dequeue();
};

/**
 * Time O(n) | Space O(n)
 * Math | Array
 * https://leetcode.com/problems/find-the-winner-of-the-circular-game
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner0 = function(n, k) {

    const circle = [];
    for(let i = 0; i < n; i++) {
        circle.push(i+1);
    }

    let idx = 0;
    while(circle.length > 1) {
        idx = (idx+k-1) % circle.length;
        circle.splice(idx,1);
    }

    return circle[0];
};

