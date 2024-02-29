import "../FirstLab.css"
import React, { useState } from 'react';
import * as math from 'mathjs';
const FirstLabM1 = () => {
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
            setError('Incorrect field!');
            return;
        }

        while ((bTemp - aTemp) / 2 > parseFloat(tolerance) && iteration < maxIterationsNumber) {
            const c = (aTemp + bTemp) / 2;
            if (math.evaluate(func(c)) === 0) {
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
            <h2>Метод половинного ділення</h2>
            <p>[a; b]</p>
            <form onSubmit={handleSubmit} className={"form"}>
                <label className={"form-label"}>
                    Значення a:
                    <input
                        type="number"
                        placeholder={"Введіть значення"}
                        value={a}
                        onChange={(e) => setA(e.target.value)} />
                </label>
                <label className={"form-label"}>
                    Значення b:
                    <input
                        type="number"
                        placeholder={"Введіть значення"}
                        value={b}
                        onChange={(e) => setB(e.target.value)} />
                </label>
                <label className={"form-label"}>
                    Точність ε:
                    <input
                        type="number"
                        placeholder={"Введіть значення"}
                        value={tolerance}
                        onChange={(e) => setTolerance(e.target.value)} />
                </label>
                <label className={"form-label"}>
                    Кількість ітерацій:
                    <input
                        type="number"
                        placeholder={"Введіть значення"}
                        value={maxIterations}
                        onChange={(e) => setMaxIterations(e.target.value)} />
                </label>
                <button type="submit">Розрахувати</button>
            </form>
            {result !== null && (
                <p>Наближений корінь: {result}</p>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default FirstLabM1;
