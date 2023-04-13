/**
 * 
 * MinHeap 
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    for(let i = 0; i < tasks.length; i++) tasks[i].push(i);
    tasks.sort((a, b) => a[0] - b[0]);
    const pq = new MinPriorityQueue({
        compare: (e1, e2) => {
            if(e1[1] === e2[1]) return e1[2] - e2[2];
            return e1[1] - e2[1];
        }
    });

  const result = [];
  let i = 0;
  let time = tasks[0][0];

  while(pq.size() || i < tasks.length) {
    while(i < tasks.length && tasks[i][0] <= time) {
      pq.enqueue(tasks[i]);
      i++;
    }

    if(pq.size()) {
      const temp = pq.dequeue();
      time += temp[1];
      result.push(temp[2]);
    } else {
      time = tasks[i][0];
    }
  }

  return result;
};