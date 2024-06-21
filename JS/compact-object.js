/**
 * Recursion | DFS
 * https://leetcode.com/problems/compact-object/
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {


    const checkIfObj = (obj) => {
        if(Array.isArray(obj)) return false;
        return true;
    }

    const dfs = (obj) => {
        if(checkIfObj(obj)) {
            for(key in obj) {
                if(!obj[key] || obj[key] == 0) {
                    delete obj[key];
                    continue;
                };

                if(typeof obj[key] === "object") dfs(obj[key]);
            }
        } else {
            for(let i = obj.length - 1; i > -1; i--) {
                if(!obj[i] || obj[i] === 0) {
                    obj.splice(i,1);
                    continue;
                }
                
                if(typeof obj[i] === "object") dfs(obj[i]);
            }
        }
    }

    if(checkIfObj(obj)) {
        for(key in obj) {
            if(!obj[key] || obj[key] == 0) {
                delete obj[key];
                continue;
            };

            if(typeof obj[key] === "object") dfs(obj[key]);
        }
    } else {
        for(let i = obj.length - 1; i > -1; i--) {
            if(!obj[i] || obj[i] === 0) {
                obj.splice(i,1);
                continue;
            }
            
            if(typeof obj[i] === "object") dfs(obj[i]);
        }
    }

    return obj;
};