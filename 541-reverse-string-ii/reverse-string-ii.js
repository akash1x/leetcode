/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function(s, k) {
    // string is immutable 
    s=s.split('')
    //We need to jump 2k steps 
    for(let i=0;i<s.length;i=i+(2*k)){
        //reverse the k elements 
        for(let j=0;j< Math.floor(k/2);j++){
            //swap the start and end;
            let start = i+j;
            let end = i+k-j-1;
            let temp = s[start];
            s[start]= s[end];
            s[end]=temp;
        }
    }
    return s.join('');
};