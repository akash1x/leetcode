/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // a XOR a =0 
    // a XOR 0 =a

    let xor=0;
    for(let i =0;i<nums.length;i++){
        xor = xor^nums[i];
    }
    return xor;
};