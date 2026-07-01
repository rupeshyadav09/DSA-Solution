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
    
    // 1. finding middle node with fast and slow algo;

    let slow=head;
    let fast=head;
    
    while(fast && fast.next){
        slow= slow.next;
        fast= fast.next.next;
    }
    
    // 2. reverse the second half of node;

     let curr=slow;
     let prev=null;

     while(curr){
        let temp= curr.next;
          curr.next=prev;
          prev= curr;
          curr = temp;
     }
    //    prev can hold end value;
       let firstlist= head;
       let secondlist= prev;

       while(secondlist){
        if(firstlist.val != secondlist.val){
            return false;
        }
           firstlist= firstlist.next;
           secondlist= secondlist.next;
       }
        return true;
};