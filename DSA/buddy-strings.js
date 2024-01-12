/**
 * https://leetcode.com/problems/buddy-strings/description/
 * 
 * Time  O(n*log(n)) | Space O(1)
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {

    if(s.length !== goal.length) return false;

    let sPointer = 0;
    let goalPointer = 0;
    const missMatchedS = [];
    const missMatchedGoal  = [];

    while(sPointer < s.length) {
        if(s[sPointer] !== goal[goalPointer]) {
            missMatchedS.push(s[sPointer]);
            missMatchedGoal.push(goal[goalPointer]);
        } 
        sPointer++;
        goalPointer++;
    }

    // checking annoying test case.
    let isSame = false;
    let hasEvenCount = false;
    if(s === goal) {
        isSame = true;
        s = s.split('').sort();
        
        let i = 1;
        while(i < s.length) {
            if(s[i-1] === s[i]) {
                hasEvenCount = true;
                break;
            }
            i++;
        }
    }
    const missMatchedCheck = missMatchedS[0] === missMatchedGoal[1] && missMatchedS[1] === missMatchedGoal[0];
    if(missMatchedS.length === 2 && missMatchedCheck) return true;
    if(isSame && hasEvenCount) return true;
    return false;
};

/**
 * 
 * Brute force 
 * Time O(n^3) | Space O(n)
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings1 = function(s, goal) {
    
    if(s.length !== goal.length) return false;

    const sArr = s.split('');
    const goalArr = goal.split('');

    const check = (str) => {
        for(let i = 0; i < str.length; i++) {
            if(str[i] !== goal[i]) return false;
        }
        return true;
    }

    const swap = (i, j) => {
        const temp = sArr[i];
        sArr[i] = sArr[j];
        sArr[j] = temp;
    }

    for(let i = 0; i < sArr.length; i++) {
        for(let j = i + 1; j < sArr.length; j++) {
            swap(i, j);
            if(check(sArr)) return true;
            swap(j, i);
        }
    }

    return false;
};