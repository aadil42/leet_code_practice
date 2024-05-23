/**
 * minQueue 
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/single-threaded-cpu/
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    
  const minQ = new MinPriorityQueue({
      compare: (a,b) => {
          if(a[1] === b[1]) return a[2] - b[2];
          return a[1] - b[1];
      }
  });

  tasks = tasks.map((task, idx) => [...task, idx]);

  let i = 0;
  let t = tasks[0][0];
  const order = [];

  while(i < tasks.length || !minQ.isEmpty()) {
      while(i < tasks.length && tasks[i][0] <= t) {
          minQ.enqueue(tasks[i]);
          i++;
      }
      if(!minQ.isEmpty()) {
          const task = minQ.dequeue();
          order.push(task[2]);
          t += task[1];
          continue;
      }
      t = tasks[i][0];
  }

  return order;
};

/**
 * 
 * MinHeap 
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder0 = function(tasks) {
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