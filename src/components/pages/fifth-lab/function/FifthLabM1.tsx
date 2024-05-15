import { getError, getInterval } from '../index';

export function printEulerMethod(
    derivativeFunction: (x: number, y: number, yd: number) => number,
    xStart: number,
    xEnd: number,
    y0: number,
    yd0: number,
    h: number,
    preciseFunction: (x: number) => number,
): JSX.Element {
    const xInterval = getInterval(xStart, xEnd, h);
    let y = y0;
    let yd = yd0;

    const tableRows = [];

    for (let i = 0; i < xInterval.length; i++) {
        const x = xInterval[i];
        const yTheoretical = preciseFunction(x);
        const error = getError(y, yTheoretical);
        tableRows.push(
            <tr key={i}>
                <td>{i}</td>
                <td>{y}</td>
                <td>{error}</td>
            </tr>,
        );
        const ydNext = yd + h * derivativeFunction(x, y, yd);
        y += h * yd;
        yd = ydNext;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Step</th>
                    <th>Euler Method value</th>
                    <th>Absolute error</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </table>
    );
}
