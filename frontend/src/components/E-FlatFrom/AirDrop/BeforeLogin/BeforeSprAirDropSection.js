import React, { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { SprLogoBackX } from "../../../../assets/_index";

const BeforeSprtAirDropSection = () => {
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
            <div className="airDropSprSection">
                <div className="airDropSprLogoSection">
                    <img src={SprLogoBackX} alt="SprLogo" />
                </div>
                <div className="airDropSprTxt">
                    <a>NFT Munie</a>
                </div>

                <div className="airDropSprBtn">
                    <button className="cant-spr-learn-more" disabled={true}>
                        Coming Soon
                    </button>
                </div>
                <div className="airDropSprTimeStampSection">
                    <div className="airDropSprTimeStampTitle">
                        <a>Remaining Duration</a>
                    </div>
                    <div className="airDropSprTimeStampInfo">
                        <a className="sprDayDate">28D</a>
                        <a className="sprHoursDate">00H</a>
                        <a className="sprMinDate">00M</a>
                        <FiRefreshCcw
                            className="airDropSprReFreshTimeStamp"
                            // onClick={changeTimeStampState}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BeforeSprtAirDropSection;
