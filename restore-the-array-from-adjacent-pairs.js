/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
 * 
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {

    const adjacentHash = new Map();

    // populate 
    for(let i = 0; i < adjacentPairs.length; i++) {
        const node1 = adjacentPairs[i][0];
        const node2 = adjacentPairs[i][1];

        const adjecentElements1 = adjacentHash.get(node1) || [];
        const adjecentElements2 = adjacentHash.get(node2) || [];

        adjecentElements1.push(node2);
        adjecentElements2.push(node1);
        adjacentHash.set(node1, adjecentElements1);
        adjacentHash.set(node2, adjecentElements2);
    }

    // find key with only one element. That is either start or end of the original arr.
    let initialKey = null;
    for(const [key, val] of adjacentHash) {
        if(val.length === 1) {
            initialKey = key;
            break;
        };
    }

    const originalArr = [initialKey, adjacentHash.get(initialKey)[0]];
    let currentNode = originalArr[1];

    while(adjacentHash.get(currentNode).length !== 1) {

        const neighborNodes = adjacentHash.get(currentNode);
        if(originalArr[originalArr.length - 2] === neighborNodes[0]) {
            originalArr.push(neighborNodes[1]);
        } else  {
            originalArr.push(neighborNodes[0]);
        }

        currentNode = originalArr[originalArr.length - 1];
    }

    return originalArr;
};