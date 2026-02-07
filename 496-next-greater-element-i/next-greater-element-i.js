/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ref={}
    // First element from back will always have NGE:-1
    let stk=[{val:nums2[nums2.length-1],nge:-1}];

    //Start from 2nd last element
    for(let i=nums2.length-2;i>=0;i--){
            let val=nums2[i]
            console.log("val",val)
            let top=stk[stk.length-1].val;
            if(top>val) {
                stk.push({val,nge:top})
                console.log("stack1",stk)
            }
            else{
                while(stk.length){
                    let x=stk.pop()
                    ref[x.val]=x.nge;
                    console.log("stack2",stk)
                    let top=stk[stk.length-1]?.val;
                    console.log('top',top)
                    if(top>val) {
                        stk.push({val,nge:top})
                        break;
                    }
                }
                if(stk.length===0){
                    stk.push({val,nge:-1});
                }
            }
    }
    while(stk.length){
         let x= stk.pop()   
         ref[x.val]=x.nge;
    }
    console.log(ref)
    let res=[]
    for(let i=0;i<nums1.length;i++){
        res.push(ref[nums1[i]])
    }
  
    return res
};