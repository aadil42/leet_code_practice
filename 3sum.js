var threeSum = function(nums) {
    
sortedNums = nums.sort((a,b) => {
    return a - b;
});

let outputArr = [];
for(let i = 0; i < sortedNums.length - 2; i++) {
    if(sortedNums[i] !== sortedNums[i-1]) {
        let low = i + 1;
        let heigh = sortedNums.length - 1;
        // let targetSum = 0 - sortedNums[i];
        while(low < heigh) {
            if(sortedNums[low] + sortedNums[heigh] + sortedNums[i] === 0) {
                outputArr.push([sortedNums[i], sortedNums[low], sortedNums[heigh]]);
                 while(sortedNums[low] === sortedNums[low+1]) low++;
                low++;
            } else if(sortedNums[low] + sortedNums[heigh] + sortedNums[i] > 0) {
                heigh--;
            } else if(sortedNums[low] + sortedNums[heigh] + sortedNums[i] < 0) {    
                low++;
            }
        }
    }
}
return outputArr;

};

const nums = [-1,0,1,2,-1,-4];
// console.log(threeSum(nums));

// burte force
var threeSumR = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    });

    const result = [];
    for(let i = 0; i < nums.length - 2; i++) {

        // this condition is pretry important it keeps the duplicate out of our result array.
        if(nums[i] !== nums[i - 1]) {

            let low = i + 1;
            let heigh = nums.length - 1;

            while(low < heigh) {

                if(nums[low] + nums[heigh] + nums[i] === 0) {

                    result.push([nums[i],nums[low],nums[heigh]]);
                    
                    // below while loop is pretty important it keeps the duplicate out of our result array.
                    while(nums[low] === nums[low+1]) low++;
                    low++;
                } else if(nums[low] + nums[heigh] + nums[i] > 0) {
                    heigh--;
                } else {
                    low++;
                }
            }
        }
    }

    return result;
};

console.log(threeSumR(nums));

