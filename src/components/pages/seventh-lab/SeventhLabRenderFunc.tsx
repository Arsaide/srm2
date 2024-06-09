import React, { useState } from 'react';
import SeventhLabM1 from './functions/SeventhLabM1';
import SeventhLabM2 from './functions/SeventhLabM2';

const SeventhLabRenderFunc = () => {
    const [activeFunc, setActiveFunc] = useState<string>('Method1');

    const renderFunc = (component: string) => {
        switch (component) {
            case 'Method1':
                return <SeventhLabM1 />;
            case 'Method2':
                return <SeventhLabM2 />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1></h1>
            <div className={'cnt'}>
                <button onClick={() => setActiveFunc('Method1')}>
                    Метод Ітерацій
                </button>
                <button onClick={() => setActiveFunc('Method2')}>
                    Метод Ньютона
                </button>
            </div>
            {renderFunc(activeFunc)}
        </div>
    );
};

export default SeventhLabRenderFunc;
