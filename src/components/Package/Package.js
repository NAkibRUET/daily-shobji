import React from 'react';
import './Package.css';
import {Link} from 'react-router-dom';
import LoadPackageData from '../LoadPackageData/LoadPackageData';
import DropdownThree from '../Dropdown/DropdownThree';


const Package = (props) => {
    return (
        <div className="bgImgPackage">
            <div className="addjusmentPicture">
                <div className="">
                    <div className="menuBar1"></div>
                    <div className="menubarMove">
                        <div className="container menuBar">
                            <div className="displyFelx moveHeader">
                                <ul className="navBarDisplayFlex moveUl">
                                    <li className="nav-item">
                                        <Link id="linkCustom" to="/">KIDNY</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link id="linkCustom"to="/">GASTIC</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link id="linkCustom" to="/">WEAKINESS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link id="linkCustom" to="/">LIVER</Link>
                                    </li>
                                </ul>
                                <div className="dropdownMove">
                                    <DropdownThree />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <LoadPackageData addCard={props.handleAddPackage}/>
                    </div>
                    <div className="JustReSize">
                        <div className="container bgColorEstimated d-flex align-items-center">
                            <div className="d-flex bgColorEs movePara">
                                <img className="imgIcon5" src="/Images/iconText.png" alt="iconText"/>
                                <p className="tEstimate"> Estimated delivery time 4 hr, or important message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Package
