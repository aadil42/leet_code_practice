var threeSum = function(nums) {
    
sortedNums = nums.sort((a,b) => {
    return a - b;
});

let outputArr = [];
for(let i = 0; i < sortedNums.length - 2; i++) {
    if(sortedNums[i] !== sortedNums[i-1] || i === 0) {
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

const nums = [0, 0, 0];
console.log(threeSum(nums));
// 