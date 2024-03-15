import React, { useEffect, useState } from 'react';
import { create, all } from 'mathjs';

const math = create(all, {});

const TableData = [
    { x: -3, y: -4.24 },
    { x: -1, y: -1.78 },
    { x: 1, y: 1.78 },
    { x: 3, y: 4.24 },
];

const SecondLabF2 = () => {
    const [result, setResult] = useState<number | null>(null);

    useEffect(() => {
        const xValues = TableData.map(point => point.x);
        const yValues = TableData.map(point => point.y);

        const w = (x: number, i: number) => {
            return (
                xValues.reduce((acc, value, j) => {
                    if (i === j) return acc;
                    return acc * (x - value);
                }, 1) /
                xValues.reduce((acc, value, j) => {
                    if (i === j) return acc;
                    return acc * (xValues[i] - value);
                }, 1)
            );
        };

        const f = (x: number) => {
            return yValues.reduce((acc, y, i) => acc + y * w(x, i), 0);
        };

        setResult(f(-0.5));
    }, []);

    const calculateEpsilon = (result: number) => {
        const expectedValue = -0.121; // Меняем на правильное ожидаемое значение
        const epsilon = Math.abs(result - expectedValue);
        const relativeError = Math.abs(epsilon / expectedValue) * 100;
        return relativeError;
    };

    const epsilon = calculateEpsilon(result || 0);

    return (
        <div>
            <h2>Інтерполяційний многочлен Ньютона</h2>
            <p>Результат f(x) = {result}</p>
            <p>ε = {epsilon.toFixed(2)}%</p>
        </div>
    );
};

export default SecondLabF2;
