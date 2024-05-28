/**
 * MinPriorityQueue | MaxPriorityQueue
 * Time O(n*log(n)) | Space O(1) (we'll store max of 26 value in each heap)
 * https://leetcode.com/problems/task-scheduler/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {

  const minQ = new MinPriorityQueue({
      compare: (a,b) => {
          return a[0]-b[0];
      }
  });

  const maxQ = new MaxPriorityQueue({
      compare: (a,b) => {
          return b-a;
      }
  });

  const taskFrequency = {};
  for(let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      taskFrequency[task] = (taskFrequency[task] && taskFrequency[task] + 1) || 1;
  }

  for(const key in taskFrequency) {
      maxQ.enqueue(taskFrequency[key]);
  }

  let time = 0;
  while(!minQ.isEmpty() || !maxQ.isEmpty()) {
      let remaining = maxQ.dequeue();
      remaining -= 1;
      if(remaining > 0) minQ.enqueue([time+n, remaining]);
      if(!minQ.isEmpty() && minQ.front()[0] === time) maxQ.enqueue(minQ.dequeue()[1]);
      time++;
  }
  
  return time;
};

/**
 * 
 * MinHeap and MaxHeap
 * Time O(tasks.length*log(tasks.length*n)) | Space O(n)
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval0 = function(tasks, n) {

   if(n === 0) return tasks.length;
   const maxHeapTask = new MaxHeap();
   const minHeapTask = new MinHeap();

   const tasksCount = {};
   tasks.forEach((task) => {
       if(tasksCount[task]) {
           tasksCount[task] += 1;
       } else {
           tasksCount[task] = 1;
       }
   });

   // inserting all the tasks
   for(const key in tasksCount) {
     if(tasksCount.hasOwnProperty(key)) {
          maxHeapTask.insert(tasksCount[key]);
     }
   }

   let time = 0;
   while(!maxHeapTask.isEmpty() || !minHeapTask.isEmpty()) {
       time++;
       let fromMax = maxHeapTask.extractMax();
       fromMax -= 1;
       if(fromMax > 0) minHeapTask.insert([time+n, fromMax]);
       if(minHeapTask.peek() && minHeapTask.peek()[0] == time) maxHeapTask.insert(minHeapTask.extractMin()[1]);
   }

   return time;
};


class MaxHeap {
 constructor() {
   this.heap = [];
 }

 // Get the index of the parent node
 getParentIndex(index) {
   return Math.floor((index - 1) / 2);
 }

 // Get the index of the left child node
 getLeftChildIndex(index) {
   return 2 * index + 1;
 }

 // Get the index of the right child node
 getRightChildIndex(index) {
   return 2 * index + 2;
 }

 // Swap two elements in the heap
 swap(index1, index2) {
   const temp = this.heap[index1];
   this.heap[index1] = this.heap[index2];
   this.heap[index2] = temp;
 }

 // Insert a new element into the heap
 insert(value) {
   this.heap.push(value);
   this.bubbleUp(this.heap.length - 1);
 }

 // Maintain the max-heap property by bubbling up an element
 bubbleUp(index) {
   while (index > 0) {
     const parentIndex = this.getParentIndex(index);
     if (this.heap[parentIndex] >= this.heap[index]) {
       break; // If parent is greater or equal, heap property is maintained
     }
     this.swap(parentIndex, index);
     index = parentIndex;
   }
 }

 // Extract the maximum element from the heap
 extractMax() {
   if (this.isEmpty()) {
     return null;
   }

   const max = this.heap[0];
   const lastElement = this.heap.pop();
   if (!this.isEmpty()) {
     this.heap[0] = lastElement;
     this.bubbleDown(0);
   }
   return max;
 }

 // Maintain the max-heap property by bubbling down an element
 bubbleDown(index) {
   const leftChildIndex = this.getLeftChildIndex(index);
   const rightChildIndex = this.getRightChildIndex(index);
   let largestIndex = index;

   if (
     leftChildIndex < this.heap.length &&
     this.heap[leftChildIndex] > this.heap[largestIndex]
   ) {
     largestIndex = leftChildIndex;
   }

   if (
     rightChildIndex < this.heap.length &&
     this.heap[rightChildIndex] > this.heap[largestIndex]
   ) {
     largestIndex = rightChildIndex;
   }

   if (largestIndex !== index) {
     this.swap(largestIndex, index);
     this.bubbleDown(largestIndex);
   }
 }

 // Peek at the maximum element in the heap without extracting it
 peek() {
   return this.heap.length > 0 ? this.heap[0] : null;
 }

 // Get the size of the heap
 size() {
   return this.heap.length;
 }

 // Check if the heap is empty
 isEmpty() {
   return this.heap.length === 0;
 }
}
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