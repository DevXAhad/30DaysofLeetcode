function containsDuplicate(nums: number[]): boolean {
    const numMap: { [key: number]: boolean } = {};
    
    for (const num of nums) {
        if (numMap[num]) {
            return true;
        } else {
            numMap[num] = true;
        }
    }
    
    return false;
}

const nums1: number[] = [1, 2, 3, 1];
console.log(containsDuplicate(nums1));

const nums2: number[] = [1, 2, 3, 4];
console.log(containsDuplicate(nums2));