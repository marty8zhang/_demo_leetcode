// import addTwoNumbers from './2.1_recursive-calls.js';
import addTwoNumbers from './2.2_while-loop.js';
import ListNode from './list-node.js';

describe('addTwoNumbers()', () => {
  it('should work for lists with three digits', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    expect(addTwoNumbers(l1, l2)).toEqual(
      new ListNode(7, new ListNode(0, new ListNode(8))),
    );
  });

  it('should work for lists with unequal numbers of digits', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6));

    expect(addTwoNumbers(l1, l2)).toEqual(
      new ListNode(7, new ListNode(0, new ListNode(4))),
    );
  });

  it('should work for lists with zeros in the middle', () => {
    const l1 = new ListNode(2, new ListNode(0, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(0, new ListNode(4)));

    expect(addTwoNumbers(l1, l2)).toEqual(
      new ListNode(7, new ListNode(0, new ListNode(7))),
    );
  });

  it('should work for lists with multiple carries', () => {
    const l1 = new ListNode(
      9,
      new ListNode(1, new ListNode(9, new ListNode(0))),
    );
    const l2 = new ListNode(
      8,
      new ListNode(9, new ListNode(0, new ListNode(9))),
    );

    expect(addTwoNumbers(l1, l2)).toEqual(
      new ListNode(
        7,
        new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(1)))),
      ),
    );
  });
});
