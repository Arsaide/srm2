export function getInterval(start: number, end: number, h: number): number[] {
    let current = start;
    const interval: number[] = [];
    while (current <= end) {
        interval.push(current);
        current += h;
    }
    interval.push(current);
    return interval;
}

export function getError(theoretical: number, measured: number): number {
    return Math.abs(theoretical - measured);
}

export const derivativeFunction = (x: number, y: number, yd: number): number => {
    return (5 * x - 4 * y - 3 * x * yd) / x ** 2;
};

export const preciseFunction = (x: number): number => {
    return 5 * x + x ** 2 + x ** 2 * Math.log(Math.abs(x));
};

export const xStart = 1;
export const xEnd = 2;
export const y0 = 6;
export const yd0 = 8;
export const h = 0.1;
