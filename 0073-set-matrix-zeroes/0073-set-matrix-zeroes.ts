/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const rows: number[] = [];
    const cols: number[] = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                if (rows.indexOf(i) === -1) {
                    rows.push(i);
                }
                if (cols.indexOf(j) === -1) {
                    cols.push(j);
                }
            }
        }
    }

    for (const row of rows) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }

    for (const col of cols) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }
}

const matrix: number[][] = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

setZeroes(matrix);

for (const row of matrix) {
    console.log(row.join(" "));
}