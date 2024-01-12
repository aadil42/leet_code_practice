
var UndergroundSystem1 = function() {
    
    this.stationToStationTime = {}; // stationStart-stationEnd -> [total, count];
    this.time = {}; // id -> [stationName, time]; 
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem1.prototype.checkIn = function(id, stationName, t) {
    this.time[id] = [stationName, t];
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem1.prototype.checkOut = function(id, stationName, t) {
    const [startStationName, startTime] = this.time[id];

    const timeTaken = t - startTime;

    const stationHash = `${startStationName}-${stationName}`;
    
    let existingData = this.stationToStationTime[stationHash];
    if(existingData !== undefined) {
        existingData[0] += timeTaken;
        existingData[1]++;
    } else {
        existingData = [];
        existingData[0] = timeTaken;
        existingData[1] = 1;
    }

    // delete this.time[id]; // this is optional. if we call checkIn with existing id
    // then it will be just overwriten.
    this.stationToStationTime[stationHash] = existingData;
};

/** 
 * Time O(1) | Space O(1)
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem1.prototype.getAverageTime = function(startStation, endStation) {
    const [totalTime, count] = this.stationToStationTime[`${startStation}-${endStation}`];
    return totalTime/count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

var UndergroundSystem = function() {
    this.stationSystem = {};
    this.averageTime = {};
};

/** Time O(1) | Space O(1)
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.stationSystem[id] = [stationName, '', t, ''];
};

/** Time O(1) | Space O(1)
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const user = this.stationSystem[id];
    //1 is the position where we store end station
    // 3 is the position where we store end time
    user[1] = stationName;
    user[3] = t; 
    console.log(user);
    const stationHash = `${user[0]}-${user[1]}`;
    // console.log(stationHash, this.stationHash);
    if(this.averageTime[stationHash]) {
        this.averageTime[stationHash][0] += 1;
        this.averageTime[stationHash][1] += user[3] - user[2];
    } else {
        this.averageTime[stationHash] = [];
        this.averageTime[stationHash][0] = 1;
        this.averageTime[stationHash][1] = user[3] - user[2];
    }
};

/** Time O(1) | Space O(1)
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    // console.log(this.averageTime);
    const [rounds, totalHours] = this.averageTime[`${startStation}-${endStation}`];
    return totalHours / rounds;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */