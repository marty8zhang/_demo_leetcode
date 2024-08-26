function ListNode(val, next) {
  if (val === undefined) throw new Error('A value must be provided for a list node.');
  this.val = val;
  this.next = (next === undefined ? null : next);
}

export default ListNode;
