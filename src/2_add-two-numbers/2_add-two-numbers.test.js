import addTwoNumbers from './2.1_recursive-calls.js';
import ListNode from './list-node.js';

describe('addTwoNumbers()', () => {
  describe('Edge cases - with leading zeros', () => {
    it('should work for lists with even leading zeros', () => {
      const l1 = new ListNode(2, new ListNode(0));
      const l2 = new ListNode(5, new ListNode(0));

      expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7));
    });

    it('should work for lists with uneven leading zeros', () => {
      const l1 = new ListNode(2, new ListNode(0, new ListNode(0)));
      const l2 = new ListNode(5, new ListNode(0));

      // Note that the leading zero in the result cannot be totally eliminated in this case.
      expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7, new ListNode(0)));
    });
  });

  it('should work for lists with three digits', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
  });

  it('should work for lists with unequal numbers of digits', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6));

    expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7, new ListNode(0, new ListNode(4))));
  });

  it('should work for lists with zeros in the middle', () => {
    const l1 = new ListNode(2, new ListNode(0, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(0, new ListNode(4)));

    expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7, new ListNode(0, new ListNode(7))));
  });
});
