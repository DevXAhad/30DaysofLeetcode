function reverseBits(n: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result |= n & 1;
        n >>>= 1; 
    }
    return result >>> 0; 
}

const numBinary1 = "00000010100101000001111010011100";
const num1 = parseInt(numBinary1, 2);
console.log(reverseBits(num1)); 

const numBinary2 = "11111111111111111111111111111101";
const num2 = parseInt(numBinary2, 2);
console.log(reverseBits(num2)); 