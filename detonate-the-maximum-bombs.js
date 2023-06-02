
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