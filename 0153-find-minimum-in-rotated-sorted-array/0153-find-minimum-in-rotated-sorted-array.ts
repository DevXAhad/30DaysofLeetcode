function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return nums[left];
}

const rotatedArray1: number[] = [4,5,6,7,0,1,2];
const rotatedArray2: number[] = [0,1,2,4,5,6,7];
console.log(findMin(rotatedArray1));
console.log(findMin(rotatedArray2)); 