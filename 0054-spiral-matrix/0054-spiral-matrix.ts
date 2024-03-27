function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) return [];
  
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result: number[] = [];
  
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;
  
    while (top <= bottom && left <= right) {
      for (let col = left; col <= right; col++) {
        result.push(matrix[top][col]);
      }
      top++;
      
      for (let row = top; row <= bottom; row++) {
        result.push(matrix[row][right]);
      }
      right--;
      
      if (top <= bottom) {
        for (let col = right; col >= left; col--) { 
          result.push(matrix[bottom][col]);
        }
        bottom--;
      }
  
      if (left <= right) {
        for (let row = bottom; row >= top; row--) {
          result.push(matrix[row][left]);
        }
        left++;
      }
    }
  
    return result;
  }

  const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
  const spiralOrderResult1 = spiralOrder(matrix1);
  const spiralOrderResult2 = spiralOrder(matrix2);
  
  console.log(spiralOrderResult1);
  console.log(spiralOrderResult2);