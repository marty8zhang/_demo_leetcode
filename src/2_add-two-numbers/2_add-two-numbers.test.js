import { addTwoNumbers, ListNode } from './2.2_linked_lists.js';

describe('addTwoNumbers()', () => {
  it('works with 3 digits calculation', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
  });

  it('works with unequal numbers of digits between lists', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6));

    expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7, new ListNode(0, new ListNode(4))));
  });

  it('works with zeros in the middle', () => {
    const l1 = new ListNode(2, new ListNode(0, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(0, new ListNode(4)));

    expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7, new ListNode(0, new ListNode(7))));
  });
});
