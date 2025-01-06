/**
 * Brute force
 * Time O(n^2) | Space O(n)
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minIntervalBF = function(intervals, queries) {
    
    const result = [];
    
    for(let i = 0; i < queries.length; i++) {
        let smallestInterval = Infinity;
        for(let j = 0; j < intervals.length; j++) {
            if(queries[i] >= intervals[j][0] && queries[i] <= intervals[j][1] &&
            intervals[j][1] - intervals[j][0] + 1 < smallestInterval) {
                smallestInterval = intervals[j][1] - intervals[j][0] + 1;
            }
        }
        if(smallestInterval === Infinity) result.push(-1)
        else result.push(smallestInterval);
    }

    return result;
};

/**
 * PriorityQueue | Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/minimum-interval-to-include-each-query/
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {

  queries = queries.map((q, idx) => [idx, q]).sort((a,b) => a[1]-b[1]);

  intervals = intervals.sort((a,b) => a[0]-b[0]);

  const minQ = new MinPriorityQueue({
      compare: (a,b) => {
          return a[0] - b[0];
      }
  });

  let intervalIdx = 0;
  const ans = [];

  for (let i = 0; i < queries.length; i++) {
      
      const [idx, query] = queries[i];

      while (intervalIdx < intervals.length && intervals[intervalIdx][0] <= query) {
          
          const [start, end] = intervals[intervalIdx];
          const len = end - start + 1;
          minQ.enqueue([len, end]);
          intervalIdx++;
      }

      while (!minQ.isEmpty() && minQ.front()[1] < query) {
          minQ.dequeue();
      }

      if (!minQ.isEmpty()) {
          ans[idx] = minQ.front()[0];
      } 
      
      if (minQ.isEmpty()) {
          ans[idx] = -1;
      }
  }    

  return ans;
};

/**
 * MinHeap
 * intervals = m, queries = n
 * Time O(m*log(m) + n*log(n)) | Space O(m)
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval0 = function(intervals, queries) {
    
  // add indecis to queries
  for(let i = 0; i < queries.length; i++) {
      queries[i] = [queries[i], i];
  }

  // sort queries
  queries.sort((a,b) => {
     return a[0] - b[0];
  });

  // sort intervals based on left bound
  intervals.sort((a,b) => {
     return a[0] - b[0];
  });

  const intervalMinHeap = new MinHeap();

  let intervalIndex = 0;

  const result = [];
  for(let i = 0; i < queries.length; i++) {
      const currentQueriy = queries[i][0];
      // add intervals while the querie is in bound
      while(intervals[intervalIndex] && intervals[intervalIndex][0] <= currentQueriy) {
          const intervalLen = intervals[intervalIndex][1] - intervals[intervalIndex][0] + 1;
          intervalMinHeap.insert([intervalLen, intervals[intervalIndex][1]]);
          intervalIndex++;
      }

      // get rid of out of bound intervals
      while(intervalMinHeap.peek() && intervalMinHeap.peek()[1] < currentQueriy) {
          intervalMinHeap.extractMin();
      }

      // finally adding smallest interval len to result
      if(intervalMinHeap.peek()) {
          result[queries[i][1]] = intervalMinHeap.peek()[0];
      } else {
          result[queries[i][1]] = -1;
      }
  }

  return result;
};


class MinHeap {
constructor() {
  this.heap = [];
}

compare(a, b) {
  return a[0] - b[0];
}

getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

getLeftChildIndex(index) {
  return (index * 2) + 1;
}

getRightChildIndex(index) {
  return (index * 2) + 2;
}

insert(value) {
  this.heap.push(value);
  let currentIndex = this.heap.length - 1;
  let parentIndex = this.getParentIndex(currentIndex);

  while (currentIndex > 0 && this.compare(this.heap[currentIndex], this.heap[parentIndex]) < 0) {
    [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
    currentIndex = parentIndex;
    parentIndex = this.getParentIndex(currentIndex);
  }
}

extractMin() {
  if (this.heap.length === 0) {
    return null;
  }

  if (this.heap.length === 1) {
    return this.heap.pop();
  }

  const min = this.heap[0];
  this.heap[0] = this.heap.pop();
  let currentIndex = 0;
  let leftChildIndex = this.getLeftChildIndex(currentIndex);
  let rightChildIndex = this.getRightChildIndex(currentIndex);

  while (leftChildIndex < this.heap.length) {
    let smallestChildIndex = rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[leftChildIndex]) < 0
      ? rightChildIndex
      : leftChildIndex;

    if (this.compare(this.heap[currentIndex], this.heap[smallestChildIndex]) <= 0) {
      break;
    }

    [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
    currentIndex = smallestChildIndex;
    leftChildIndex = this.getLeftChildIndex(currentIndex);
    rightChildIndex = this.getRightChildIndex(currentIndex);
  }

  return min;
}

peek() {
  return this.heap.length > 0 ? this.heap[0] : null;
}

isEmpty() {
  return this.heap.length === 0;
}
}
