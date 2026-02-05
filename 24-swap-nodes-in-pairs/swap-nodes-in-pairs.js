/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev=dummy;
 
    while(prev.next && prev.next.next){
        let f = prev.next;
        let s = f.next;

        f.next = s.next;
        s.next = f;
        prev.next = s;

        prev =f;
    }

    return dummy.next
    
};