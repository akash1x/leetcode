/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {
  // Approach 1: Same as NGE-1 problem just double the array. 
  // Approach 2: Iterate twice the length of array. For index use i%n

  let n = arr.length;
  let stk =[]
  let ans= Array(n).fill(-1)
  stk.push(arr[n-1]);

  // start from 2nd last element 
  for(let i = (2*n)-2;i>=0;i--){
        while(stk.length){
            if(stk[stk.length-1]>arr[i%n]){
               ans[i%n]=stk[stk.length-1];
                break;
            }else{
                stk.pop()
            }       
        }
    stk.push(arr[i%n]);   
    }
    return ans.slice(0,n) 
  }