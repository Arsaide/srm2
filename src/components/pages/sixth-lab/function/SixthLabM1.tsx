import React from 'react';

const SixthLabM1 = () => {
    const matrix: number[][] = [
        [3, -8, 1, -7, 96],
        [6, 4, 8, 5, -13],
        [-1, 1, -9, -3, -54],
        [-6, 6, 9, -4, 82],
    ];

    const factor: number = matrix[0][0];
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[0][i] /= factor;
    }

    for (let i = 1; i < matrix.length; i++) {
        const factor: number = matrix[i][0] / matrix[0][0];
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] -= factor * matrix[0][j];
        }
    }

    const solutions: number[] = [];
    for (let i = matrix.length - 1; i >= 0; i--) {
        let solution: number = matrix[i][matrix[i].length - 1];
        for (let j = i + 1; j < matrix.length; j++) {
            solution -= matrix[i][j] * solutions[solutions.length - (j - i)];
        }
        solutions.push(solution);
    }

    const solutionElements = solutions.map((solution, index) => (
        <div key={index}>
            x{index + 1} = {solution}
        </div>
    ));

    return (
        <div>
            <h2>Метод Гаусса-Жордана</h2>
            {solutionElements}
        </div>
    );
};

export default SixthLabM1;
