import './GoBackBtn.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GoBackBtn = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const path = location.pathname;
        setVisible(path !== '/');
    }, [location.pathname]);

    return (
        <>
            {visible && (
                <div className={'btn'} onClick={goBack}>
                    Повернутись назад
                </div>
            )}
        </>
    );
};

export default GoBackBtn;
