function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    
    let uniqueIndex: number = 0;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    
    return uniqueIndex + 1;
}
let nums: number[] = [1, 1, 2];
let expectedNums: number[] = [1, 2];
let k: number = removeDuplicates(nums);

if (k === expectedNums.length && nums.slice(0, k).every((value, index) => value === expectedNums[index])) {
    console.log("Test passed!");
} else {
    console.log("Test failed!");
}