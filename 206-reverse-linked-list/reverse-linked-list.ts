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

function reverseList(head: list | null): list | null {
    if (!head || !head.next) {
        return head;
    }

    let prev: list | null = null;
    let current: list | null = head;

    while (current !== null) {
        const nextNode: list | null = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
}

const head = new list(1);
head.next = new list(2);
head.next.next = new list(3);
head.next.next.next = new list(4);
head.next.next.next.next = new list(5);

console.log("Original list:");
let currentNode = head;
while (currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}

const reversedHead = reverseList(head);

console.log("Reversed list:");
let reversedNode = reversedHead;
while (reversedNode !== null) {
    console.log(reversedNode.val);
    reversedNode = reversedNode.next;
}