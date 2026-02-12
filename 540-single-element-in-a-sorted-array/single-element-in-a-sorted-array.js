/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l =0;
    let r = nums.length-1;
    while(l<=r){
        let m = l + Math.floor((r-l)/2);

        if(nums[m]===nums[m+1]){
            let rightCount = m+1 + r;
            if(rightCount%2===1){
                l = m+2;
            }else{
                r = m-1;
            }
        }
        else if(nums[m]===nums[m-1]){
            let leftCount = m-1 + l;
            if(leftCount%2===1){
                r = m-2;
            }else{
                l = m+1;
            }
        }else{
            return nums[m];
        }
    }
};