/**
 * Hashing | Counting | Sorting
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-players-with-zero-or-one-losses
 * 
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {

    const loseFrequency = {};

    for(let i = 0; i < matches.length; i++) {
        const winner = matches[i][0];
        const loser = matches[i][1];

        loseFrequency[winner] = (loseFrequency[winner] && loseFrequency[winner]) || 0;
        loseFrequency[loser] = (loseFrequency[loser] && loseFrequency[loser] + 1) || 1;
    }

    const onlyWinners = [];
    const lostOnce = [];

    for(let key in loseFrequency) {
        if(loseFrequency[key] === 0) onlyWinners.push(key);
        if(loseFrequency[key] === 1) lostOnce.push(key);
    }

    return [onlyWinners.sort((a,b) => a-b), lostOnce.sort((a,b) => a-b)];
};

/**
 * Hashing | Counting | Sorting
 * Time O(n) | Space O(n)
 * 
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners1 = function(matches) {
    
    const winLoseFrequency = {};

    for(let i = 0; i < matches.length; i++) {
        const winPlayer = matches[i][0];
        const losePlayer = matches[i][1];

        if(winLoseFrequency[winPlayer]) {
            winLoseFrequency[winPlayer][0] = winLoseFrequency[winPlayer][0]+1; 
        } else {
            winLoseFrequency[winPlayer] = [1, 0];
        }

        if(winLoseFrequency[losePlayer]) {
            winLoseFrequency[losePlayer][1] = winLoseFrequency[losePlayer][1] + 1;
        } else {
            winLoseFrequency[losePlayer] = [0, 1];
        }
    }

    const winnersOnly = [];
    const lostOnce = [];

    for(const key in winLoseFrequency) {
        if(winLoseFrequency[key][1] === 0) winnersOnly.push(key);
        if(winLoseFrequency[key][1] === 1) lostOnce.push(key);
    }

    return [winnersOnly.sort((a,b) => a-b), lostOnce.sort((a,b) => a-b)];
};