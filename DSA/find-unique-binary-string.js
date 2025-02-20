// 1st time
/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-unique-binary-string/
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    
    const uniqueSet = new Set(nums.map((num) => parseInt(num, 2)));

    let min = Math.min(...nums.map((num) => {
        return parseInt(num, 2);
    }));

    min = min - 1 > -1 ? min - 1 : min;
    const binaryLen = nums[0].length;    

    while(true) {
        if(!uniqueSet.has(min)) {
            const len = min.toString(2).length;
            console.log(binaryLen - len);
            return "0".repeat(binaryLen - len) + min.toString(2);
        }
        min++;
    }

};

//// 2nd time
/**
 * Recursion/Backtracking
 * 
 * Time O(2^n) | Space O(n)
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString0 = function(nums) {
    
    const numsSet = new Set(nums);
    function dfs(i, binaryString) {
        // console.log(binaryString, i);
        if(i === nums.length) {
            // console.log(binaryString.join(''));
            if(!numsSet.has(binaryString.join(''))) {
                return binaryString.join('');
            }            
             // console.log('hehe');
            return false;
        }      
        // const leftString = binaryString.substring(0, i) + char + binaryString.substring(i+1);
        binaryString[i] === '0' ? binaryString[i] = '1' : binaryString[i] = '0';
        const result = dfs(i+1, binaryString);
        if(result) return result;
        binaryString[i] === '0' ? binaryString[i] = '1' : binaryString[i] = '0';
        const result1 = dfs(i+1, binaryString);
        if(result1) return result1;
    }

    const zeros = new Array(nums.length).fill('0');
    // console.log(zeros);
    return dfs(0, zeros);
};

//////// 3rd time.
/**
 * Brute force | Backtracking
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/find-unique-binary-string/
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString1 = function(nums) {
    const numsSet = new Set(nums);
    const binaryArr = [];

    for(let i = 0; i < nums.length; i++) {
        binaryArr.push(0);
    }

    return dfs(0, binaryArr, numsSet);
};

const flipBit = (idx, binaryArr) => {

    if(binaryArr[idx] === 0) {
        binaryArr[idx] = 1;
        return;
    } 

    binaryArr[idx] = 0;
    return;
}

const dfs = (idx, binaryArr, set) => {

    if(idx === binaryArr.length) {
        if(!set.has(binaryArr.join(""))) return true;
        return false;
    }

    flipBit(idx, binaryArr);
    if(dfs(idx+1, binaryArr, set)) return binaryArr.join("");
    flipBit(idx, binaryArr);
    if(dfs(idx+1, binaryArr, set)) return binaryArr.join("");
    return false;
}

/**
 * 4th time
 * BackTracking | Recursion | BruteForce
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/find-unique-binary-string
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    
    let isFound = false;
    let missing = "";
    const present = new Set(nums);
    const n = nums[0].length;

    const dfs = (binaryStr) => {

        if (isFound) return;

        if (binaryStr.length === n) {
            if (!present.has(binaryStr)) {
                isFound = true;
                missing = binaryStr;
                return;
            }

            return;
        } 

        dfs(binaryStr+"0");
        dfs(binaryStr+"1");
    }

    dfs("");
    return missing;
};