/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

    const result = [];

    if(s.length > 12) return result;
    if(s.length < 4) return result;

    function dfs(i,level, currentIP) {
        if(level === 4) {
            if( i === s.length) {
                result.push(currentIP.slice(0).join('.'));
                return;
            }
            return;
        }

        for(let j = i; j < Math.min(i + 3, s.length); j++) {
            const digit = s.slice(i, j+1);
            if(+digit < 256 && (i===j || s[i] !== '0')) {
                 currentIP.push(digit);
                dfs(j+1, level + 1, currentIP);
                currentIP.pop();
            }
        }
    }
    
    dfs(0,0,[]);
    return result;
};

