/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //fp pointer denotes the final place of element to be inserted.
    let fp=0;
    for(let i=0;i<nums.length;i++){
        //current element is not 0, swap(current,fpElement)
        if(nums[i]!=0){
            let temp = nums[fp];
            nums[fp]=nums[i];
            nums[i]=temp;
            fp++;
        }
    }
    return nums
};