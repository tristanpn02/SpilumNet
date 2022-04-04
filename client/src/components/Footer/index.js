import React from 'react';
import './styles.css';

import ghIcon from '../../assets/github-icon.svg'

export default class Footer extends React.Component {
    render() {
        const today = new Date();
        return (
            <div className='footer'>
                <a href='/'>
                    <h2>© Spilum.Net {today.getFullYear()}</h2>
                </a>
                <a href='https://github.com/tristanpn02/SpilumNet'>
                    <img src={ghIcon}/>
                </a>
            </div>
        );
    }
}