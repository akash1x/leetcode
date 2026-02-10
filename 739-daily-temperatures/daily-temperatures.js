/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
// Need to calculated the distance using index difference
// Rest it is same as NGE

//Create map to store day: NGE
let nge={}
let stk=[]
// Last day will never have a warmer day so 0 
let n = arr.length
//Index will be store as distance will be calculate by it
stk.push(n-1);
nge[n-1]=0;

//Start from 2nd last index
for(let i=n-2;i>=0;i--){
    // Check stack top > current day then top is the warmer day
    // Store index difference
    if(arr[stk[stk.length-1]]>arr[i]){
        nge[i]=stk[stk.length-1] - i;
        //push the current day as it can warmer for other days
        stk.push(i)
    }else{
        // Keep popping till we find the NGE
        while(stk.length){
            if(arr[stk[stk.length-1]]<=arr[i]){
                stk.pop();
            }else{
                nge[i]=stk[stk.length-1] - i;
                //push the current day as it can warmer for other days
                stk.push(i);
                break;
            }
        }
        //No NGE found
        if(stk.length===0){
            nge[i]=0
            stk.push(i);
        }
    }
}
// Now in nge we have map of day: nextWarmerDay
let ans =[];
for(let i=0;i<arr.length;i++){
    ans.push(nge[i]);
}

return ans;
};