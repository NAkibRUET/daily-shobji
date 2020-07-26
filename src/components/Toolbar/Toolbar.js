import React from 'react';
import './Toolbar.css';
import {Link} from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, data) => total + parseInt(data.price), 0);
    return (
        <div className="positionFixed toolbar">
            <header className="container">
                <nav className="toolbar_navigation">
                    <div className="toolbar_toggle_button">
                        <DrawerToggleButton click={props.drawerToggleClickHandler}/>
                    </div>
                    <div className="toolbar_logo">
                        <Link to="/" className="custom_logo">
                            <img src="/Images/logoUpdate.png" alt="Logo" className="logoImg"/>
                        </Link>
                        <div className="cardBtnHide cardAreaCustomized">
                            <Link to="/checkout"><img className="cardImg" src="/Images/shopping-cart.png" alt="card"/></Link>
                            <p className="takaColor font-weight-bold">৳ {total}</p>
                        </div>
                    </div>
                    <div className="toolbar_navigation_items">
                        <ul id="listItems">
                            <li><Link className="custom-link" to="/">PLAN</Link></li>
                            <li><Link className="custom-link" to="/">DELIVERY POLICY</Link></li>
                            <li><Link className="custom-link" to="/">CREDIT POLICY</Link></li>
                        </ul>
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar_navigation_items">
                        <ul id="listItems">
                            <li>
                                <div id="cartItemMove" className="d-flex">
                                    <Link to="/checkout" ><img className="cardImg" src="/Images/shopping-cart.png" alt="card"/></Link>
                                    <p className="cart_text">My Cart <br/> <span className="takaColor font-weight-bold">৳ {total}</span></p>
                                </div>
                            </li>
                            <li>
                                <div className="btn-group btnBackground">
                                    <button className="fontSizeBtn" id="logIn">LOG IN</button>
                                    <button className="fontSizeBtn" id="signUp">SIGN UP</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Toolbar

