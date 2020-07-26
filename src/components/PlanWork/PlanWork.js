import React from 'react';
import './PlanWork.css';

const PlanWork = () => {
    return (
        <div className="container planWorkDiv">
            <h2 className="mb-5 resizeh2">How Nutrition Plan Works?</h2>
            <div className="row marginMoveTop">
                <div className="col-6 col-md-3 col-sm-6 col-xl-3 col-lg-3 card1">
                    <div className="overText">
                        <div className="img-wrapper1">
                            <img  className="img-fluid inner-img"  src="/Images/box1.png" alt="Card" />
                        </div>
                        <div className="text-block">
                            <p className="dot">1</p>
                            <p className="resizeP">Select Nutrition Plan</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 col-sm-6 col-xl-3 col-lg-3 card2">
                    <div className="overText">
                        <div className="img-wrapper1">
                            <img className="img-fluid inner-img"  src="/Images/box2.png" alt="Card" />
                        </div>
                        <div className="text-block">
                            <p className="dot">2</p>
                            <p className="resizeP">Choose Vegetable Pack</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 col-sm-6 col-xl-3 col-lg-3 card3">
                    <div className="overText">
                        <div className="img-wrapper1">
                            <img className="img-fluid inner-img"  src="/Images/box3.png" alt="Card" />
                        </div>
                        <div className="text-block">
                            <p className="dot">3</p>
                            <p className="resizeP">Buy from Daily Shobji</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 col-sm-6 col-xl-3 col-lg-3 card4">
                    <div className="overText">
                        <div className="img-wrapper1">
                            <img className="img-fluid inner-img"  src="/Images/box4.png" alt="Card" />
                        </div>
                        <div className="text-block">
                            <p className="dot">4</p>
                            <p className="resizeP">Get Best Nutrition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanWork
