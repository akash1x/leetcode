/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // We need to find inflexion point where mid-1>mid
    let l=0;
    let r=nums.length-1;

   
    while(l<=r){
        //Inflexion point lies in non sorted part
        //For sorted array inflexion point will not exists 
        if(nums[l]<=nums[r]){
            return nums[l]
        }
        let m = l + Math.floor((r-l)/2);
        //Inflexion point
        if(nums[m-1]>nums[m]){
            return nums[m];
        }
        // Find which part is not sorted as inflexion point will lie there
        else if(nums[m]<nums[l]){
            // Left not sorted
            r= m-1;
        }else{
            //right not sorted
            l=m+1;
        }
    }
};