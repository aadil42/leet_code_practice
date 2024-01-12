// brute force approche.
var maxProductBurte = function(nums) {
    
    let MaxProd = Number.NEGATIVE_INFINITY;
    
    for(let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];
        for(let j = i; j < nums.length; j++) {
            
            if(j !== i){
                currentValue = currentValue * nums[j];    
            }
            
            MaxProd = Math.max(currentValue, MaxProd);
        }
    }
    
    return MaxProd;
};

// optimal approche.
var maxProduct = function(nums) {
    
    let MaxProd = nums[0];
    let maxCurr = 1;
    let minCurr = 1;

    for(let i = 0; i < nums.length; i++) {

        const tmp = maxCurr * nums[i];
        maxCurr = Math.max(tmp, minCurr * nums[i], nums[i]);
        minCurr = Math.min(tmp, minCurr * nums[i], nums[i]);
        
        MaxProd = Math.max(maxCurr, MaxProd);
    }

    return MaxProd;
};

const nums = [-200,1,2,3,4,-100];
console.log(maxProduct(nums));