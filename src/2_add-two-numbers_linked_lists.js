export function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param args
 * @return {ListNode}
 */
export const addTwoNumbers = function (l1, l2, ...args) {
  const [prevNode] = args;
  const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + (prevNode?.next?.val ?? 0);
  const l1Next = l1?.next ?? null;
  const l2Next = l2?.next ?? null;

  if (sum === 0 && l1Next === null && l2Next === null) {
    if (prevNode) {
      return;
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
};
