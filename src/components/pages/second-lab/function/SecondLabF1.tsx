import React, { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';

interface DataItem {
    x: number;
    y: number;
}

const SecondLabF1 = () => {
    const [tableDataOne] = useState<DataItem[]>([
        { x: -3, y: -4.24 },
        { x: -1, y: -1.78 },
        { x: 1, y: 1.78 },
        { x: 3, y: 4.24 },
    ]);

    const [tableDataTwo] = useState<DataItem[]>([
        { x: -3, y: -4.24 },
        { x: 0, y: 0 },
        { x: 1, y: 1.78 },
        { x: 3, y: 4.24 },
    ]);
    const [resultOne, setResultOne] = useState<{
        equationString: string;
        result: number;
        epsilon: number;
    }>({ equationString: '', result: 0, epsilon: 0 });
    const [resultTwo, setResultTwo] = useState<{
        equationString: string;
        result: number;
        epsilon: number;
    }>({ equationString: '', result: 0, epsilon: 0 });
    const [error1, setError1] = useState<number | null>(null);
    const [error2, setError2] = useState<number | null>(null);

    const calculateResult = (data: DataItem[]) => {
        const xValues = data.map(row => row.x);
        const yValues = data.map(row => row.y);
        const wFunctions = [];

        for (let i = 0; i < data.length; i++) {
            let wFunction = '';
            for (let j = 0; j < data.length; j++) {
                if (j !== i) {
                    wFunction += `(x-${xValues[j]})/(${xValues[i]}-${xValues[j]})`;
                }
            }
            wFunctions.push(wFunction);
        }

        const equations = [];
        for (let i = 0; i < data.length; i++) {
            equations.push(`${yValues[i]} * (${wFunctions[i]})`);
        }
        const equationString = equations.join(' + ');

        const calculatedResult = evaluate(equationString, { x: -0.5 });

        const difference = calculatedResult - -0.963;
        const epsilonValue = Math.abs(difference / -0.963) * 100;

        return {
            equationString,
            result: calculatedResult,
            epsilon: epsilonValue,
        };
    };

    useEffect(() => {
        const resultOne = calculateResult(tableDataOne);
        setResultOne(resultOne);

        const resultTwo = calculateResult(tableDataTwo);
        setResultTwo(resultTwo);

        const error1Value = resultOne.result + 0.963;
        const error1Result = Math.round(Math.abs((error1Value / -0.963) * 100));
        const error2Value = resultTwo.result + 0.963;
        const error2Result = Math.round(Math.abs((error2Value / -0.963) * 100));
        setError1(error1Result);
        setError2(error2Result);
    }, [tableDataOne, tableDataTwo]);

    return (
        <div>
            <h2>Інтерполяційний многочлен Лагранжа</h2>
            <h3>Перша таблиця:</h3>
            <p>{`Рівняння: ${resultOne.equationString}`}</p>
            <p>{`Результат x = -0.5: ${resultOne.result}`}</p>
            <p>Похибка ε: {error1}%</p>

            <h3>Друга таблица:</h3>
            <p>{`Рівняння: ${resultTwo.equationString}`}</p>
            <p>{`Результат x = -0.5: ${resultTwo.result}`}</p>
            <p>Похибка ε: {error2}%</p>
        </div>
    );
};

export default SecondLabF1;
