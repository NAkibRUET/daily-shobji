import React from 'react';
import './DailyShobji.css';
import { IoIosArrowForward } from 'react-icons/io';

const DailyShobji = () => {
    return (
        <div className="shobji-section">
            <img src="/Images/shobjiBg.png" id="customImg" className="img-fluid imgNone" alt="bgShobji"/>
            <div className="container bgShobjiImg shobji">
                <div className="imgMove">
                    <img src="/Images/bgSite.png" id="bgImgCustom" alt="bgsite"/>
                </div>
                <div className="text">
                    <h2 className="ShobjiFontSizeh2">Why buy from Daily Shobji?</h2>
                    <div className="lignHight">
                        <p className="sobjiFontSize"><IoIosArrowForward className="leftArrowCircle" />Buy vegetable with nutrition</p>
                        <p className="sobjiFontSize"><IoIosArrowForward className="leftArrowCircle" />Vegetable with best plan </p>
                        <p className="sobjiFontSize"><IoIosArrowForward className="leftArrowCircle" />Get vegetable with monthly credit</p>
                        <p className="sobjiFontSize"><IoIosArrowForward className="leftArrowCircle" />Get fresh vegetable from us</p>
                        <p className="sobjiFontSize"><IoIosArrowForward className="leftArrowCircle" />Free delivery daily</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyShobji
