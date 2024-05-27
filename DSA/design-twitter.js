
var Twitter = function() {
  this.tweets = {};
  this.users =  {};
  this.time = 0;
};

/** 
 * Hashing
 * Time O(1) | Space O(1)
* @param {number} userId 
* @param {number} tweetId
* @return {void}
*/
Twitter.prototype.postTweet = function(userId, tweetId) {
  if(!this.tweets[userId]) {
      this.tweets[userId] = [];
  }
  this.tweets[userId].push([this.time, tweetId]);
  this.time++;
};

/** 
 * PirorityQueue 
 * Time O(n*log(n)) | Space O(n)
* @param {number} userId
* @return {number[]}
*/
Twitter.prototype.getNewsFeed = function(userId) {

  // the user is following himself because we want to display his tweets to 
  // if he's posted recent tweets or there are no followee  
  this.follow(userId, userId);

  const followees = this.users[userId];

  // Note: We  don't have  MinPriorityQueue outside leetcode environment.
  const maxQ = new MaxPriorityQueue({
      compare: (a,b) => {
          return b[0] - a[0];
      }
  });

  if(followees) {
      for(const followee of followees) {
          const followeeTweets = this.tweets[followee];
          for(let i = 0; followeeTweets && i < followeeTweets.length; i++) {
              maxQ.enqueue(followeeTweets[i]);
          }
      }
  }

  const recentFeed = [];

  while(!maxQ.isEmpty() && recentFeed.length < 10) {
      console.log(maxQ.front());
      recentFeed.push(maxQ.dequeue()[1]);
  }

  return recentFeed;
};

/** 
 * Hashing
 * Time O(1) | Space O(1)
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.follow = function(followerId, followeeId) {

  if(!this.users[followerId]) {
      this.users[followerId] = new Set();
  }
  this.users[followerId].add(followeeId);
};

/** 
 * Hashing
 * Time O(1) | Space O(1)
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.unfollow = function(followerId, followeeId) {
  this.users[followerId] && this.users[followerId].delete(followeeId);
};

/** 
* Your Twitter object will be instantiated and called as such:
* var obj = new Twitter()
* obj.postTweet(userId,tweetId)
* var param_2 = obj.getNewsFeed(userId)
* obj.follow(followerId,followeeId)
* obj.unfollow(followerId,followeeId)
*/
//////////////////////////////////////////////////////////////////////////////
var Twitter0 = function() {
    this.tweets = {};
    this.users = {};
    this.time = 0;
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter0.prototype.postTweet = function(userId, tweetId) {
    const userPosts = this.tweets[userId];
    if(userPosts) {
        userPosts.push([this.time, tweetId]); 
    } else {
        this.tweets[userId] = [[this.time, tweetId]];
    }
    this.time--;
};

/** 
 * using MinHeap
 * Time O(totalTweets*log(totalTweets)) | Space O(totalTweets)
 * @param {number} userId
 * @return {number[]}
 */
Twitter0.prototype.getNewsFeed = function(userId) {
    const tweetMaxHeap = new MinHeap();

    this.follow(userId, userId);
    const allFollowees = this.users[userId];
    if(allFollowees) {
        for(const followee of allFollowees) {
            const tweetsOfFollowee = this.tweets[followee];
           tweetsOfFollowee && tweetsOfFollowee.forEach((tweet) => {
                tweetMaxHeap.insert(tweet);
            });
        }
    }
    let tweetCount = 0;
    const result = [];
    while(!tweetMaxHeap.isEmpty() && tweetCount < 10) {
        result.push(tweetMaxHeap.extractMin()[1]);
        tweetCount++;
    }
    return result;
};

/** 
 * 
 * Time O(1) | Space O(1)
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter0.prototype.follow = function(followerId, followeeId) {
    const userFollows = this.users[followerId];
    if(userFollows) {
        userFollows.add(followeeId);
    } else {
        this.users[followerId] = new Set([followeeId]);
    }
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter0.prototype.unfollow = function(followerId, followeeId) {
    const userFollows = this.users[followerId];
    userFollows && userFollows.delete(followeeId);
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



/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */