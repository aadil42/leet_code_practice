/**
 * PriorityQueue 
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/maximum-average-pass-ratio
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */

const maxAverageRatio = (classes, extraStudents) => {

    const maxQ = new MaxPriorityQueue({
        compare: (a,b) => {
            return b[0]-a[0];
        }
    });

    for(let i = 0; i < classes.length; i++) {
        
        const [totalPass, totalStudents] = classes[i];
        const diff = ((totalPass+1)/(totalStudents+1)) - (totalPass/totalStudents);
        maxQ.enqueue([diff, totalPass+1, totalStudents+1]);
    }

    while(extraStudents) {
        const [nextDiff, nextPass, nextTotal] = maxQ.dequeue();
        const nextNextDiff = ((nextPass+1)/(nextTotal+1)) - (nextPass/nextTotal);
        maxQ.enqueue([nextNextDiff, nextPass+1, nextTotal+1]);
        extraStudents--;
    }


    let averageNumiratorTotal = 0;
    
    while(!maxQ.isEmpty()) {
        const [diff, nextPass, nextTotal] = maxQ.dequeue();
        averageNumiratorTotal += (nextPass-1)/(nextTotal-1);
    }

    return averageNumiratorTotal/classes.length;
};