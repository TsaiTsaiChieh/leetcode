/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummy = { val: 0, next: head };
  let current = dummy;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};

// head: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6, val: 6
console.log(
  removeElements(
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 6,
          next: {
            val: 3,
            next: { val: 4, next: { val: 5, next: { val: 6, next: null } } },
          },
        },
      },
    },
    6
  )
); // { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }
