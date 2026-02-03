/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p2=n-1;
    let p1=m-1;
    
    for(let i=0;i<nums1.length;i++){

    //nums2 is exhausted first, merging is done.    
    if(p2<0) break;

    //Current last position after every iteration
    let fp=nums1.length-1-i;
    //Place the larger element at the current last position
    if(p1>=0 && nums1[p1]>=nums2[p2]){
        nums1[fp]=nums1[p1];
        p1--;
    }
    //nums1 is exhausted first, copy remaining elements of `nums2`
    else{
        nums1[fp]=nums2[p2];
        p2--;
    }
    }
    return nums1
};