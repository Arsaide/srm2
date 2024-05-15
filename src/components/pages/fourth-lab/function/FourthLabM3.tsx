import React, { useEffect } from 'react';
import { formula } from './index';

const FourthLabM3 = () => {
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

    function calcResM3(h: number, yi: number[]): number {
        let resPaired = 0;
        let resNotPaired = 0;

        for (let i = 0; i < yi.length; i++) {
            if (yi[i] % 2 === 0) {
                resPaired += yi[i];
            } else {
                resNotPaired += yi[i];
            }
        }

        const calc = yi[0] + yi[yi.length - 1] + 4 * resPaired + 2 * resNotPaired;

        return (h / 3) * calc;
    }

    useEffect(() => {
        sessionStorage.setItem('M3Res1', `${calcResM3(h1, resYiFirst)}`);
        sessionStorage.setItem('M3Res2', `${calcResM3(h2, resYiSecond)}`);
    }, [resYiFirst, resYiSecond]);

    return (
        <div>
            <h1>Метод Сімпсона</h1>
            <p>
                h<sub>1</sub> = 1
            </p>
            <h4>
                h<sub>1</sub> = {calcResM3(h1, resYiFirst)}
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
                h<sub>2</sub> = {calcResM3(h2, resYiSecond)}
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

export default FourthLabM3;
