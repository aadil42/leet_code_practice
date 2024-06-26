/**
 * Sorting 
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/k-closest-points-to-origin/
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {

  const getDistance = ([x,y]) => {
      return Math.sqrt(Math.abs(0-x)**2 + Math.abs(0-y)**2);
  }

  return points
          .map((point) =>  ([...point, getDistance(point)]))
          .sort((a,b) => a[2]-b[2])
          .slice(0,k)
          .map((point) => [point[0], point[1]]);
};


/**
 * MinHeap
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/k-closest-points-to-origin/
 * Note: MinPriorityQueue is only defined in leetcode environment.
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest0 = function(points, k) {

  const minQ = new MinPriorityQueue({
      compare: (a,b) => (a[2]-b[2])
  });

  const getDistance = ([x,y]) => {
      return Math.sqrt(Math.abs(0-x)**2 + Math.abs(0-y)**2);
  }

  points.forEach( (point) => minQ.enqueue([...point, getDistance(point)]) );
  
  const result = [];
  while(!minQ.isEmpty() && result.length < k) {
      result.push(minQ.dequeue().slice(0,2));
  }

  return result;
};

/**
 * 
 * MinHeap
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest1 = function(points, k) {

    const closestPointHeap = new MinHeap();

    points.forEach((point, index) => {
        const distance = Math.sqrt(point[0]*point[0] + point[1]*point[1]);
        closestPointHeap.insert([distance, index]);
    });
    console.log(closestPointHeap.heap);
    const result = [];
    while(k > 0) {
        // console.log(closestPointHeap.peek());
        const cordinate = points[closestPointHeap.extractMin()[1]]; 
        result.push(cordinate);
        k--;
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
}
