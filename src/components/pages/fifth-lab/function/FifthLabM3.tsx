import { getError, getInterval } from '../index';

export function rungeKuttaMethod(
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
                <td>{i / 10 + 1}</td>
                <td>{y}</td>
                <td>{error}</td>
            </tr>,
        );

        const k1 = h * derivativeFunction(x, y, yd);
        const k2 = h * derivativeFunction(x + h / 2, y + k1 / 2, yd + k1 / 2);
        const k3 = h * derivativeFunction(x + h / 2, y + k2 / 2, yd + k2 / 2);
        const k4 = h * derivativeFunction(x + h, y + k3, yd + k3);

        yd += (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
        y += (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>k</th>
                    <th>xk</th>
                    <th>yk</th>
                    <th>ε</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </table>
    );
}
