/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let left =0; 
    let right = arr.length-1;
    while(left < right){
        let currsum = arr[left]+arr[right];
        if(currsum === target){
            return [left+1,right+1];
        }else if(currsum < target){
            left++;
        }else{
            right--;
        }
    }
    return [];
};