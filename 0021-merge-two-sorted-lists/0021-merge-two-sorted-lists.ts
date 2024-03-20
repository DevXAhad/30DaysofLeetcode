/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class list {
    val: number;
    next: list | null;
    constructor(val?: number, next?: list | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeTwoLists(list1: list | null, list2: list | null): list | null {
    // Dummy node to simplify the code
    const dummyHead = new list(-1);
    let current = dummyHead;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummyHead.next;
}

const l1 = new list(1);
l1.next = new list(2);
l1.next.next = new list(4);

const l2 = new list(1);
l2.next = new list(3);
l2.next.next = new list(4);

const mergedList = mergeTwoLists(l1, l2);
console.log(mergedList);