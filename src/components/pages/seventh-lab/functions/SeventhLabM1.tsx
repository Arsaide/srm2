import React, { useEffect, useState } from 'react';
import { a, initialValue, maxIterations, tolerance } from '../index';

const SeventhLabM1 = () => {
    const [solution, setSolution] = useState<{
        x1: number;
        x2: number;
    }>({ x1: 0, x2: 0 });
    const [iterations, setIterations] = useState<number>(0);

    const g1 = (x1: number, x2: number) => Math.cos(x2) / a;
    const g2 = (x1: number, x2: number) => Math.exp(x1) / a;

    const iterationMethod = () => {
        let { x1, x2 } = initialValue;
        let error = Infinity;

        for (let i = 0; i < maxIterations; i++) {
            const newX1 = g1(x1, x2);
            const newX2 = g2(x1, x2);

            error = Math.sqrt((newX1 - x1) ** 2 + (newX2 - x2) ** 2);

            x1 = newX1;
            x2 = newX2;

            if (error < tolerance) {
                setSolution({ x1, x2 });
                setIterations(i + 1);
                return;
            }
        }
        throw new Error('Calc error');
    };

    useEffect(() => {
        iterationMethod();
    }, []);

    const equationFirst = a * solution?.x1 - Math.cos(solution?.x2);
    const equationSecond = a * solution?.x2 - Math.exp(solution?.x1);

    return (
        <div>
            <h1>Вирішення методом Ітерацій</h1>
            {solution ? (
                <div>
                    <p>Розв&apos;язок знайдено за {iterations} ітерацій:</p>
                    <p>
                        Корінь x<sub>1</sub> = {solution.x1.toFixed(7)}
                    </p>
                    <p>
                        Корінь x<sub>2</sub> = {solution.x2.toFixed(7)}
                    </p>
                    <p>
                        Перше рівняння:{' '}
                        <b>
                            ax<sub>1</sub> - cos(x<sub>2</sub>) = 0
                        </b>{' '}
                        | Абсолютна похибка ={' '}
                        {Math.abs(equationFirst * 100).toFixed(6)}%
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
                        | Абсолютна похибка ={' '}
                        {Math.abs(equationSecond * 100).toFixed(6)}%
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SeventhLabM1;
