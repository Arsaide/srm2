import React, { useState } from 'react';
import { printEulerMethod } from './function/FifthLabM1';
import { printEulerCauchyMethod } from './function/FifthLabM2';
import { printRungeKuttaMethod } from './function/FifthLabM3';
import {
    derivativeFunction,
    h,
    preciseFunction,
    xEnd,
    xStart,
    y0,
    yd0,
} from './index';

const FifthLabRenderFunc: React.FC = () => {
    const [activeFunc, setActiveFunc] = useState<string>('Method1');

    const renderActiveFunc = () => {
        switch (activeFunc) {
            case 'Method1':
                return printEulerMethod(
                    derivativeFunction,
                    xStart,
                    xEnd,
                    y0,
                    yd0,
                    h,
                    preciseFunction,
                );
            case 'Method2':
                return printEulerCauchyMethod(
                    derivativeFunction,
                    xStart,
                    xEnd,
                    y0,
                    yd0,
                    h,
                    preciseFunction,
                );
            case 'Method3':
                return printRungeKuttaMethod(
                    derivativeFunction,
                    xStart,
                    xEnd,
                    y0,
                    yd0,
                    h,
                    preciseFunction,
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <div className={'cnt'}>
                <button onClick={() => setActiveFunc('Method1')}>
                    Метод Ейлера
                </button>
                <button onClick={() => setActiveFunc('Method2')}>
                    Метод Ейлера-Коші
                </button>
                <button onClick={() => setActiveFunc('Method3')}>
                    Метод Рунге-Кутта
                </button>
            </div>

            <h2>
                {activeFunc === 'Method1'
                    ? 'Метод Ейлера'
                    : activeFunc === 'Method2'
                      ? 'Метод Ейлера-Коші'
                      : 'Метод Рунге-Кутта'}
            </h2>
            {renderActiveFunc()}
        </div>
    );
};

export default FifthLabRenderFunc;
