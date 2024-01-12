/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events = events.sort((a,b) => a[0] - b[0]);
    const cache = {};
    const dfs = (preEnd, i, eventLeft) => {

        const hash = `${i}-${eventLeft}`;
        if(i === events.length) return 0;
        if(eventLeft === 0) return 0;

        if(events[i][0] <= preEnd) {
            return dfs(preEnd, i+1, eventLeft);
        }

        if(cache[hash]) return cache[hash];

        const currentTime = events[i][2];
        cache[hash] = Math.max(dfs(events[i][1], i+1, eventLeft - 1) + currentTime, dfs(preEnd, i+1, eventLeft));
        return cache[hash];
    }

    return dfs(-1, 0, k);
};