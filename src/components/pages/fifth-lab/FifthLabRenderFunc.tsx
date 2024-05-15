import React from 'react';
import { printEulerMethod } from './function/FifthLabM1';
import { printEulerCauchyMethod } from './function/FifthLabM2';
import { printRungeKuttaMethod } from './function/FifthLabM3';

const FifthLabRenderFunc: React.FC = () => {
    const derivativeFunction = (x: number, y: number, yd: number): number => {
        return (5 * x - 4 * y - 3 * x * yd) / x ** 2;
    };

    const preciseFunction = (x: number): number => {
        return 5 * x + x ** 2 + x ** 2 * Math.log(Math.abs(x));
    };

    const xStart = 1;
    const xEnd = 2;
    const y0 = 6;
    const yd0 = 8;
    const h = 0.1;

    return (
        <div>
            <h2>Eulers Method</h2>
            {printEulerMethod(
                derivativeFunction,
                xStart,
                xEnd,
                y0,
                yd0,
                h,
                preciseFunction,
            )}

            <h2>Euler-Cauchy Method</h2>
            {printEulerCauchyMethod(
                derivativeFunction,
                xStart,
                xEnd,
                y0,
                yd0,
                h,
                preciseFunction,
            )}

            <h2>Runge-Kutta Method</h2>
            {printRungeKuttaMethod(
                derivativeFunction,
                xStart,
                xEnd,
                y0,
                yd0,
                h,
                preciseFunction,
            )}
        </div>
    );
};

export default FifthLabRenderFunc;
