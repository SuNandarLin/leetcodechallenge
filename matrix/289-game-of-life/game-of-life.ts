/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    let tempboard = board.map(row => [...row]);

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
                    if ((board[nr][nc] === 1)) {
                        liveCount++;
                    }
                }
            }
            if ((board[i][j] === 0) && (liveCount === 3)) {
                tempboard[i][j] = 1;
            } else if ((board[i][j] === 1) && (liveCount < 2 || liveCount > 3)) {
                tempboard[i][j] = 0;
            }
        }
    }
    board.splice(0, board.length, ...tempboard.map(row => [...row]));
};