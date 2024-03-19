function getSum(a: number, b: number): number {
    while (b !== 0) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

const a = 1;
const b = 2;
console.log(getSum(a, b));