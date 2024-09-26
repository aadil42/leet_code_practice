
var MyCalendar = function() {
    this.booked = [];
};

/** 
 * Binary Search 
 * Time O(n*log(end-start)) | Space O(n) 
 * n is the number of calls. start and end is the max diff between start and end event 
 * https://leetcode.com/problems/my-calendar-i/
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {

    const bs = (event, start, end) => {
        
        if(end  <= event[0]) return true;
        if(start >= event[1]) return true;
        
        while(start <= end) {
            const mid = Math.floor((start+end)/2);

            if(mid >= event[0] && mid < event[1]) return false;

            if(mid >= event[1]) {
                end = mid - 1; 
            }
            if(mid <= event[0]) {
                start = mid + 1;
            }
        }

        return true;
    }

    const check = (start, end) => {
        for(let i = 0; i < this.booked.length; i++) {
            if(!bs(this.booked[i], start, end)) return false;
        }
        return true;
    }

    if(!check(start, end)) return false;

    this.booked.push([start, end]);
    return true;
};


/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */