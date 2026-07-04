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

    let prev =null;
     let first = head;
    let second = head.next;

    while(first && second){
        
        let third = second.next;

        second.next = first;
         first.next = third;

        if(prev != null){
            prev.next =second;
        } else{
            head = second;
        }
        // updation
        prev = first;
        first = third;

        if(third != null){
            second = third.next;
        }else{
            second = null;
        }
    }
      return head;
    
};