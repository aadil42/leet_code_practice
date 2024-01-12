/**
 * 
 * Linear 
 * https://leetcode.com/problems/furthest-point-from-origin/
 * Time O(n) | Space O(1)
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    
    let leftMoves = 0;
    let rightMoves = 0;
    let blankMoves = 0;

    for(let i = 0; i < moves.length; i++) {
        if(moves[i] === 'L') leftMoves++;
        if(moves[i] === 'R') rightMoves++;
        if(moves[i] === '_') blankMoves++;    
    }

    return Math.max(leftMoves, rightMoves) - Math.min(leftMoves, rightMoves) + blankMoves;
};