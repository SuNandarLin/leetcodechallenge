/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const n = board.length;
    const m = board[0].length;
    const eighNeighbours = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let liveCount = 0;
            for (const [dr, dc] of eighNeighbours) {
                const nr = i + dr;
                const nc = j + dc;

                if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
                    if (board[nr][nc] === 1 || board[nr][nc] === 2) {
                        liveCount++;
                    }
                }
            }
            if (board[i][j] === 0) {
                if (liveCount === 3) {
                    board[i][j] = 3;
                }
            }
            if (board[i][j] === 1) {
                if (liveCount < 2 || liveCount > 3) {
                    board[i][j] = 2;
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 2) { board[i][j] = 0; }
            if (board[i][j] === 3) { board[i][j] = 1; }
        }
    }
};