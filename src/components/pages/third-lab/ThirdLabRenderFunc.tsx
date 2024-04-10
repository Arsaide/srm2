import React from 'react';
import ThirdLabF from './function/ThirdLabF';

const ThirdLabRenderFunc = () => {
    return (
        <>
            <h1>Результати третьої лабораторної роботи</h1>
            <p>
                Точка X<sup>*</sup> = 5
            </p>
            <table>
                <tbody>
                    <tr>
                        <td>i</td>
                        <td>0</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Xi</td>
                        <td>0.3</td>
                        <td>1.2</td>
                        <td>2.1</td>
                        <td>3</td>
                        <td>3.9</td>
                    </tr>
                    <tr>
                        <td>Yi</td>
                        <td>0</td>
                        <td>1.2689</td>
                        <td>2.6541</td>
                        <td>4.4856</td>
                        <td>9.9138</td>
                    </tr>
                </tbody>
            </table>
            <h3>Метод: </h3>
            <div>
                <ThirdLabF />
            </div>
        </>
    );
};

export default ThirdLabRenderFunc;
