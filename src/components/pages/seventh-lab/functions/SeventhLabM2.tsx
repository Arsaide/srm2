import React, { useEffect, useState } from 'react';
import { a, initialValue, maxIterations, tolerance } from '../index';

const SeventhLabM2 = () => {
    const [solution, setSolution] = useState<{
        x1: number;
        x2: number;
    }>({ x1: 0, x2: 0 });

    const [iterations, setIterations] = useState<number>(0);

    const f = (x1: number, x2: number) => [
        a * x1 - Math.cos(x2),
        a * x2 - Math.exp(x1),
    ];

    const jacobian = (x1: number, x2: number) => [
        [a, Math.sin(x2)],
        [-Math.exp(x1), a],
    ];

    const invertMatrix = (matrix: number[][]) => {
        const [[a, b], [c, d]] = matrix;
        const det = a * d - b * c;
        if (det === 0) throw new Error('Matrix is singular and cannot be inverted');
        return [
            [d / det, -b / det],
            [-c / det, a / det],
        ];
    };

    const multiplyMatrixVector = (matrix: number[][], vector: number[]) => {
        return [
            matrix[0][0] * vector[0] + matrix[0][1] * vector[1],
            matrix[1][0] * vector[0] + matrix[1][1] * vector[1],
        ];
    };

    const newtonMethod = () => {
        let { x1, x2 } = initialValue;
        for (let i = 0; i < maxIterations; i++) {
            const F = f(x1, x2);
            const J = jacobian(x1, x2);
            const J_inv = invertMatrix(J);
            const delta = multiplyMatrixVector(J_inv, F);

            x1 -= delta[0];
            x2 -= delta[1];

            if (Math.sqrt(delta[0] ** 2 + delta[1] ** 2) < tolerance) {
                setSolution({ x1, x2 });
                setIterations(i + 1);
                return;
            }
        }
        throw new Error('Calc error');
    };

    useEffect(() => {
        newtonMethod();
    }, []);

    const equationFirst = a * solution?.x1 - Math.cos(solution?.x2);
    const equationSecond = a * solution?.x2 - Math.exp(solution?.x1);

    return (
        <div>
            <h1>Вирішення методом Ньютона</h1>
            {solution ? (
                <div>
                    <p>Розв&apos;язок знайдено за {iterations} ітерацій:</p>
                    <p>
                        Корінь x<sub>1</sub> = {solution.x1}
                    </p>
                    <p>
                        Корінь x<sub>2</sub> = {solution.x2}
                    </p>
                    <p>
                        Перше рівняння:{' '}
                        <b>
                            ax<sub>1</sub> - cos(x<sub>2</sub>) = 0
                        </b>{' '}
                        | Абсолютна похибка = {equationFirst}% or{' '}
                        {Math.abs(equationFirst * 100).toFixed(10)}%
                    </p>
                    <p>
                        Друге рівняння:{' '}
                        <b>
                            ax<sub>2</sub> - e
                            <sup>
                                x<sub>1</sub>
                            </sup>{' '}
                            = 0
                        </b>{' '}
                        | Абсолютна похибка = {equationSecond}% or{' '}
                        {Math.abs(equationSecond * 100).toFixed(8)}%
                    </p>
                </div>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
};

export default SeventhLabM2;
