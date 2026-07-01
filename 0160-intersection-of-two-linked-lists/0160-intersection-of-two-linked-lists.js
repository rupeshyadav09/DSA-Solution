/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let storeNode = new Set();

     while(headB){
        storeNode.add(headB);
         headB = headB.next;
     }
       
       while(headA){
         if(storeNode.has(headA)){
            return headA;
         }
           headA = headA.next;
       }
        return null;
};