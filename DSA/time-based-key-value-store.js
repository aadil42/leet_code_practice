
var TimeMap = function() {
  this.hashTable = {};
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.search = function(key, timeStamp) {

  const arr = this.hashTable[key];

  if(!arr) return Infinity;
  
  let left = 0;
  let right = arr.length - 1;
  let closestSmallest = Infinity;

  while(left <= right) {
      
      const mid = left + Math.floor((right-left)/2);

      if(arr[mid][1] === timeStamp) return arr[mid];

      if(timeStamp > arr[mid][1]) {
          closestSmallest = arr[mid];
          left = mid+1;
      } else {
          right = mid-1;
      }
  }

  return closestSmallest;
}

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  const arr = this.hashTable[key] || [];
  arr.push([value, timestamp]);

  this.hashTable[key] = arr;
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  const result = this.search(key, timestamp);
  if(result === Infinity) return "";
  return result[0];
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/

var TimeMap2 = function() {
  this.database = {};  
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap2.prototype.set = function(key, value, timestamp) {
    const newEntry = [timestamp, value];
    if(this.database[key]) {
      this.database[key] = [...this.database[key], newEntry];
    } else {
      this.database[key] = [newEntry];
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap2.prototype.get = function(key, timestamp) {
    const arr = this.database[key];
    const latestTimeStamp = arr[arr.length - 1][0];
    if(timestamp > latestTimeStamp) return arr[arr.length - 1][1];

    let left = 0;
    let right = arr.length - 1;
    let result = "";
    let mid = -1;
    while(left <= right) {
      mid = Math.floor((left+right)/2);
      console.log(left, right);
      if(timestamp >= arr[mid][0]) {
        result = arr[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  return result;
};

/** 
 * Your TimeMap2 object will be instantiated and called as such:
 * var obj = new TimeMap2()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */