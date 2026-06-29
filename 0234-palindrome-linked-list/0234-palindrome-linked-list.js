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
    const arr = [];
    let curr = head;

    while( curr != null){
        arr.push(curr.val);
         curr = curr.next;
    }
    let len = arr.length;
     let mid = Math.floor(len/2);

     for(let i=0; i<=mid; i++){
        if(arr[i] != arr[len-1-i]){
            return false;
        }
     }
     return true;
};