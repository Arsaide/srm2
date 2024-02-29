import React, { useState } from 'react';
import * as math from 'mathjs';

const FirstLabM4 = () => {
    const [initialGuess, setInitialGuess] = useState<string>('1');
    const [tolerance, setTolerance] = useState<string>('0.0001');
    const [maxIterations, setMaxIterations] = useState<string>('100');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const g = (x: number) => math.evaluate(`log(${x} + 5) + 1`);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const maxIterationsNumber = parseInt(maxIterations);
        let iteration = 0;
        let x = parseFloat(initialGuess);

        while (iteration < maxIterationsNumber) {
            const nextX = g(x);
            const difference = Math.abs(nextX - x);

            if (difference < parseFloat(tolerance)) {
                setResult(nextX.toString());
                return;
            }

            x = nextX;
            iteration++;
        }

        setError('Error');
        setResult(null);
    };

    return (
        <div>
            <h2>Метод простої ітерації</h2>
            <form onSubmit={handleSubmit} className={'form'}>
                <label className={'form-label'}>
                    Початкове наближення:
                    <input
                        type="number"
                        value={initialGuess}
                        placeholder={'Введіть значення'}
                        onChange={e => setInitialGuess(e.target.value)}
                    />
                </label>
                <label className={'form-label'}>
                    Точність:
                    <input
                        type="number"
                        value={tolerance}
                        placeholder={'Введіть значення'}
                        onChange={e => setTolerance(e.target.value)}
                    />
                </label>
                <label className={'form-label'}>
                    Кількість ітерацій:
                    <input
                        type="number"
                        value={maxIterations}
                        placeholder={'Введіть значення'}
                        onChange={e => setMaxIterations(e.target.value)}
                    />
                </label>
                <button type="submit">Розрахувати</button>
            </form>
            {result !== null && <p>Наближений корінь: {result}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default FirstLabM4;
