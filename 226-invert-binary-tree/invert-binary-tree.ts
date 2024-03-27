// Note: Identifier has been changed
class Node {
    val: number
    left: Node | null
    right: Node | null
    constructor(val?: number, left?: Node | null, right?: Node | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function invertTree(root: Node | null): Node | null {
    if (root === null) {
        return null;
    }
    
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    
    return root;
}

const root = new Node(4, new Node(2, new Node(1), new Node(3)), new Node(7, new Node(6), new Node(9)));

const invertedRoot = invertTree(root);
console.log(invertedRoot);