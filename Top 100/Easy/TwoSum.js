/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Explanation: Because nums[1] + nums[2] == 6, we return [0, 1].

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 6, we return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Brute Force way -> O(n2)
//We want to loop through the array
//We want to loop again but we start at the next iteration
//if the current element in the outerloop and the innerloop equal target num
//return the INDEX of the two elements.

/*
let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j=i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j];
      }
    }
  }
}
*/

/*
For a more optimized solution, we can use the hash -> O(n)
  We want to create a variable and set it to an empty object
  Set the current element as a key and its index as a value by looping through the array
  store the difference of targetSum - currentElem
  if the difference is in the object
  return the currentElem and the value of the difference in the object
 */

var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (difference in hash) {
      return [i, hash[difference]];
    }

    hash[nums[i]] = i;
  }
};

twoSum([2, 7, 11, 15], 9);
