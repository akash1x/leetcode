/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[]
    let validOps=['+','-','*','/']
    
    for(let i=0;i<tokens.length;i++){
        if(!validOps.includes(tokens[i]))
            stack.push(tokens[i]);
        else{
          let first = Number(stack.pop());  
          let second = Number(stack.pop());
          let res=0;  
          switch(tokens[i]){
            case '+': 
            res= second+first;
            break;
            case '-': 
            res= second-first;
            break;
            case '*': 
            res= second*first;
            break;
            case '/': 
            
            res= Math.trunc(second/first);
            break;
          } 
          stack.push(res);
        }    
    }
    return Number(stack[stack.length-1])
};