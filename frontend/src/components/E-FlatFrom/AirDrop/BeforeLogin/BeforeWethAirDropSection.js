import React, { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { USDCLogo } from "../../../../assets/_index";

const BeforeWethAirDropSection = () => {
    const [checkChainId, setCheckChainId] = useState("");

    useEffect(() => {
        if (window.ethereum?.chainId === "0x1") {
            setCheckChainId("0x1");
        }
        if (window.ethereum?.chainId === "0xa") {
            setCheckChainId("Oxa");
        }
    }, [window.ethereum?.chainId]);
    return (
        <>
            <div className="airDropWethSection">
                <div className="airDropWethLogoSection">
                    <img src={USDCLogo} alt="WethLogo" />
                </div>
                <div className="airDropWethTxt">
                    <a>USDC</a>
                </div>
                {checkChainId === "Oxa" ? (
                    <div className="airDropWethBtn">
                        <button className="cant-weth-learn-more" disabled={true}>
                            COMING SOON
                        </button>
                    </div>
                ) : (
                    <div className="airDropWethBtn">
                        <button className="switch-weth-learn-more" disabled={true}>
                            Switch to Optimism
                        </button>
                    </div>
                )}
                <div className="airDropWethTimeStampSection">
                    <div className="airDropWethTimeStampTitle">
                        <a>Remaining Duration</a>
                    </div>
                    <div className="airDropWethTimeStampInfo">
                        <a className="wethDayDate">N/A</a>
                        <a className="wethHoursDate">N/A</a>
                        <a className="wethMinDate">N/A</a>
                        {/* <a> */}
                        <FiRefreshCcw className="airDropWethReFreshTimeStamp" />
                        {/* </a> */}
                    </div>
                    <p></p>
                </div>
                {/* <div className="airDropWethPriceSection">
                    <a>1 WETH = {getLatestPrice} USD</a>
                </div> */}
            </div>
        </>
    );
};

export default BeforeWethAirDropSection;
