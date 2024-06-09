import React, { useEffect, useState } from 'react';

const SeventhLabM2 = () => {
    const [x1, setX1] = useState<number>(0);
    const [x2, setX2] = useState<number>(0);
    const a = 5;

    useEffect(() => {
        const maxIterations = 1500;
        const tolerance = 0.0000001;

        for (let i = 0; i < maxIterations; i++) {
            const f1 = a * x1 - Math.cos(x2);
            const f2 = a * x2 - Math.exp(x1);

            const jacobian: [number, number][] = [
                [a, Math.sin(x2)],
                [-Math.exp(x1), a],
            ];

            const inverseJacobian = invertMatrix(jacobian);
            const delta = multiplyMatrixVector(inverseJacobian, [-f1, -f2]);

            setX1(prevX1 => prevX1 + delta[0]);
            setX2(prevX2 => prevX2 + delta[1]);

            if (Math.abs(delta[0]) < tolerance && Math.abs(delta[1]) < tolerance) {
                break;
            }
        }
    }, []);

    const invertMatrix = (matrix: [number, number][]): [number, number][] => {
        const [[a, b], [c, d]] = matrix;
        const determinant = a * d - b * c;
        if (determinant === 0) {
            throw new Error('Error.');
        }

        const invDet = 1 / determinant;
        return [
            [d * invDet, -b * invDet],
            [-c * invDet, a * invDet],
        ];
    };

    const multiplyMatrixVector = (
        matrix: [number, number][],
        vector: [number, number],
    ) => {
        const [a, b]: [number, number] = matrix[0];
        const [c, d]: [number, number] = matrix[1];
        const [x, y]: [number, number] = vector;
        return [a * x + b * y, c * x + d * y];
    };

    return (
        <div>
            <p>x1: {x1}</p>
            <p>x2: {x2}</p>
        </div>
    );
};

export default SeventhLabM2;
