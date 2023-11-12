/**
 * Hashing | Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/high-access-employees/
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {
    
    
    const employeeLogs = {};
    
    for(let i = 0; i < access_times.length; i++) {
        const employee = access_times[i][0];
        const time = access_times[i][1];
        
        const currentLog = employeeLogs[employee]  || [];
        employeeLogs[employee] = [...currentLog, time];
    }
    
    const getThreeConsecutiveTotalTime = (logs, start) => {
        let totalTime = 0;
        for(let i = start; i < start+2;  i++) {
            // console.log(logs[i+1],  logs[i]);
            totalTime += logs[i+1] - logs[i];
        }
        // console.log('----');
        return totalTime;
    }
    
    const result = [];
    for(const key in employeeLogs) {
        let currentLog = employeeLogs[key];
        
        currentLog = currentLog.map((log) => +log).sort((a,b) => a-b);
        
        for(let i = 0; i < currentLog.length - 2; i++) {
            const time = getThreeConsecutiveTotalTime(currentLog, i);
            // console.log(currentLog, time);
            if(time < 100) {
                result.push(key);
                break;
            }
            
        }
    }
    
    return result;
};