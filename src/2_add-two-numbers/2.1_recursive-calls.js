import ListNode from './list-node.js';

/*
 * This code has smells in the sense that only the returned value from the outermost call will be
 * used, whereas the returned values from the deeper recursive calls will be ignored when the
 * passed-in (hidden) third parameter will keep being mutated.
 */
function addTwoNumbers(l1, l2, ...args) {
  const [prevNode] = args;
  const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + (prevNode?.next?.val ?? 0);
  const l1Next = l1?.next ?? null;
  const l2Next = l2?.next ?? null;

  let node;
  if (sum >= 10) {
    const nodeNext = new ListNode(1);
    node = new ListNode(sum % 10, nodeNext);
  } else {
    node = new ListNode(sum);
  }

  if ((sum || l1Next || l2Next) && prevNode) {
    prevNode.next = node;
  }

  if (l1Next || l2Next) {
    addTwoNumbers(l1Next, l2Next, node);
  }

  return node;
}

export default addTwoNumbers;
