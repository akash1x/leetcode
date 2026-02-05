/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentialNode= new ListNode(null,head);

    //Calculate length of linked list 
    let curr=head;
    let len=0;
    while(curr){
        curr=curr.next;
        len++;
    }

    // find position just before the node to be removed;
    let pos = len-n;

    //Go to that position 
    curr = sentialNode;
    for(let i=0;i<pos;i++){
        curr=curr.next;
    }
    curr.next=curr.next.next;

    return sentialNode.next;
};