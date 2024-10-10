import React from "react";
import './styles.css';

import ghIcon from './github-mark.svg';

const Footer = () => {
    const today = new Date();

    return (
        <div className="footer">
            <a href="/">
                <h2>&copy Spilum.Net {today.getFullYear()}</h2>
            </a>
            <a href="https://github.com/tristanpn02/SpilumNet">
                <img src={ghIcon} alt="This Website's Github Repository" />
            </a>
        </div>
    )
}