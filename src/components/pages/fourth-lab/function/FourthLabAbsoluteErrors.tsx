import React from 'react';

const FourthLabAbsoluteErrors = () => {
    const M1Res1 = parseFloat(sessionStorage.getItem('M1Res1') || '0');
    const M1Res2 = parseFloat(sessionStorage.getItem('M1Res2') || '0');

    const M2Res1 = parseFloat(sessionStorage.getItem('M2Res1') || '0');
    const M2Res2 = parseFloat(sessionStorage.getItem('M2Res2') || '0');

    const M3Res1 = parseFloat(sessionStorage.getItem('M3Res1') || '0');
    const M3Res2 = parseFloat(sessionStorage.getItem('M3Res2') || '0');

    const Integral = parseFloat(sessionStorage.getItem('Integral') || '0');

    function calcError(mRes1: number, mRes2: number, degree: number) {
        return mRes1 - (mRes1 - mRes2) / (Math.pow(2, degree) - 1);
    }

    return (
        <div>
            <h1>Абсолютні похибки</h1>
            <h2>Метод прямокутників</h2>
            <p>Похибка = {calcError(M1Res1, M1Res2, 1) - Integral}</p>
            <h2>Метод трапецій</h2>
            <p>Похибка = {calcError(M2Res1, M2Res2, 2) - Integral}</p>
            <h2>Метод Сімпсона</h2>
            <p>Похибка = {calcError(M3Res1, M3Res2, 4) - Integral}</p>
        </div>
    );
};

export default FourthLabAbsoluteErrors;
