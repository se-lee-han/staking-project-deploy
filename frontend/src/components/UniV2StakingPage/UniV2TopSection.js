import React from "react";
import "./UniV2TopSection.scss";
import { MainUniLogo } from "../../img/_index";

const UniV2TopSection = () => {
    return (
        <div>
            <div className="usdcHanEpPageLogoContainer">
                <img className="usdcHanEpLogo" src={MainUniLogo} alt="HanLogo" />
                <a>UNI-V2 STAKING</a>
            </div>
            <div className="usdcHanEpAllAmountContainer">
                <div className="usdcHanEpAprAmountContainer">
                    <div className="usdcHanEpAprAmountTitle">
                        <div className="usdcHanEpAprAmountTxt">
                            <a>0.00386085515085952 HANeP </a>
                        </div>
                        {/* <div className="tooltip-container">
                    <i className="info-icon material-icons">
                        <HelpIcon />
                    </i>
                    <div className="tooltip-content">
                        <span>
                            APR displayed is not historical statistics. According to the LP token quantity standard that fluctuates with the HAN weight
                            of the POOL, when staking at the present time, APR is the annual interest rate of the amount of HAN to be obtained against
                            the liquidity supplied.
                        </span>
                        <span className="align-right">
                            <a href="https://medium.com/@HanIdentity/hanchain-x-optimism-x-uniswap-v3-x-arrakis-af564de80f81" target="_blank">
                                Read More
                            </a>
                        </span>
                    </div>
                </div> */}
                    </div>
                    <div className="usdcHanEpAprAmountNum">
                        <a> for each HANeP per second</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniV2TopSection;
