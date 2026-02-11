/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l=0;
    let r=nums.length-1;
    while(l<r){
        let mid=l+Math.floor((r-l)/2)
        //Ascending slope, peak will be ahead
        if(nums[mid]<nums[mid+1]){
            l= mid+1;
        }
        //Descending slope, peak will be below or it can be the peak;
        else{
            r=mid;
        }
    }

    return l;
};