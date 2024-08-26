import ListNode from './list-node.js';

function addTwoNumbers(list1, list2) {
  const dummyTail = new ListNode(0);
  let current = dummyTail;
  let l1 = list1;
  let l2 = list2;
  let carry = 0;

  while (carry || l1 || l2) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    current = current.next;
  }

  return dummyTail.next;
}

export default addTwoNumbers;
