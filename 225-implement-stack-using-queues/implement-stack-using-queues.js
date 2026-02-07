
var MyStack = function() {
    this.q1=[];
    this.q2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // This is important as we doing array manipulation so lengt will keep changing
    let n = this.q1.length
for(let i=0;i<n-1;i++){
    this.q2.push(this.q1.shift())
 }
 let res = this.q1.pop();
 //Change queue
 let temp = this.q1;
 this.q1=this.q2;
 this.q2=temp;

 return res;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // This is important as we doing array manipulation so lengt will keep changing
    let n = this.q1.length
    for(let i=0;i<n-1;i++){
        this.q2.push(this.q1.shift())
    }
    let res = this.q1[0];
    this.q2.push(this.q1.shift())
    //Change queue
    let temp = this.q1;
    this.q1=this.q2;
    this.q2=temp;

    return res;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length===0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */