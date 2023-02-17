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

const stickers = ["notice","possible"], target = "basicbasic";

console.log(minStickers(stickers, target));

// if(Object.keys({}).length) {
//     console.log(true);
// } else {
//     console.log(false);
// }