/**
 * MinHeap
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    
    const currentPassMinHeap = new MinPriorityQueue({
        compare: (e1, e2) => {
            return e1[0] - e2[0];
        }
    });

    trips.sort((a,b) => {
        return a[1] - b[1];
    });

    let currentPassenger = 0;

    for(let i = 0; i < trips.length; i++) {
        while(currentPassMinHeap.size() && currentPassMinHeap.front()[0] <= trips[i][1]) {
            currentPassenger -= currentPassMinHeap.dequeue()[1];
        }
        currentPassenger += trips[i][0];
        if(currentPassenger > capacity) return false;
        currentPassMinHeap.enqueue([trips[i][2], trips[i][0]]);
    }

    return true;
};