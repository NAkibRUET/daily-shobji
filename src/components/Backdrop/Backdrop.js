import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.click}></div>
        </div>
    )
}

export default Backdrop
