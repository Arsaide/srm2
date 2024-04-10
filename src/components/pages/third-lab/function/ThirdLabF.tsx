import React from 'react';
import { buildSplineEquations } from './BuildSplineEquations';
import { solve } from './Solve';

const ThirdLabF = () => {
    const nodes = [
        { x: 0.3, y: 0 },
        { x: 1.2, y: 1.2689 },
        { x: 2.1, y: 2.6541 },
        { x: 3, y: 4.4856 },
        { x: 3.9, y: 9.9138 },
    ];

    let a0: number = 0,
        b0: number = 0,
        c0: number = 0,
        d0: number = 0,
        a1: number = 0,
        b1: number = 0,
        c1: number = 0,
        d1: number = 0,
        a2: number = 0,
        b2: number = 0,
        c2: number = 0,
        d2: number = 0,
        a3: number = 0,
        b3: number = 0,
        c3: number = 0,
        d3: number = 0;

    const interpolateAndRender = () => {
        const xs = nodes.map(node => node.x);
        const ys = nodes.map(node => node.y);

        const [pxs, pys] = doInterpolate(xs, ys, 200);

        return pxs.map((px, index) => {
            return (
                <p key={index}>
                    Значение функции в точке x = {px.toFixed(2)}:{' '}
                    {pys[index].toFixed(4)}
                </p>
            );
        });
    };

    const doInterpolate = (
        xs: number[],
        ys: number[],
        N: number,
    ): [number[], number[]] => {
        const [A, b] = buildSplineEquations(xs, ys);
        const coeffs = solve(A, b);

        const indexInterval0 = 0;
        a0 = coeffs[indexInterval0 * 4];
        b0 = coeffs[indexInterval0 * 4 + 1];
        c0 = coeffs[indexInterval0 * 4 + 2];
        d0 = coeffs[indexInterval0 * 4 + 3];

        const indexInterval1 = 1;
        a1 = coeffs[indexInterval1 * 4];
        b1 = coeffs[indexInterval1 * 4 + 1];
        c1 = coeffs[indexInterval1 * 4 + 2];
        d1 = coeffs[indexInterval1 * 4 + 3];

        const indexInterval2 = 2;
        a2 = coeffs[indexInterval2 * 4];
        b2 = coeffs[indexInterval2 * 4 + 1];
        c2 = coeffs[indexInterval2 * 4 + 2];
        d2 = coeffs[indexInterval2 * 4 + 3];

        const indexInterval3 = 3;
        a3 = coeffs[indexInterval3 * 4];
        b3 = coeffs[indexInterval3 * 4 + 1];
        c3 = coeffs[indexInterval3 * 4 + 2];
        d3 = coeffs[indexInterval3 * 4 + 3];

        const pxs = linspace(Math.min(...xs), Math.max(...xs), N);
        const pys = pxs.map(px => {
            const curveIndex = xs.findIndex(
                (val, index) =>
                    index < xs.length - 1 && px >= val && px <= xs[index + 1],
            );
            if (curveIndex < 0) {
                throw new Error(`Curve index not found for x=${px}`);
            }
            const [a, b, c, d] = coeffs.slice(
                curveIndex * 4,
                curveIndex * 4 + 4,
            );
            return a * px ** 3 + b * px ** 2 + c * px + d;
        });

        return [pxs, pys];
    };

    const linspace = (
        start: number,
        end: number,
        numPoints: number,
    ): number[] => {
        if (numPoints < 2) {
            return [start, end];
        }

        const step = (end - start) / (numPoints - 1);
        return Array.from({ length: numPoints }, (_, i) => start + i * step);
    };

    const computeFunctionValueAtX = (x: number) => {
        const [pxs, pys] = doInterpolate(
            nodes.map(node => node.x),
            nodes.map(node => node.y),
            200,
        );

        const index = pxs.findIndex(px => px >= x);
        if (index === -1) {
            return `Value of x=${x} is out of range`;
        }

        return pys[index].toFixed(4);
    };
    computeFunctionValueAtX(3.9);

    return (
        <div>
            <h2>
                Обчислений сплайн в точці x = 5:{' '}
                {(
                    a3 +
                    b3 * (5 - 3) +
                    c3 * Math.pow(5 - 3, 2) +
                    d3 * Math.pow(5 - 3, 3)
                ).toFixed(4)}
            </h2>
            <p>Коеф. для першого інтервала:</p>
            <p>a0: {a0.toFixed(4)}</p>
            <p>b0: {b0.toFixed(4)}</p>
            <p>c0: {c0.toFixed(4)}</p>
            <p>d0: {d0.toFixed(4)}</p>
            <p>Коеф. для другого інтервала:</p>
            <p>a1: {a1.toFixed(4)}</p>
            <p>b1: {b1.toFixed(4)}</p>
            <p>c1: {c1.toFixed(4)}</p>
            <p>d1: {d1.toFixed(4)}</p>
            <p>Коеф. для третього інтервала:</p>
            <p>a2: {a2.toFixed(4)}</p>
            <p>b2: {b2.toFixed(4)}</p>
            <p>c2: {c2.toFixed(4)}</p>
            <p>d2: {d2.toFixed(4)}</p>
            <p>Коеф. для четвертого інтервала:</p>
            <p>a3: {a3.toFixed(4)}</p>
            <p>b3: {b3.toFixed(4)}</p>
            <p>c3: {c3.toFixed(4)}</p>
            <p>d3: {d3.toFixed(4)}</p>

            {interpolateAndRender()}
        </div>
    );
};
export default ThirdLabF;
