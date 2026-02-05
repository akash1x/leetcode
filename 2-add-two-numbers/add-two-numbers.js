/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let ansPointer = head
    let carry =0;
    while(l1 || l2 || carry){
        let sum = (l1?l1.val:0) + (l2?l2.val:0) + carry;
        // if sum>9 then update the carry 
        carry = Math.floor(sum/10);
        val = sum%10;   
        ansPointer.next = new ListNode(val,null);
        ansPointer=ansPointer.next;
        l1=l1?l1.next:l1
        l2=l2?l2.next:l2
    }

    return head.next;
};