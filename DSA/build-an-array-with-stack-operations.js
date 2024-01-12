/**
 * Stacks
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/build-an-array-with-stack-operations/
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    
    let number = 1;
    let i = 0;
    const ans = [];
    const helperStack = [];

    while(i < target.length) {

        while(number === target[i] && helperStack.length !== i) {
            helperStack.pop();
            ans.push('Pop');
        }
        if(number === target[i]) i++;
        helperStack.push(number);
        number++;
        ans.push('Push');
    }

    return ans;
};

var buildArray1 = function(target, n) {
    
    const outputArr = [];
    const mySet = new Set();
    
    for(let i = 0; i < target.length; i++) {
        mySet.add(target[i]);
    }
    j = 1;
    while(j <= n && mySet.size) {
        
        outputArr.push('Push');
        
        if(!mySet.has(j)) {
            outputArr.push('Pop');
        }
        
        if(mySet.has(j)) {
            mySet.delete(j);
        }  
        j++;
    }
    
    return outputArr;
};

console.log(buildArray([1,3], 3));