function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
      result[i] = 1;
    }
  
    let leftProduct = 1;
    let rightProduct = 1;
    
    for (let i = 0; i < n; i++) {
      result[i] *= leftProduct;
      leftProduct *= nums[i];
    }
  
    for (let i = n - 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= nums[i];
    }
  
    return result;
  }
  
  const nums = [1, 2, 3, 4];
  const result = productExceptSelf(nums);
  console.log(result);  