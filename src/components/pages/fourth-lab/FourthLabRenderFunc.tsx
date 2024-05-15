import React, { useEffect, useState } from 'react';
import FourthLabM1 from './function/FourthLabM1';
import FourthLabAbsoluteErrors from './function/FourthLabAbsoluteErrors';
import FourthLabM3 from './function/FourthLabM3';
import FourthLabM2 from './function/FourthLabM2';

const FourthLabRenderFunc = () => {
    const [activeFunc, setActiveFunc] = useState<string>('FourthLabM1');

    const renderFunc = (component: string) => {
        switch (component) {
            case 'FourthLabM1':
                return <FourthLabM1 />;
            case 'FourthLabM2':
                return <FourthLabM2 />;
            case 'FourthLabM3':
                return <FourthLabM3 />;
            case 'FourthLabAbsoluteErrors':
                return <FourthLabAbsoluteErrors />;
            default:
                return null;
        }
    };

    useEffect(() => {
        sessionStorage.setItem('Integral', '27.8142527');
    }, []);

    return (
        <div>
            <h1>First lab result</h1>
            <h3>Методи</h3>
            <h4>
                y = x<sup>2</sup>√(16-х<sup>2</sup>)
            </h4>
            <p>
                x<sub>0</sub> = 1; x<sub>k</sub> = 3; h<sub>1</sub> = 1; h
                <sub>2</sub> = 0.5
            </p>
            <div className={'cnt'}>
                <button onClick={() => setActiveFunc('FourthLabM1')}>
                    Метод прямокутників
                </button>
                <button onClick={() => setActiveFunc('FourthLabM2')}>
                    Метод трапецій
                </button>
                <button onClick={() => setActiveFunc('FourthLabM3')}>
                    Метод Сімпсона
                </button>
                <button onClick={() => setActiveFunc('FourthLabAbsoluteErrors')}>
                    Абсолютні похибки
                </button>
            </div>
            {renderFunc(activeFunc)}
        </div>
    );
};

export default FourthLabRenderFunc;
