// /**
//  * @param {string[]} stickers
//  * @param {string} target
//  * @return {number}
//  */
var minStickers = function(stickers, target) {
  
    const stickersHash = [];
    stickers.forEach((sticker,index) => {
        stickersHash[index] = {}
        sticker.split('').forEach((char) => {
            const numberOfChar = stickersHash[index][char];
            if(numberOfChar) {
                stickersHash[index][char] += numberOfChar;
            } else {
                stickersHash[index][char] = 1;
            }
        });
    });

    const dp = {};
    function dfs(target, sticker) {
        if(dp[target]) return dp[target];
        let result = 0;
        if(Object.keys(sticker).length) {
            result = 1;
        }

        let remainingT = '';
        
        target.split('').forEach((char) => {
            let charCount = sticker[char];
            if(charCount) {
                sticker[char] = charCount - 1;
            } else {
                remainingT += char;
            }
        });
        if(remainingT) {
            let stickerCount = Infinity;
            for(let i = 0; i < stickersHash.length; i++) {
                if(!stickersHash[i][remainingT[0]]) continue;
                stickerCount = Math.min(stickerCount, dfs(remainingT, {...stickersHash[i]}));
            }
            dp[remainingT] = stickerCount;
            result += stickerCount;
        }
        return result;
    }

    const result = dfs(target, {});
    return result !== Infinity ? result : -1;
};

/**
 * Brute Force | Backtracking | Recursion
 * Time O(3^n) | Space O(n)
 * https://leetcode.com/problems/stickers-to-spell-word/
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers1 = function(stickers, target) {

    const targetFrequency = {};

    for(let i = 0; i < target.length; i++) {
        targetFrequency[target[i]] = (targetFrequency[target[i]] &&  targetFrequency[target[i]] + 1) || 1;
    }

    const backTrack = (frequency, subtractedChars) => {
        for(let i = 0; i < subtractedChars.length; i++) {
            const char = String.fromCharCode(i + 97);
            if(subtractedChars[i]) {
                frequency[char] += subtractedChars[i]; 
            }
        }
    }

    const isTargetFrequencyEmpty = (frequency) => {
        for(let key in frequency) {
            if(frequency[key]) return false;
        }
        return true;
    }

    const dfs = (i, frequency) => {
        
        if(isTargetFrequencyEmpty(frequency)) return 0;
        if(i === stickers.length) return Infinity;

        let atLeastOneCharExists = false;

        // this will keep track of how many chars we have deleted from targetCharFreqeuncy
        //  so that we can add them back when backtracking.
        
        const subtractedChars = new Array(26).fill(0);

        for(let j = 0;  j < stickers[i].length; j++) {
            if(frequency[stickers[i][j]]) {
                atLeastOneCharExists = true;
                subtractedChars[stickers[i][j].charCodeAt(0) - 97] += 1;
                frequency[stickers[i][j]] -= 1;
            }
        }

        if(atLeastOneCharExists) {
            let currentMin = Infinity;
            currentMin = Math.min(1+dfs(i, frequency), 1+dfs(i+1, frequency));
            backTrack(frequency, subtractedChars);
            currentMin = Math.min(currentMin, dfs(i+1, frequency));
            return currentMin;
        }
        
        return dfs(i+1, frequency);
    }

    const result = dfs(0, targetFrequency);
    return ((result === Infinity) && -1) | result;
};
