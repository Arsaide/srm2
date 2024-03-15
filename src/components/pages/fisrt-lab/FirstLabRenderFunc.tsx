import React, { useState } from 'react';
import FirstLabM1 from './function/FirstLabM1';
import FirstLabM2 from './function/FirstLabM2';
import FirstLabM3 from './function/FirstLabM3';
import FirstLabM4 from './function/FirstLabM4';

const FirstLabRenderFunc = () => {
    const [activeFunc, setActiveFunc] = useState<string>('FirstLabM1');

    const renderFunc = (component: string) => {
        switch (component) {
            case 'FirstLabM1':
                return <FirstLabM1 />;
            case 'FirstLabM2':
                return <FirstLabM2 />;
            case 'FirstLabM3':
                return <FirstLabM3 />;
            case 'FirstLabM4':
                return <FirstLabM4 />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>First lab result</h1>
            <h3>Методи</h3>
            <div className={'cnt'}>
                <button onClick={() => setActiveFunc('FirstLabM1')}>
                    Половинного ділення
                </button>
                <button onClick={() => setActiveFunc('FirstLabM2')}>
                    Хорд
                </button>
                <button onClick={() => setActiveFunc('FirstLabM3')}>
                    Ньютона
                </button>
                <button onClick={() => setActiveFunc('FirstLabM4')}>
                    Простої ітерації
                </button>
            </div>
            {renderFunc(activeFunc)}
        </div>
    );
};

export default FirstLabRenderFunc;
