// it's basically a fibinachi sequance.
//  a recusion solution
var climbStairs = function(n) {
    const computed = {};
    function goRecursive(ways) {
        // base cases.
        if(ways === 1) return 1;
        if(ways === 2) return 2;
        if(ways < 0) return 0;        

        if(!computed[ways]) {
            computed[ways] = goRecursive(ways-1) + goRecursive(ways-2);
        }

        return computed[ways];
    }
    
    return goRecursive(n);
};

// an array solution
var climbStairs1  = function(n) {

    if(n === 1) return 1;
    if(n === 2) return 2;

    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    for(let i = 3; i <=n; i++) {
        dp[i] = dp[i-1] + dp[i-2]; 
    }
    return dp[n];
}

console.log(climbStairs1(6));