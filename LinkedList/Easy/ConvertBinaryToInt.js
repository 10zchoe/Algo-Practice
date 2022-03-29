/* Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0

Constraints:
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

/*we have two subproblems:
  a.to parse through the linked list and retrieve each digit head
  b.to convert the sequence into the number
*/
const getDecimalValue = (head) => {
  //keep track of the current head
  let currentNode = head;
  //create a new variable to store the total/result;
  let total = 0; //1 //2

  //parse through the linked list and as long as there is a head
  while (currentNode) {
    //multiply the total by 2 and add the value of node
    total = total * 2 + currentNode.val;
    //total = 0 * 2 + 1 = 1
    //total = 1 * 2 + 0 = 2
    //total = 2 * 2 + 1 = 5

    //reassign the current head to the next head
    currentNode = currentNode.next;
    //currentNode = 0
    //currentNode = 1
    //currentNode = null
  }
  //return total
  return total;
  //5
};

//Time complexity: O(N). Traversing through each head once
//Space complexity: O(1).
//input => [1,0,1]
