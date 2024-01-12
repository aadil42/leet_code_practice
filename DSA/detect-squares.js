var DetectSquares = function() {
    this.pointHash = {};
    this.points = [];
};

/** 
 * Time O(1) | Space O(1)
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    this.points.push([point[0],point[1]]);

    if(this.pointHash[point[0]+"-"+point[1]]) {
        this.pointHash[point[0]+"-"+point[1]] += 1;
    } else {
        this.pointHash[point[0]+"-"+point[1]] = 1;
    }
};


/** 
 * Time O(n) | Space O(1)
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    const px = point[0];
    const py = point[1];
    let total = 0;

    for(let i = 0; i < this.points.length; i++) {
        const x = this.points[i][0];
        const y = this.points[i][1];
        if(Math.abs(px - x) !== Math.abs(py - y) || px === x || py === y) continue;
        total += (this.pointHash[x+'-'+py] || 0) * (this.pointHash[px+'-'+y] || 0); 
    }
    return total;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */