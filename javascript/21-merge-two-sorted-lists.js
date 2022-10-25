/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param  {any} val
 * @param  {any} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists0 = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists0(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists0(list1, list2.next)

    return list2
  }
}
console.log(
  mergeTwoLists0(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
  ),
)

const mergeTwoLists1 = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  const dummy = new ListNode()
  let curr = dummy

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = new ListNode(list1.val)
      list1 = list1.next
    } else {
      curr.next = new ListNode(list2.val)
      list2 = list2.next
    }
    curr = curr.next
  }
  if (list1) curr.next = list1
  if (list2) curr.next = list2

  return dummy.next
}

console.log(
  mergeTwoLists1(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
  ),
)