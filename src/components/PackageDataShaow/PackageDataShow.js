import React from 'react'
import Plus from '../../Icons/SVG/plus.svg';
import Eye from '../../Icons/SVG/eye-alt.svg';

const PackageDataShow = (props) => {
    return (
        <div className="containerImgBg">
            <div className="row marginTopDiv">
                <div className="headerPackageForMobileView displayNoneHeaderPack">
                    <div className="hearderMarR">
                        <h5 className="textH5">{props.packageData.title}</h5>
                        <p className="ptext">500 - 800 Cal</p>
                    </div>
                </div>
                <div className="shobjiImg">
                    <div className="row firstRowMove">
                        <div className="shosaBg moveLeft">
                            <div className="displayFlex allShobjiAlign">
                                <img id="allShobjiImgReSize" src={props.packageData.imgShosa} alt="shosaImg" />
                                <div className="moveDivp">
                                    <p className="allTextShobjiSize displayNoneText"> <span className="fontSizeBig">Fresh Shosa</span> <br /> 1kg <br /> Tk. 70 </p>
                                    <p className="allTextShobjiSize displayAnotherTextNone"> <span className="fontSizeBig">Fresh Shosa </span> <br /> 1kg - Tk. 70 </p>
                                </div>
                            </div>
                        </div>
                        <div className="otherDiv"></div>
                        <div className="shosaBg">
                            <div className="displayFlex allShobjiAlign">
                                <img id="allShobjiImgReSize" src={props.packageData.imgGajor} alt="gajor" />
                                <div className="moveDivp">
                                    <p className="allTextShobjiSize displayNoneText"> <span className="fontSizeBig">Gajor</span> <br /> 1kg <br /> Tk. 90 </p>
                                    <p className="allTextShobjiSize displayAnotherTextNone"> <span className="fontSizeBig">Gajor</span> <br />1kg - Tk. 90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row firstRowMove">
                            <div className="shosaBg moveLeftSecondRow">
                                <div className="displayFlex allShobjiAlign">
                                    <img id="allShobjiImgReSize" src={props.packageData.imgJali} alt="jali" />
                                    <div className="moveDivp">
                                        <p className="allTextShobjiSize displayNoneText"><span className="fontSizeBig">Jali Kumra</span> <br /> 1kg <br /> Tk. 40 </p>
                                        <p className="allTextShobjiSize displayAnotherTextNone"><span className="fontSizeBig">Jali Kumra</span> <br /> 1kg - Tk. 40 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="otherDiv"></div>
                            <div className="shosaBg">
                                <div className="displayFlex allShobjiAlign">
                                    <img id="allShobjiImgReSize" src={props.packageData.imgLal} alt="lalShak" />
                                    <div className="moveDivp">
                                        <p className="allTextShobjiSize displayNoneText"><span className="fontSizeBig">Lal Shak</span> <br /> 500 g <br /> Tk. 50 </p>
                                        <p className="allTextShobjiSize displayAnotherTextNone"><span className="fontSizeBig">Lal Shak</span> <br /> 500 g - Tk. 50 </p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="packageName">
                    <div className="marginLeftDiv">
                        <div className="displayNonePackage">
                            <h5 className="textH5">{props.packageData.title}</h5>
                            <p className="ptext">{props.packageData.caloryRange}</p>
                        </div>
                        <p className="manyText">{props.packageData.text}</p>
                        <div id="packageBtnGroup" className="btn-group">
                            <button id="cartBtn" onClick={()=> props.addCard(props.packageData)}> <img src={Plus} className="svgIcon" alt="svg"  /> Add to Cart</button>
                            <button id="neutrationBtn"> <img src={Eye} className="svgIcon" alt="eye" /> Neutration Details</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default PackageDataShow
