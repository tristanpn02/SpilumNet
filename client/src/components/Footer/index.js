import React from 'react';
import './styles.css';

export default class Footer extends React.Component {
    render() {
        const today = new Date();
        return (
            <div className='footer'>
                <a href='/'>
                    <h2>© Spilum.Net {today.getFullYear()}</h2>
                </a>
            </div>
        );
    }
}