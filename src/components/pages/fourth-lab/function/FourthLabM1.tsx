import React, { useEffect } from 'react';
import { formula } from './index';

const FourthLabM1 = () => {
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

    function calcResM1(h: number, yi: number[]): number {
        let res = 0;
        for (let i = 0; i < yi.length - 1; i++) {
            res += yi[i];
        }

        return h * res;
    }

    useEffect(() => {
        sessionStorage.setItem('M1Res1', `${calcResM1(h1, resYiFirst)}`);
        sessionStorage.setItem('M1Res2', `${calcResM1(h2, resYiSecond)}`);
    }, [resYiFirst, resYiSecond]);

    return (
        <div>
            <h1>Метод прямокутників</h1>
            <p>
                h<sub>1</sub> = 1
            </p>
            <h4>
                h<sub>1</sub>(y<sub>0</sub> + y<sub>1</sub>) ={' '}
                {calcResM1(h1, resYiFirst)}
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
                {calcResM1(h2, resYiSecond)}
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

export default FourthLabM1;
