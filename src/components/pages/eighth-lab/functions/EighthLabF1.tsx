import React, { useCallback, useEffect, useState } from 'react';
import * as math from 'mathjs';

const EighthLabF1 = () => {
    const [result, setResult] = useState<number[]>([]);

    const calcRes = useCallback(() => {
        const h = 0.2;

        const pX = (x: number) => -0.5;
        const qX = (x: number) => -0.5 * (x + 1);
        const fX = (x: number) => -x;

        const createXArr = (a: number, b: number, h: number) => {
            const arr = [];
            const n = Math.floor((b - a) / h);

            while (a <= b) {
                arr.push(Number(a.toFixed(1)));
                a += h;
            }

            return { arr: arr, n };
        };

        const createMatrix = (arr: number[], n: number, h: number) => {
            n += 1;
            const zeroMatrix: number[][] = Array.from({ length: n }, () =>
                Array(n).fill(0),
            );

            for (let i = 1; i < n - 1; i++) {
                zeroMatrix[i][i - 1] = 1 - (pX(arr[i]) * h) / 2;
                zeroMatrix[i][i] = -2 + Math.pow(h, 2) * qX(arr[i]);
                zeroMatrix[i][i + 1] = 1 + (pX(arr[i]) * h) / 2;
            }

            return zeroMatrix;
        };

        const additionalMatrix = (arr: number[], n: number, h: number) => {
            const matrix = new Array(n + 1).fill(0);

            for (let i = 1; i < n; i++) {
                matrix[i] = Number((Math.pow(h, 2) * fX(arr[i])).toFixed(3));
            }

            return matrix;
        };

        const borders = (matrix: number[][], add_matrix: number[], n: number) => {
            matrix[0][0] = 1;
            matrix[0][1] = -1;
            add_matrix[0] = 0;

            matrix[n][n - 1] = 1;
            matrix[n][n] = 1;
            add_matrix[n] = 0.5;
        };

        const solve = (matrix: number[][], add_matrix: number[]) => {
            return math.lusolve(matrix, add_matrix).flat() as number[];
        };

        const { arr, n } = createXArr(0, 1, h);
        const matrix = createMatrix(arr, n, h);
        const addMatrix = additionalMatrix(arr, n, h);
        borders(matrix, addMatrix, n);
        const result = solve(matrix, addMatrix);

        setResult(result);
    }, []);

    useEffect(() => {
        calcRes();
    }, []);

    return (
        <div>
            {result.length > 0 && (
                <div>
                    <h3>Результат роботи:</h3>
                    <table>
                        <tbody>
                            <tr>
                                {result.map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EighthLabF1;
