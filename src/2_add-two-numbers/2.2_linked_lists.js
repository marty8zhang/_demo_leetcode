import ListNode from './list-node.js';

function addTwoNumbers(l1, l2, ...args) {
  const [prevNode] = args;
  const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + (prevNode?.next?.val ?? 0);
  const l1Next = l1?.next ?? null;
  const l2Next = l2?.next ?? null;

  if (sum === 0 && l1Next === null && l2Next === null) {
    if (prevNode) {
      return null;
    }

    return new ListNode(sum);
  }

  let node;
  if (sum >= 10) {
    const nodeNext = new ListNode(1);
    node = new ListNode(sum % 10, nodeNext);
  } else {
    node = new ListNode(sum);
  }

  if (prevNode) {
    prevNode.next = node;
  }

  if (l1Next !== null || l2Next !== null) {
    addTwoNumbers(l1Next, l2Next, node);
  }

  if (!prevNode) {
    return node;
  }

  return null;
}

export default addTwoNumbers;
