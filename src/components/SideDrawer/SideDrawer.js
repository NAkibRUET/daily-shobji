import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <div>
            <nav className={drawerClasses}>
                <ul onClick={props.close}>
                    <li onClick={props.close}>
                        <div className="btn-group btnBackground">
                            <button className="fontSizeBtn" id="logIn">LOG IN</button>
                            <button className="fontSizeBtn" id="signUp">SIGN UP</button>
                        </div>
                    </li>
                    <li onClick={props.close}><Link className="text-color" to="/">PLAN</Link></li>
                    <li onClick={props.close}><Link className="text-color" to="/">DELIVERY POLICY</Link></li>
                    <li onClick={props.close}><Link className="text-color" to="/">CREDIT POLICY</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer
