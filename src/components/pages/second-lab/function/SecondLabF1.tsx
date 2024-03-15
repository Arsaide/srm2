import React, { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';

const SecondLabF1 = () => {
    const [tableData] = useState([
        { x: -3, y: -4.24 },
        { x: -1, y: -1.78 },
        { x: 1, y: 1.78 },
        { x: 3, y: 4.24 },
    ]);

    const xValues = tableData.map(row => row.x);
    const yValues = tableData.map(row => row.y);
    const wFunctions = [];

    for (let i = 0; i < tableData.length; i++) {
        let wFunction = '';
        for (let j = 0; j < tableData.length; j++) {
            if (j !== i) {
                wFunction += `(x-${xValues[j]})/(${xValues[i]}-${xValues[j]})`;
            }
        }
        wFunctions.push(wFunction);
    }

    const equations = [];
    for (let i = 0; i < tableData.length; i++) {
        equations.push(`${yValues[i]} * (${wFunctions[i]})`);
    }
    const equationString = equations.join(' + ');

    const [result, setResult] = useState('');
    const [epsilon, setEpsilon] = useState(0);

    useEffect(() => {
        const calculatedResult = evaluate(equationString, { x: -0.5 });
        setResult(calculatedResult);

        const difference = calculatedResult - -0.963;
        const epsilonValue = Math.abs(difference / -0.963) * 100;
        setEpsilon(epsilonValue);
    }, [equationString]);

    return (
        <div>
            <h2>Інтерполяційний многочлен Лагранжа</h2>
            <ul>
                {wFunctions.map((wFunction, index) => (
                    <li key={index}>{`w${index + 1}(x) = ${wFunction}`}</li>
                ))}
            </ul>
            <h2>Result</h2>
            <p>{`Equation: ${equationString}`}</p>
            <p>{`Result for x = -0.5: ${result}`}</p>
            <p>{`Epsilon: ${epsilon.toFixed(2)}%`}</p>
        </div>
    );
};

export default SecondLabF1;
