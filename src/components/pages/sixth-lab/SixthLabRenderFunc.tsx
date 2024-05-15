import React, { useState } from 'react';
import SixthLabM1 from './function/SixthLabM1';
import SixthLabM2 from './function/SixthLabM2';

const SixthLabRenderFunc = () => {
    const [activeFunc, setActiveFunc] = useState<string>('Method1');

    const renderFunc = (component: string) => {
        switch (component) {
            case 'Method1':
                return <SixthLabM1 />;
            case 'Method2':
                return <SixthLabM2 />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1></h1>
            <div className={'cnt'}>
                <button onClick={() => setActiveFunc('Method1')}>
                    Метод Гауса-Жордана
                </button>
                <button onClick={() => setActiveFunc('Method2')}>
                    Метод Зейделя
                </button>
            </div>
            {renderFunc(activeFunc)}
        </div>
    );
};

export default SixthLabRenderFunc;
