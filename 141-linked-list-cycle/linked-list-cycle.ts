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

    constructor(val: number = 0, next: list | null = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head: list | null): boolean {
    if (!head) {
        return false;
    }

    let slow: list | null = head;
    let fast: list | null = head.next;

    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}

const head = new list(3);
head.next = new list(2);
head.next.next = new list(0);
head.next.next.next = new list(-4);
head.next.next.next.next = head.next; 

console.log(hasCycle(head)); 