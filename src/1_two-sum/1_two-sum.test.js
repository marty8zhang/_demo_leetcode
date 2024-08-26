import twoSum from './1.2_map.js';

describe('twoSum()', () => {
  it('should throw an error for an empty array', () => {
    expect(() => twoSum([], 7)).toThrow(
      'The given array of integers cannot add up to the target.',
    );
  });

  it('should throw an error for an array of one integer', () => {
    expect(() => twoSum([7], 7)).toThrow(
      'The given array of integers cannot add up to the target.',
    );
  });

  it('should throw an array which has no matches with the given target', () => {
    expect(() => twoSum([1, 2, 3], 6)).toThrow(
      'The given array of integers cannot add up to the target.',
    );
  });

  it('should work for an array of two integers', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should work for an array of three integers', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('should work for an array of four integers', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
