function productExceptSelf(nums) {
    var n = nums.length;
    var result = new Array(n);
    for (var i = 0; i < n; i++) {
        result[i] = 1;
    }
    var leftProduct = 1;
    var rightProduct = 1;
    // Calculate left products and store in the result array
    for (var i = 0; i < n; i++) {
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    // Calculate right products and update the result array
    for (var i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return result;
}
// Example usage:
var nums = [1, 2, 3, 4];
var result = productExceptSelf(nums);
console.log(result);
