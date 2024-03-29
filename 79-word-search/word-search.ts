function exist(board: string[][], word: string): boolean {
    const dfs = (i: number, j: number, index: number): boolean => {
        if (index === word.length) return true;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) return false;
        const temp = board[i][j];
        board[i][j] = '#'; // Marking the cell as visited
        const found = dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1) || dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1);
        board[i][j] = temp; // Restoring the cell
        return found;
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}
const board: string[][] = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];
const word: string = "ABCCED";

const result: boolean = exist(board, word);
console.log(result);