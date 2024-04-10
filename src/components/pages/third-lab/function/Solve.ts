export const solve = (A: number[][], b: number[]): number[] => {
    const R = A.length;
    if (R != b.length) {
        throw new Error('A and b must have the same number of rows');
    }
    for (let i = 0; i < R; i++) {
        if (A[i].length != R) {
            throw new Error('A must be square');
        }
        A[i].push(b[i]);
    }

    gaussEliminate(A);

    for (let i = R - 1; i >= 0; i--) {
        const pivot = A[i][i];
        if (pivot == 0) {
            throw new Error('System has no unique solution');
        }
        for (let j = i - 1; j >= 0; j--) {
            const f = A[j][i] / pivot;
            A[j][i] = 0;
            A[j][R] -= A[i][R] * f;
        }
        A[i][i] = 1;
        A[i][R] /= pivot;
    }

    const x: number[] = [];
    for (let i = 0; i < R; i++) {
        x.push(A[i][R]);
    }
    return x;
};

const findPivotRow = (
    arr: number[][],
    startRow: number,
    col: number,
): number => {
    let maxidx = startRow;
    for (let i = startRow + 1; i < arr.length; i++) {
        if (Math.abs(arr[i][col]) > Math.abs(arr[maxidx][col])) {
            maxidx = i;
        }
    }
    return maxidx;
};

const swapRows = (arr: number[][], i: number, j: number): void => {
    if (i != j) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
};

const gaussEliminate = (arr: number[][]): void => {
    const nrows = arr.length;
    const ncols = arr[0].length;

    let h = 0,
        k = 0;

    while (h < nrows && k < ncols) {
        const pivotRow = findPivotRow(arr, h, k);
        if (arr[pivotRow][k] == 0) {
            k++;
        } else {
            swapRows(arr, h, pivotRow);

            for (let i = h + 1; i < nrows; i++) {
                const f = arr[i][k] / arr[h][k];
                arr[i][k] = 0;
                for (let j = k + 1; j < ncols; j++) {
                    arr[i][j] -= arr[h][j] * f;
                }
            }
            h++;
            k++;
        }
    }
};
