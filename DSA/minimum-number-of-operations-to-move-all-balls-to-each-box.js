/**
 * Time O(n) | Space O(n)
 * PreFixSum | Array | String | Counting
 * https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    

    const leftToRight = [];
    const rightToLeft = [];

    for (let i =  0; i < boxes.length; i++) {
        leftToRight.push(0);
        rightToLeft.push(0);
    }

    boxes = boxes.split("").map((bit) => +bit);

    let increamenter = 0;
    let curr = 0;
    let i = 0;
    
    // go left to right
    while (i < boxes.length) {

        leftToRight[i] += curr+increamenter;
        curr = leftToRight[i];

        if (boxes[i] === 1) increamenter++;
        i++;
    }

    increamenter = 0;
    curr = 0;
    i = boxes.length - 1;

    // go right to left
    while (i > -1) {

        rightToLeft[i] += curr+increamenter;
        curr = rightToLeft[i];

        if (boxes[i] === 1) increamenter++;
        i--;
    }

    const ans = [];

    for (let i = 0;  i < boxes.length; i++) {
        ans.push(leftToRight[i] + rightToLeft[i]);
    }

    return ans;
};

