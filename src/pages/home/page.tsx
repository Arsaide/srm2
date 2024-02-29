import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/1st-lab'}>Лабораторна робота №1</Link>
                </li>
                <li>
                    <Link to={'/2th-lab'}>Лабораторна робота №2</Link>
                </li>
                <li>
                    <Link to={'/3th-lab'}>Лабораторна робота №3</Link>
                </li>
                <li>
                    <Link to={'/4th-lab'}>Лабораторна робота №4</Link>
                </li>
                <li>
                    <Link to={'/5th-lab'}>Лабораторна робота №5</Link>
                </li>
                <li>
                    <Link to={'/sixth-lab'}>Лабораторна робота №6</Link>
                </li>
                <li>
                    <Link to={'/seventh-lab'}>Лабораторна робота №7</Link>
                </li>
                <li>
                    <Link to={'/eighth-lab'}>Лабораторна робота №8</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;
