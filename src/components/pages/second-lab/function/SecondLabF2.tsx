import React, { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';

interface DataItem {
    x: number;
    y: number;
}

const SecondLabF2 = () => {
    const [points1] = useState<{ x: number; y: number }[]>([
        { x: -3, y: -4.24 },
        { x: -1, y: -1.78 },
        { x: 1, y: 1.78 },
        { x: 3, y: 4.24 },
    ]);

    const [points2] = useState<{ x: number; y: number }[]>([
        { x: -3, y: -4.24 },
        { x: 0, y: 0 },
        { x: 1, y: 1.78 },
        { x: 3, y: 4.24 },
    ]);

    const [interpolatedValue1, setInterpolatedValue1] = useState<number | null>(
        null,
    );
    const [interpolatedValue2, setInterpolatedValue2] = useState<number | null>(
        null,
    );

    const [error1, setError1] = useState<number | null>(null);
    const [error2, setError2] = useState<number | null>(null);

    const interpolate = (
        values: { x: number; y: number }[],
        x: number,
    ): number => {
        const n = values.length;
        let result = 0;

        for (let i = 0; i < n; i++) {
            let term = values[i].y;
            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    term *= (x - values[j].x) / (values[i].x - values[j].x);
                }
            }
            result += term;
        }

        return result;
    };

    useEffect(() => {
        const x = -0.5;
        const interpolated1 = interpolate(points1, x);
        const interpolated2 = interpolate(points2, x);
        setInterpolatedValue1(interpolated1);
        setInterpolatedValue2(interpolated2);

        const error1Value = interpolated1 + 0.963;
        const error1Result = Math.round(Math.abs((error1Value / -0.963) * 100));
        const error2Value = interpolated2 + 0.963;
        const error2Result = Math.round(Math.abs((error2Value / -0.963) * 100));
        setError1(error1Result);
        setError2(error2Result);
    }, []);

    return (
        <div>
            <h2>Інтерполяційний многочлен Ньютона</h2>
            <div>
                <h3>Перша таблиця:</h3>
                {interpolatedValue1 !== null && (
                    <p>Результат x = -0.5: {interpolatedValue1}</p>
                )}
                <p>Похибка ε: {error1}%</p>

                <h3>Друга таблица:</h3>
                {interpolatedValue2 !== null && (
                    <p>Результат x = -0.5: {interpolatedValue2}</p>
                )}
                <p>Похибка ε: {error2}%</p>
            </div>
        </div>
    );
};

export default SecondLabF2;
