// brute force O(n^2)
var interchangeableRectangles = function(rectangles) {
    
    let totalPair = 0;
    for(let i = 0; i < rectangles.length; i++) {
        for(let j = i + 1; j < rectangles.length; j++) {
            if(rectangles[i][1] / rectangles[i][0] === rectangles[j][1] / rectangles[j][0]) {
                totalPair++;
            }
        }
    }
    return totalPair;
};

