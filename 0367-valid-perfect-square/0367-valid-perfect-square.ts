function isPerfectSquare(num: number): boolean {
    if (num < 1) return false;
    let left = 1;
    let right = num;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midSquared = mid * mid;
        
        if (midSquared === num) {
            return true; 
        } else if (midSquared < num) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    
    return false;
}

const num = 16;
console.log(isPerfectSquare(num));