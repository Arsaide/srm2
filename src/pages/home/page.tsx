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
                    <Link to={'/2st-lab'}>Лабораторна робота №2</Link>
                </li>
                <li>
                    <Link to={'/3st-lab'}>Лабораторна робота №3</Link>
                </li>
                <li>
                    <Link to={'/4st-lab'}>Лабораторна робота №4</Link>
                </li>
                <li>
                    <Link to={'/5st-lab'}>Лабораторна робота №5</Link>
                </li>
                <li>
                    <Link to={'/6st-lab'}>Лабораторна робота №6</Link>
                </li>
                <li>
                    <Link to={'/7st-lab'}>Лабораторна робота №7</Link>
                </li>
                <li>
                    <Link to={'/8st-lab'}>Лабораторна робота №8</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;
