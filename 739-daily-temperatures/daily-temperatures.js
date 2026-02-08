/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
  let n = arr.length;
  let ans = Array(n).fill(0);
   
  let s=[];
  s.push(n-1);

for(let i=n-2;i>=0;i--){
    while(s.length){
        let top= s[s.length-1];
        if(arr[i]>=arr[top]){
            s.pop();
        }else{
            ans[i]=top-i;
            break;
        }
    }
    s.push(i)
}

return ans

};