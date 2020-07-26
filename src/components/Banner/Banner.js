import React from 'react';
import './Banner.css';
import {Link} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import DropdownTwo from '../Dropdown/DropdownTwo';

const Banner = () => {
    return (
        <div className="bgImg">
            <div className="positionRelative">
                <div className="container nutrition">
                    <div className="movingDivh1">
                        <h1 className="text-center color">We Deliver <span className="nutrion-color">Nutrition!</span></h1>
                    </div>
                    <div className="row allCenter">
                        <div className="bg-Nutrition">
                            <div className="displayFlex">
                                <div className="imgMove1 d-flex">
                                    <img src="/Images/nutritionPlan.png" id="imgSize1" alt="nutitionPlan"/>
                                    <div className="nutrionPlanDiv">
                                        <h3 className="text-white h3Size">Nutrition Plan</h3>
                                        <p className="text-white pSizeNut">Choose a plan for</p>
                                    </div>
                                </div>
                                <div className="movingNutPlan">
                                    <div className="movingDivSite1">
                                        <div className="displayNone">
                                            <h3 className="text-white h3Size">Nutrition Plan</h3>
                                            <p className="text-white pSizeNut">Choose a plan for</p>
                                        </div>
                                        <form action="">
                                            <div className="moveTwoBtnDiv">
                                                <div className="positionChange">
                                                    <Dropdown />
                                                </div>
                                                <div id="btnResize1" className="btn-group btnMove">
                                                    <Link id="linkDecoration" to="/package" className="btn-group ">
                                                        <button id="plan" >30 Day's Plan</button>
                                                    </Link>
                                                    <Link id="linkDecoration" to="/package" className="btn-group">
                                                        <button id="pakage">View Package</button>
                                                    </Link>
                                                </div> 
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gavDiv"></div>
                        <div className="bg-family">
                            <div className="displayFlex">
                                <div className="imgMove2 d-flex">
                                    <img src="/Images/familyPackage.png" id="imgSize2" alt="familyPackage"/>
                                    <div className="nutrionPlanDiv">
                                        <h3 className="text-white h3Size">Family Package</h3>
                                        <p className="text-white pSizeNut">Choose a package for</p>
                                    </div>
                                </div>
                                <div className="moveFamilyPlan">
                                    <div className="movingDivSite2">
                                        <div className="displayNone">
                                            <h3 className="text-white h3Size">Family Package</h3>
                                            <p className="text-white pSizeNut">Choose a package for</p>
                                        </div>
                                        <form action="">
                                            <div className="moveTwoBtnDiv">
                                                <div className="positionChange">
                                                    <DropdownTwo />
                                                </div>
                                                <div id="btnResize2" className="btn-group btnMove">
                                                    <Link id="linkDecoration" to="/package" className="btn-group">
                                                        <button className="btnSize" id="plan">30 Day's Plan</button>
                                                    </Link>
                                                    <Link id="linkDecoration" to="/package" className="btn-group">
                                                        <button className="btnSize" id="bgpackage">View Package</button> 
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container customPackage">
                    <div className="displayFlexJustifyBetween forMobileVersion">
                        <div className="h4Move">
                            <h4 className="h4Size">Create your Custom package here</h4>
                        </div>
                        <div className="btnMove">
                            <button id="packageBtn">Create Package <span className="ml-2"> <img src="/Images/right-arrow.png" alt="arrowIcon" /> </span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
