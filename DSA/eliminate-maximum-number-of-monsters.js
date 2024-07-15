/**
 * Time O(n*log(n)) | Space O(n)
 * More code for better understanding.
 * https://leetcode.com/problems/eliminate-maximum-number-of-monsters
 * 
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    
    let time = [];
    for(let i = 0; i < dist.length; i++) {
        time.push([dist[i], speed[i]]);
    }

    time = time.map((t) => Math.ceil(t[0]/t[1]));
    time.sort((a,b) => {
        return a-b;
    });

    let currentTime = 0; 
    let index = 0;
    let slayed = 0;

    while(index < time.length) {
        if(currentTime === time[index]) return slayed;
        currentTime++;
        index++;
        slayed++;
    }

    return slayed;
};

/**
 * Greedy.
 * Time O(n*log(n)) | Space O(n)
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum1 = function(dist, speed) {
    
    const time = dist.map((d, i) => {
        return d / speed[i];
    });

    let monsterSlyed = 1;
    time.sort((a,b) => a-b);
    for(let i = 1; i < time.length; i++) {
        if(time[i] <= monsterSlyed) return monsterSlyed;
        monsterSlyed++;
    }

    return monsterSlyed;
};
