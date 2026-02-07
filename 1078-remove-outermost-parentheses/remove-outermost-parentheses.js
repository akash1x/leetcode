/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    //Only add level two items from stack
    let stk=[]
    let res=''
    for(let i=0;i<s.length-1;i++){
        if(s[i]==='('){
            stk.push(s[i]);
            if(stk.length>1)  res+=s[i];
        }else{
            //If closing bracket
            if(stk.length>1) res+=s[i];  
            stk.pop();  
        }
    }
    return res;
};