/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.seatMinHeap = new MinHeap();
   for(let i = 1; i < n + 1; i++) {
       this.seatMinHeap.insert(i);
   }
};

/**
* @return {number}
*/
SeatManager.prototype.reserve = function() {
   return this.seatMinHeap.extractMin();
};

/** 
* @param {number} seatNumber
* @return {void}
*/
SeatManager.prototype.unreserve = function(seatNumber) {
   this.seatMinHeap.insert(seatNumber);
   return null;
};

/** 
* Your SeatManager object will be instantiated and called as such:
* var obj = new SeatManager(n)
* var param_1 = obj.reserve()
* obj.unreserve(seatNumber)
*/


class MinHeap {
 constructor() {
   this.heap = [];
 }

 compare(a, b) {
   return a - b;
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
