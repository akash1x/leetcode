/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    //max length of 1's 
    let maxLength = 0;
    let tempLength=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            tempLength++;
            if(tempLength>maxLength){
                maxLength=tempLength;
            }
        }else{
            tempLength=0;
        }
    }
    return maxLength;
};