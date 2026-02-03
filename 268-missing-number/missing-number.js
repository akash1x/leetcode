/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //Calculate total num of n numbers
    let n = nums.length;
    
    let sum = (n*(n+1))/2;
    
    let sumOfArray = nums.reduce((curr,acc)=>{
        return acc=curr+acc;
    },0);

    //Missing number
    return sum-sumOfArray
};