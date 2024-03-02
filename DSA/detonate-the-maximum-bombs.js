
/** 
 * BFS
 * Time O(n^2) | Space O(n)
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs, bombIndex) {
    
    const detonate = (bomb, bombIndex) => {

        // for bfs we ideally use a queue but here a stack would work too.
        const arr = [];
        const detoneted = new Set();
        arr.push(bomb);
        detoneted.add(bombIndex);
        let max = 0;
        while(arr.length) {
            const currentBomb = arr.pop();
            max += 1;
            addNeighbor(currentBomb,  arr, detoneted);
        }
        return max;
    }

    const addNeighbor = (bomb, arr, detoneted) => {

        const isInRange = (b) => {
            const detonationRadius = bomb[2];
            distance = Math.sqrt((bomb[0] - b[0])**2 + (bomb[1] - b[1])**2);
            if(distance <= detonationRadius) return true;
            return false;
        }

        for(let i = 0; i < bombs.length; i++) {
            if(!detoneted.has(i) && isInRange(bombs[i])) {
                arr.push(bombs[i]);
                detoneted.add(i);
            }
        }
    }

    let maxDetonation = 0;
    for(let i = 0; i < bombs.length; i++) {
        maxDetonation = Math.max(maxDetonation, detonate(bombs[i], i));
    }
    return maxDetonation;
};

/**
 * BFS
 * Time O(n^3) | Space O(n)
 * https://leetcode.com/problems/detonate-the-maximum-bombs/
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation1 = function(bombs) {
    
    const bfs = (origin, idx) =>  {

        let detonetedBombs = 0;

        const q = new Queue();
        const visited = new Set();
        q.enqueue(origin);
        visited.add(idx);

        while(!q.isEmpty()) {

            const size = q.size();
            detonetedBombs += size;

            for(let i = 0; i < size; i++) {
                const bomb = q.dequeue();

                const currentX = bomb[0];
                const currentY = bomb[1];
                const currentR = bomb[2];

                for(let j = 0; j < bombs.length; j++) {
                    const nextBomb = bombs[j];
                    const nextX = nextBomb[0];
                    const nextY = nextBomb[1];
                    const distanceSquare = Math.abs(nextX - currentX)**2 + Math.abs(nextY - currentY)**2
                    const distance = Math.sqrt(distanceSquare);

                    if(visited.has(j)) continue;
                    
                    if(distance <= currentR) {
                        visited.add(j);
                        q.enqueue(nextBomb);
                    }
                }
            }
        }

        return detonetedBombs;
    }

    let maxDetonetion = 0;

    for(let i = 0; i < bombs.length; i++) {
        maxDetonetion = Math.max(maxDetonetion, bfs(bombs[i], i));
    }

    return maxDetonetion;
};