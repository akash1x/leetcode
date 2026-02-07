
var MinStack = function() {
    this.s=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // While pushing always add min element so far
    if(this.s.length===0){
       this.s.push({val,min:val}); 
    }else{
        let minInStackTillNow = this.s[this.s.length-1].min;
        minInStackTillNow= val<minInStackTillNow?val:minInStackTillNow
        this.s.push({val,min:minInStackTillNow});
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //What if we popped 
    return this.s.pop().val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length-1].val
};


/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */