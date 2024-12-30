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

/**
 * BackTracking | Recursion
 * Time O(n^4) | Space O(n^4) 
 * https://leetcode.com/problems/restore-ip-addresses/
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses0 = function(s) {
    
    const digits = s.split("");

    const dfsBackTrack = (splits, idx, ipAddress, ans) => {
        if(splits === 4 && idx === digits.length) {
            ans.push(ipAddress.join("."));
            return ans;
        }

        if(splits === 4) return ans;
        if(idx === digits.length) return ans;

        for(let i = idx+1; i < digits.length + 1; i++) {
            const num = digits.slice(idx,i).join("");
            if(+num > 255) break;
            // takes care of leading zeros
            if(digits[idx] === "0" && i > idx+1) break;

            ipAddress.push(num);
            dfsBackTrack(splits+1, i, ipAddress, ans);
            ipAddress.pop();
        }

        return ans;
    }

    return dfsBackTrack(0,0,[],[]);
};