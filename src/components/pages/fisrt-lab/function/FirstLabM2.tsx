import '../FirstLab.module.css';
import React, { useState } from 'react';
import * as math from 'mathjs';

const FirstLabM2 = () => {
    const [a, setA] = useState<string>('1');
    const [b, setB] = useState<string>('2');
    const [tolerance, setTolerance] = useState<string>('0.0001');
    const [maxIterations, setMaxIterations] = useState<string>('100');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const func = (x: number) => `log(${x}+5) - ${x}^2 + 1`;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const maxIterationsNumber = parseInt(maxIterations);
        let iteration = 0;
        let aTemp = parseFloat(a);
        let bTemp = parseFloat(b);

        if (math.evaluate(func(aTemp)) * math.evaluate(func(bTemp)) >= 0) {
            setError('Incorrect interval!');
            return;
        }

        while (iteration < maxIterationsNumber) {
            const c =
                (aTemp * math.evaluate(func(bTemp)) -
                    bTemp * math.evaluate(func(aTemp))) /
                (math.evaluate(func(bTemp)) - math.evaluate(func(aTemp)));

            if (
                math.evaluate(func(c)) === 0 ||
                Math.abs(bTemp - aTemp) < parseFloat(tolerance)
            ) {
                setResult(c.toString());
                return;
            }

            if (math.evaluate(func(c)) * math.evaluate(func(aTemp)) < 0) {
                bTemp = c;
            } else {
                aTemp = c;
            }
            iteration++;
        }

        setResult(((aTemp + bTemp) / 2).toString());
        setError(null);
    };

    return (
        <div>
            <h2>Метод хорд</h2>
            <p>[a; b]</p>
            <form onSubmit={handleSubmit} className={'form'}>
                <label className={'form-label'}>
                    Значення a:
                    <input
                        type="number"
                        value={a}
                        placeholder={'Введіть значення'}
                        onChange={e => setA(e.target.value)}
                    />
                </label>
                <label className={'form-label'}>
                    Значення b:
                    <input
                        type="number"
                        value={b}
                        placeholder={'Введіть значення'}
                        onChange={e => setB(e.target.value)}
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
export default FirstLabM2;
