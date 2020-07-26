import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="delevery">
            <div className="bgImgSizeFooter">
                <div className="footerImgSectionReSize">
                    <img src="/Images/footerBg.png" id="imgBlock" className="imgSizeFooter" alt="footerImg"/>
                    <img src="/Images/footerBgImg.png" id="imgABlock" className="imgSizeFooter" alt="footerBg"/>
                </div>
                <div className="carImg">
                    <img src="/Images/onlyCar.png" className="carImgsize" alt="car"/>
                </div>
                <div className="container">
                    <div className="text-block1">
                        <h1 className="fontSizeh1">Free Shobji Delevery! <br/> Every Day at your convenient</h1>
                        <div className="justMove">
                            <div className="d-flex">
                                <img className="smallImg marginAlign" src="/Images/time.png" alt="time"/>
                                <p id="fontSizeP">Open Hr 10am - 04pm</p>
                            </div>
                            <div className="d-flex">
                                <img className="smallImg marginAlign" src="/Images/call.png" alt="call"/>
                                <p id="fontSizeP">01711 123 456</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-social">
                        <div className="d-flex">
                            <div className="facebookIcon">
                                <a id="linkHover" href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                                    <FaFacebookF className="brandImgSize"/>
                                </a>
                            </div>
                            <div className="youTubeIcon">
                                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                    <FaYoutube  className="youTubeLogoSize"/>
                                </a>
                            </div>
                            <p className="border-left ml-3"></p>
                            <p id="fontSizeFooterP" className="ml-3">©2020 - 2021 Daily Shobji, All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="downBlack"></div>
        </div>
    )
}

export default Footer;
