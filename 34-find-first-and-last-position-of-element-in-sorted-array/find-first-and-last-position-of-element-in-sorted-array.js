/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Similar to badVersion problem 
    let l =0;
    let r=nums.length-1;
    let ans=[-1,-1]
    while(l<=r){
        let m = l+ Math.floor((r-l)/2);
        if(nums[m]===target){
            ans[0]=m;
            // start index can be before this so continue 
            r=m-1;
        }else if(nums[m]<target){
            l=m+1;
        }else{
            r=m-1;
        }
    }
     l =0;
     r=nums.length-1;
    while(l<=r){
        let m = l+ Math.floor((r-l)/2);
        if(nums[m]===target){
            ans[1]=m;
            // end index can be after this so continue 
            l=m+1;
        }else if(nums[m]>target){
            r=m-1;
        }else{
            l=m+1;
        }
    }
  
  return ans
    
};