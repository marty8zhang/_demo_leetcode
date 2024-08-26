/*
 * https://leetcode.com/problems/two-sum/description/
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such
 * that they add up to `target`.
 */
export default function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }

  throw new Error('The given array of integers cannot add up to the target.');
}
