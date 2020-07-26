import React from 'react';
import './Delivery.css';

const Delivery = () => {
    return (
        <div className="deliveryBgImg">
            <div className="container bgbackground">
                <div className="row">
                    <div className="borderBottom">
                        <div className="bgDelivery borderRight">
                            <div className="innerDiv">
                                <div className="d-flex">
                                    <img src="/Images/icon1.png" className="imgDelivery" alt="delivery"/>
                                    <div className="moveDeliveryDiv">
                                        <h6 className="tSize">FREE DELIVERY</h6>
                                        <p className="pSize">We deliver the product for free</p>
                                        <div className="underline"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bgBuy borderRight">
                        <div className="innerDiv">
                            <div className="d-flex reSizing">
                                <img src="/Images/icon2.png" className="imgDelivery1" alt="calander"/>
                                <div className="text-white moveDeliveryDiv">
                                    <h6 className="tSize">BUY VEGETABLE IN</h6>
                                    <p className="pSize">Monthly Credit (After 10 Order)</p>
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bgGet">
                        <div>
                            <div className="d-flex reSizing">
                                <img src="/Images/icon3.png" className="imgDelivery2" alt="discount"/>
                                <div className="text-white moveDeliveryDiv">
                                    <h6 className="tSize">GET FREE PLAN OF</h6>
                                    <p className="pSize">Vagetable Package</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery
