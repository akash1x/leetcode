/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //calculate mid element
    let s=head;
    let f=head;
    while(f && f.next){
        s=s.next;
        f=f.next.next;
    }
    // s is the mid element

    // reverse the 2nd half from mid s
    let prev = null;
    while(s){
        let temp = s.next;
        s.next=prev;
        prev=s;
        s=temp;
    }
    //prev is the head of reverse list

    //start compairing two list 
    let l1=head;
    let l2=prev;

    while(l2){
        if(l1.val!=l2.val) return false;
        l1=l1.next;
        l2=l2.next;
    }

    return true;




};