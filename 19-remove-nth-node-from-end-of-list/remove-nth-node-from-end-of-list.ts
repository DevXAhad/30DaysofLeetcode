class nodeList {
    val: number;
    next: nodeList | null;
    constructor(val?: number, next?: nodeList | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function removeNthFromEnd(head: nodeList | null, n: number): nodeList | null {
    if (!head) return null;

    const dummy: nodeList = new nodeList(0);
    dummy.next = head;

    let length = 0;
    let current: nodeList | null = head;
    
    while (current) {
        length++;
        current = current.next;
    }

    const positionFromStart = length - n;

    current = dummy;

    for (let i = 0; i < positionFromStart; i++) {
        current = current!.next;
    }

    current.next = current.next!.next;

    return dummy.next;
}

function arrayToLinkedList(arr: number[]): nodeList | null {
    if (arr.length === 0) return null;
    const head = new nodeList(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new nodeList(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(head: nodeList | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

const input1 = arrayToLinkedList([1, 2, 3, 4, 5]);
const n1 = 2;
const output1 = removeNthFromEnd(input1, n1);
console.log(linkedListToArray(output1));

const input2 = arrayToLinkedList([1]);
const n2 = 1;
const output2 = removeNthFromEnd(input2, n2);
console.log(linkedListToArray(output2)); 