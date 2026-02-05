/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(!head) return head;  
  // Find the length of the LL 
  let curr = head;
  let len=0;
  while(curr){
    curr=curr.next;
    len++;
  }

  //Effective k rotation 
  k = k%len;

  let f=head;

  //fast forwad f to k 
  for(let i=0;i<k;i++){
    f=f.next;
  }
  let s=head
  while(f.next){
    // When f reaches end s reaches just before rotation pivot
    s=s.next;
    f=f.next;
  }
  f.next=head;
  let newHead = s.next;  
  s.next=null;

  return newHead

};