var longestCommonSubsequence = function(text1, text2) {
    const row = text1.length + 1;
    const column = text2.length + 1;

    DP = new Array(row).fill(0).map((_) => new Array(column).fill(0));

    for(let i = row - 2; i > -1; i--) {
        for(let j = column - 2; j > -1; j--) {
            if(text1[i] === text2[j]) {
                DP[i][j] = 1 + DP[i + 1][j + 1];    
            } else {
                DP[i][j] = Math.max(DP[i + 1][j], DP[i][j + 1]);
            }
        }
    }
    return DP[0][0];
};




console.log(longestCommonSubsequence('abcba','abcbcba'));
