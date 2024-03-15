import React, { useState } from 'react';
import SecondLabF1 from './function/SecondLabF1';
import SecondLabF2 from './function/SecondLabF2';
import './SecondLab.css';

const SecondLabRenderFunc = () => {
    const [activeFunc, setActiveFunc] = useState('SecondLabF1');

    const renderFunc = (component: string) => {
        switch (component) {
            case 'SecondLabF1':
                return <SecondLabF1 />;
            case 'SecondLabF2':
                return <SecondLabF2 />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Результати другої лабораторної роботи</h1>
            <p>Функція: y = arcth(x) + x</p>
            <p>
                Точка X<sup>*</sup> = -0.5
            </p>
            <table>
                <tbody>
                    <tr>
                        <td>x</td>
                        <td>-3</td>
                        <td>-1</td>
                        <td>1</td>
                        <td>3</td>
                        <td>-0.5</td>
                    </tr>
                    <tr>
                        <td>y</td>
                        <td>-4.24</td>
                        <td>-1.78</td>
                        <td>1.78</td>
                        <td>4.24</td>
                        <td>-0.963</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td>x</td>
                        <td>-3</td>
                        <td>0</td>
                        <td>1</td>
                        <td>3</td>
                        <td>-0.5</td>
                    </tr>
                    <tr>
                        <td>y</td>
                        <td>-4.24</td>
                        <td>0</td>
                        <td>1.78</td>
                        <td>4.24</td>
                        <td>-0.963</td>
                    </tr>
                </tbody>
            </table>
            <h3>Методи:</h3>
            <div className="cnt">
                <button onClick={() => setActiveFunc('SecondLabF1')}>
                    Лагранжа
                </button>
                <button onClick={() => setActiveFunc('SecondLabF2')}>
                    Ньютона
                </button>
            </div>
            {renderFunc(activeFunc)}
        </div>
    );
};

export default SecondLabRenderFunc;
