/**
 * Recursion/Backtracking
 * 
 * Time O(2^n) | Space O(n)
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    
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