/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 */

const { header } = require("express/lib/request");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//Iterate through lists while both lists are not null. Compare the two elements at the head of each list and add the smallest element to our new list. Once our while loop breaks, check which list is not null and append it to our new list before returning.

//Iterative Solution -> Time: O(min(N, M)), Space: O(1)
var mergeTwoLists = function (list1, list2) {
  // initialize a dummy head node
  const head = new ListNode(null);

  //initialize a current variable to keep track of the current node, starting with the dummy head node
  let current = head;

  //while there are still nodes to compare in two lists
  while (list1 && list2) {
    //compare the two head value ->if value of 1st node is less than value of 2nd node
    if (list1.val < list2.val) {
      //set the current node's link to 1st node -> take the smaller element and put into our dummy list
      current.next = list1;
      //move our pointer on the list1
      list1 = list1.next;
    } else {
      //if 2nd node is smaller, set the current node's list to the 2nd node
      current.next = list2;
      //move the 2nd node pointer to the next iteration
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;
  return head.next;
};

//Recursive Solution -> Time: O(min(N, M)), Space: O(1)
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  let node = null;
  if (l1.val < l2.val) {
    node = l1;
    node.next = mergeTwoLists(l1.next, l2);
  } else {
    node = l2;
    node.next = mergeTwoLists(l1, l2.next);
  }
  return node;
};
