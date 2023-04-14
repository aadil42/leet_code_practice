/**
 * 
 * MinQueue
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {

    const availableMinHeap = new MinPriorityQueue({
        compare: (e1, e2) => {
            if(e1[0] === e2[0]) return e1[1] - e2[1];
            return e1[0] - e2[0];
        }
    });

    const unavailableMinHeap = new MinPriorityQueue({
        compare: (e1, e2) => {
            if(e1[0] === e2[0]) return e1[1] - e2[1];
            return e1[0] - e2[0];
        }
    });

    servers.forEach((server, index) => {
        availableMinHeap.enqueue([server, index]);
    });

    const result = [];
    let t = 0;
    for(let i = 0; i < tasks.length; i++) {
        t = Math.max(i, t);

        if(!availableMinHeap.size()) {
          t = unavailableMinHeap.front()[0];
        }
        while(unavailableMinHeap.size() && unavailableMinHeap.front()[0] <= t) {
            const mostRecentTime = unavailableMinHeap.dequeue();
            availableMinHeap.enqueue([mostRecentTime[1], mostRecentTime[2]]);
        }

        const mostRecentTime = availableMinHeap.dequeue();
        result.push(mostRecentTime[1]);
        unavailableMinHeap.enqueue([t+tasks[i], mostRecentTime[0], mostRecentTime[1]]);
    }

    return result;
};