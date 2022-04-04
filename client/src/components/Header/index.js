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
                    <a href="/home">home</a>
                    <a href="/tools">tools</a>
                    <a href="/apitest">apitest</a>
                </div>
            </div>
        </div>
    )
}

export default Header;