import React, { useEffect } from 'react';
import { formula } from './index';

const FourthLabM2 = () => {
    const xiFirst: number[] = [0, 1, 2];
    const resYiFirst: number[] = [];
    const h1: number = 1;

    const xiSecond: number[] = [0, 0.5, 1, 1.5, 2];
    const resYiSecond: number[] = [];
    const h2: number = 0.5;

    xiFirst.forEach(x => {
        const y = formula(x);
        resYiFirst.push(y);
    });

    xiSecond.forEach(x => {
        const y = formula(x);
        resYiSecond.push(y);
    });

    function calcResM2V1(h: number, yi: number[]): number {
        const calc = yi[0] + yi[1] + yi[1] + yi[2];
        return (h / 2) * calc;
    }

    function calcResM2V2(h: number, yi: number[]): number {
        const calc = yi[0] + yi[1] + yi[1] + yi[2] + yi[2] + yi[3] + yi[3] + yi[4];
        return (h / 2) * calc;
    }

    useEffect(() => {
        sessionStorage.setItem('M2Res1', `${calcResM2V1(h1, resYiFirst)}`);
        sessionStorage.setItem('M2Res2', `${calcResM2V2(h2, resYiSecond)}`);
    }, [resYiFirst, resYiSecond]);

    return (
        <div>
            <h1>Метод трапецій</h1>
            <p>
                h<sub>1</sub> = 1
            </p>
            <h4>
                h<sub>1</sub>(y<sub>0</sub> + y<sub>1</sub>) ={' '}
                {calcResM2V1(h1, resYiFirst)}
            </h4>
            <table>
                <tbody>
                    <tr>
                        <td>Xi</td>
                        {xiFirst.map(x => (
                            <td key={x}>{x}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Yi</td>
                        {resYiFirst.map(y => (
                            <td key={y}>{y}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <p>
                h<sub>2</sub> = 0.5
            </p>
            <h4>
                h<sub>2</sub>(y<sub>0</sub> + y<sub>1</sub>) ={' '}
                {calcResM2V2(h2, resYiSecond)}
            </h4>
            <table>
                <tbody>
                    <tr>
                        <td>Xi</td>
                        {xiSecond.map(x => (
                            <td key={x}>{x}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Yi</td>
                        {resYiSecond.map(y => (
                            <td key={y}>{y}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FourthLabM2;
