/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //Find inflexion point and which part is sorted left or right 
    let l = 0;
    let r = nums.length-1;
    while(l<=r){
        let mid = l+ Math.floor((r-l)/2);
        if(nums[mid]===target) return mid;

        //left sorted finding inflexion point
        else if(nums[mid]>=nums[l]){
            if(target>=nums[l] && target<=nums[mid]){
                // target must be in [l,mid] range;
                r=mid-1;
            }else{
                l=mid+1;
            }
        }
        //Right Sorted
        else{
            // target must be in [mid,right] range;
            if(target >= nums[mid]&&target<=nums[r]){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
    }
    return -1;
};