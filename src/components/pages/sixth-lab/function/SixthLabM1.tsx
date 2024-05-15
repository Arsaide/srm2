import React from 'react';
import { firstMatrix } from '../index';

const SixthLabM1 = () => {
    const factor: number = firstMatrix[0][0];
    for (let i = 0; i < firstMatrix[0].length; i++) {
        firstMatrix[0][i] /= factor;
    }

    for (let i = 1; i < firstMatrix.length; i++) {
        const factor: number = firstMatrix[i][0] / firstMatrix[0][0];
        for (let j = 0; j < firstMatrix[i].length; j++) {
            firstMatrix[i][j] -= factor * firstMatrix[0][j];
        }
    }

    const solutions: number[] = [];
    for (let i = firstMatrix.length - 1; i >= 0; i--) {
        let solution: number = firstMatrix[i][firstMatrix[i].length - 1];
        for (let j = i + 1; j < firstMatrix.length; j++) {
            solution -= firstMatrix[i][j] * solutions[solutions.length - (j - i)];
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
