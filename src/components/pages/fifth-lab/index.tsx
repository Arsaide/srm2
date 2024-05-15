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
