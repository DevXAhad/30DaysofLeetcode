function generate(numRows: number): number[][] {
    if (numRows <= 0) return [];

    const triangle: number[][] = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const currentRow: number[] = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        triangle.push(currentRow);
    }

    return triangle;
}

const numRows = 5;
console.log(generate(numRows));