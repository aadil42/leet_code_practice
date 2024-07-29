/**
 * Greedy | Math
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/count-number-of-teams
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    
    const findLowerOnLeft = (i) => {
        let count = 0;
        let idx = i-1;
        while(idx > -1) {
            if(rating[idx] < rating[i]) count++;
            idx--;  
        }
        return count;
    }
    const findLowerOnRight = (i) => {
        let count = 0;
        let idx = i+1;
        while(idx < rating.length) {
            if(rating[idx] < rating[i]) count++;
            idx++;
        }
        return count;
    }
    const findHiherOnLeft = (i) => {
        let count = 0;
        let idx = i-1;
        while(idx > -1) {
            if(rating[idx] > rating[i]) count++;
            idx--;
        }
        return count;
    }
    const findHiherOnRight = (i) => {
        let count = 0;
        let idx = i+1;
        while(idx < rating.length) {
            if(rating[idx] > rating[i]) count++;
            idx++;
        }
        return count;
    }

    let total = 0;
    
    // for increasing teams.
    for(let i = 1; i < rating.length - 1; i++) {
        const lowerElementsOnLeft = findLowerOnLeft(i);
        const higherElementOnRight = findHiherOnRight(i);
        total += lowerElementsOnLeft * higherElementOnRight;
    }

    // for decreasing teams.
    for(let i = 1; i < rating.length - 1; i++) {
        const higherElementsOnLeft = findHiherOnLeft(i);
        const lowerElementsOnRight = findLowerOnRight(i);
        total  += higherElementsOnLeft  * lowerElementsOnRight;
    }

    return total;
};


/**
 * DP | Caching | Recursion.
 * Time O(n^2) | Space O(n^2) | fails to submit.
 * https://leetcode.com/problems/count-number-of-teams
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    
    // let total = 0;
    const iCache = new Map();
    const iDfs = (pre, i, count) => {

        const hash = `${pre}-${i}-${count}`; // don't understand why we need ${count} in the hash.
        if(iCache.has(hash)) return iCache.get(hash);

        if(count === 3) return 1;   
        if(i === rating.length) return 0;

        if(pre === -1 || rating[i] > rating[pre]) {
            const total = iDfs(i,i+1,count+1) + iDfs(pre,i+1,count);
            iCache.set(hash, total);
            return total;
        }

        const total = iDfs(pre,i+1,count);
        iCache.set(hash, total);
        return total;
    }

    const dCache = new Map();
    const dDfs = (pre, i, count) => {
        
        const hash = `${pre}-${i}-${count}`;
        if(dCache.has(hash)) return dCache.get(hash);
        if(count === 3) return 1;
        if(i === rating.length) return 0;

        if(pre === -1 || rating[i] < rating[pre]) {
            const total = dDfs(i,i+1,count+1) + dDfs(pre,i+1,count);
            dCache.set(hash, total);
            return total;
        }

        const total =  dDfs(pre,i+1,count);
        dCache.set(hash, total);
        return total;
    }
    return iDfs(-1,0,0) + dDfs(-1,0,0);
};