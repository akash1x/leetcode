/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    //create a map of num:NGE
    let ngeMap={}

    let stk=[]
    // Last element will never have NGE so -1;
    let n=nums2.length;
    stk.push(nums2[n-1]);
    ngeMap[nums2[n-1]]=-1;

    //Start from 2nd last element
    for(i=n-2;i>=0;i--){
        // if curr element is less than top of stack then top is NGE for that element
        let top = stk[stk.length-1];
        if(nums2[i]<top){
            ngeMap[nums2[i]]=top;
        }else{
            //keep popping till we find NGE
            while(stk.length){
                if(nums2[i]>stk[stk.length-1]){
                    stk.pop();
                }else{
                    ngeMap[nums2[i]]=stk[stk.length-1]
                    break;
                }
            }
          
            // if stack becomes empty, there NGE does not exists 
            if(stk.length==0){
                ngeMap[nums2[i]]=-1;
            }
           
        }
        stk.push(nums2[i])
    }
     // Now our map will contain all the NGE elements
        let ans=[]
        for(let i=0;i<nums1.length;i++){
            ans.push(ngeMap[nums1[i]]);
        }

        return ans
};