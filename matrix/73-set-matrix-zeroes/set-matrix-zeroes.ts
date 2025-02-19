/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let m = matrix.length;
    let n = matrix[0].length;

    let zerorows = new Set<number>();
    let zerocolumns = new Set<number>();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zerorows.add(i);
                zerocolumns.add(j);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(zerorows.has(i) || zerocolumns.has(j)){
                matrix[i][j] = 0;
            }
        }
    }
};