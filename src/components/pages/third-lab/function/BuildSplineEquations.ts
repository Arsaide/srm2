export const buildSplineEquations = (
    xs: number[],
    ys: number[],
): [number[][], number[]] => {
    const Npoints = xs.length;
    const Npolys = Npoints - 1;
    const Ncoeffs = 4 * Npolys;

    const A: number[][] = [];
    for (let i = 0; i < Ncoeffs; i++) {
        A.push(Array(Ncoeffs).fill(0));
    }

    const b: number[] = Array(Ncoeffs).fill(0);

    let nrow = 0;
    for (let i = 0; i < Npolys; i++, nrow += 2) {
        A[nrow][4 * i] = xs[i] ** 3;
        A[nrow][4 * i + 1] = xs[i] ** 2;
        A[nrow][4 * i + 2] = xs[i];
        A[nrow][4 * i + 3] = 1;
        b[nrow] = ys[i];

        A[nrow + 1][4 * i] = xs[i + 1] ** 3;
        A[nrow + 1][4 * i + 1] = xs[i + 1] ** 2;
        A[nrow + 1][4 * i + 2] = xs[i + 1];
        A[nrow + 1][4 * i + 3] = 1;
        b[nrow + 1] = ys[i + 1];
    }

    for (let i = 0; i < Npolys - 1; i++, nrow++) {
        A[nrow][4 * i] = 3 * xs[i + 1] ** 2;
        A[nrow][4 * i + 1] = 2 * xs[i + 1];
        A[nrow][4 * i + 2] = 1;
        A[nrow][4 * (i + 1)] = -3 * xs[i + 1] ** 2;
        A[nrow][4 * (i + 1) + 1] = -2 * xs[i + 1];
        A[nrow][4 * (i + 1) + 2] = -1;
    }

    for (let i = 0; i < Npolys - 1; i++, nrow++) {
        A[nrow][4 * i] = 6 * xs[i + 1];
        A[nrow][4 * i + 1] = 2;
        A[nrow][4 * (i + 1)] = -6 * xs[i + 1];
        A[nrow][4 * (i + 1) + 1] = -2;
    }

    A[nrow][0] = 6 * xs[0];
    A[nrow][1] = 2;
    A[nrow + 1][4 * (Npolys - 1)] = 6 * xs[Npolys];
    A[nrow + 1][4 * (Npolys - 1) + 1] = 2;

    return [A, b];
};
