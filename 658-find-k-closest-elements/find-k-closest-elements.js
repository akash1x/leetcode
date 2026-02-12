/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    // create a window from [m,m+k-1]
    let l=0;
    let r = arr.length-1;

    while(l<r){
        let m = l + Math.floor((r-l)/2);
        // if diff(x-outsideElement)<diff(x-insideElementStart)
        let windowStartIndex = m;
        let outsideWindowIndex= m+k
        let diffOutside = arr[m+k]-x
        let diffInside = x-arr[m]
        if(diffOutside<diffInside){
            //Include outside therefore move right
            l = m+1;
        }else{
            // as m can still be part of the window
            r = m
        }
    }

    // l===r
    let ans=[] 
    for(let i=l;i<l+k;i++){
        ans.push(arr[i]);
    }

    return ans
};