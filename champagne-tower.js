// edge cases in this problem are such a BITCH!!

var champagneTower = function(poured, query_row, query_glass) {
    
    const glassPyramid = [];
    for(let i = 0; i < 101; i++) {
        const temp = [];
        for(let j = 0; j <= i; j++) {
            temp.push(0);
        }
        glassPyramid.push(temp);
    }

    glassPyramid[0][0] = poured;
    for(let i =  0; i < 100; i++) {
        for(let j = 0; j <= i; j++) {
            if(glassPyramid[i][j] >= 1) {
                glassPyramid[i + 1][j] += (glassPyramid[i][j] - 1)/2;
                glassPyramid[i + 1][j + 1] += (glassPyramid[i][j] - 1)/2;
                glassPyramid[i][j] = 1;
            }
        }
    }

    return glassPyramid[query_row][query_glass];
};

champagneTower(2,1,1);