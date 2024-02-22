/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-the-town-judge
 * 
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    
    const trustyPeople = new Set();

    for(let i = 0; i < trust.length; i++) {
        trustyPeople.add(trust[i][0]);
    }

    // all people trust somebody, first condition doesn't satisfiy.
    if(trustyPeople.size === n) return -1;

    // find the potential judge
    let potentialJudge = -1;
    for(let i = 1;  i < n+1; i++) {
        if(!trustyPeople.has(i)) {
            potentialJudge = i;
            break;
        }
    }

    // check if all people trust judge.
    let peopleWhoTrustJudge = new Set();

    for(let i = 0;  i < trust.length; i++) {
        if(trust[i][1] === potentialJudge) {
            peopleWhoTrustJudge.add(trust[i][0]);
        }
    }

    if(peopleWhoTrustJudge.size === n-1) return  potentialJudge; 
    return -1;
};