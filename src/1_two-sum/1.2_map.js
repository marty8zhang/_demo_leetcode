function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }

  return null;
}

export { twoSum as default };
