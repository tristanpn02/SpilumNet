import React from 'react';
import './styles.css';

const Announce = (props) => {
    return (
        <div className='announce'>
            <h1>{props.children}</h1>
        </div>
    );
}

export default Announce