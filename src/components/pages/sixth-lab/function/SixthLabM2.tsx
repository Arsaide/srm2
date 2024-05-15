import React from 'react';

const SixthLabM2 = () => {
    const matrix = [
        [18, -2, 7, 1, 50],
        [-1, 14, -3, 2, 2],
        [5, 5, 26, 7, 273],
        [-2, -6, 9, 24, 111],
    ];

    const Seidel = (matA: number[][], matB: number[]): number[] => {
        const A: number[][] = matA;
        const B: number[] = matB;

        for (let i = 0; i < A.length; i++) {
            let max: number = A[i][i];
            let index: number = 0;
            let swap: boolean = false;
            for (let j = i + 1; j < A.length; j++) {
                if (Math.abs(A[j][i]) > Math.abs(max)) {
                    max = A[j][i];
                    index = j;
                    swap = true;
                }
            }
            if (swap) {
                [A[i], A[index]] = [A[index], A[i]];
                [B[i], B[index]] = [B[index], B[i]];
            }
        }

        const n: number = B.length;

        let X: number[] = new Array(n).fill(0);
        const x: number[] = [];
        for (let k = 0; k < n; k++) {
            X[k] = 0;
        }
        const E: number = 0.01;
        const m: number = 500;
        let k: number = 0;
        let contin: boolean = true;

        while (contin && k < m) {
            for (let i = 0; i < n; i++) {
                let sum: number = 0;
                for (let j = 0; j < i; j++) {
                    sum = sum + A[i][j] * x[j];
                }
                for (let j = i + 1; j < n; j++) {
                    sum = sum + A[i][j] * X[j];
                }
                x[i] = (B[i] - sum) / A[i][i];
            }
            if (Math.abs(norm(x, n) - norm(X, n)) < E) {
                contin = false;
            } else {
                X = [...x];
            }
            k++;
        }
        return x;
    };

    const norm = (x: number[], n: number): number => {
        let sum: number = 0;
        for (let i = 0; i < n; i++) {
            sum += x[i];
        }
        return sum;
    };

    const vectorB: number[] = matrix.map(row => row[row.length - 1]);
    const matrixA: number[][] = matrix.map(row => row.slice(0, row.length - 1));

    const solutions: number[] = Seidel(matrixA, vectorB);

    const solutionElements = solutions.map((solution, index) => (
        <div key={index}>
            x{index + 1} = {solution}
        </div>
    ));

    return (
        <div>
            <h2>Метод Зейделя</h2>
            {solutionElements}
        </div>
    );
};

export default SixthLabM2;
