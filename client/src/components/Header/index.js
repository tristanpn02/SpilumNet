import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <div className='header'>
            <a href='/'>
                <h2>Spilum.Net</h2>
            </a>
            <div className='dropdown'>
                <h2 className='location'>{window.location.pathname === "/" ? "/home" : window.location.pathname}</h2>
                <div className='dropdown-content'>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/tools">Tools</a>
                    <a href="/apitest">ApiTest</a>
                </div>
            </div>
        </div>
    )
}

export default Header;