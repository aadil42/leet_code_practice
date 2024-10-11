/**
 * PriorityQueue | Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
 
var smallestChair = function(times, targetFriend) {
    
    const arrivalTime = new MinPriorityQueue({
        compare: (a,b) => a-b
    });

    const leaveTime = new MinPriorityQueue({
        compare: (a,b) => {
            return a[0]-b[0];
        }
    });

    times = times
                  .map((time, idx) => [idx, time[0], time[1]])
                  .sort((a,b) => a[1]-b[1]);


    // add all the chairs
    for(let  i = 0; i < times.length; i++) {
        arrivalTime.enqueue(i);
    }

    for(let i = 0; i < times.length; i++) {
        const [friend, arrive, leave] = times[i];

        while(!leaveTime.isEmpty() && leaveTime.front()[0] <= arrive) {
            arrivalTime.enqueue(leaveTime.dequeue()[1]);
        }    

        const chair = arrivalTime.dequeue();
        if(friend === targetFriend) return chair;

        leaveTime.enqueue([leave, chair]);
    }

    return -1;
};

