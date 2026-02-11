/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // x^2 = 4 what is x is the problem 
    let l = 1;
    let r = x;
    while(l<=r){
      let mid = Math.floor((l+r)/2);
      if(mid*mid===x){
        return mid
      }else if(mid*mid>x){
        r=mid-1;  
      }else{
        l=mid+1;
      }  
    }
    // As we need to find nearest therefore return r at end;
    return r; 
};