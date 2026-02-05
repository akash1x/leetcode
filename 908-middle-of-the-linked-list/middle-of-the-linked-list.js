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
var middleNode = function(head) {
    let s = head;
    let f = head;
    // f can become null, that's why we need to check f is not null
    while(f && f.next){
        f=f.next.next;
        s=s.next;
    }
    return s;
};