import React, { useEffect, useState } from 'react';

const SeventhLabM1 = () => {
    const [x1, setX1] = useState<number>(0);
    const [x2, setX2] = useState<number>(0);

    useEffect(() => {
        const maxIterations = 1500;
        const tolerance = 1e-6;
        const a = 5;

        for (let i = 0; i < maxIterations; i++) {
            const newX1 = (1 / a) * Math.cos(x2);
            const newX2 = (1 / a) * Math.exp(x1);

            if (
                Math.abs(newX1 - x1) < tolerance &&
                Math.abs(newX2 - x2) < tolerance
            ) {
                break;
            }

            setX1(newX1);
            setX2(newX2);
        }
    }, []);

    return (
        <div>
            <p>x1: {x1}</p>
            <p>x2: {x2}</p>
        </div>
    );
};

export default SeventhLabM1;
