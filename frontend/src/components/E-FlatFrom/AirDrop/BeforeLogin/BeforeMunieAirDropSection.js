import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiRefreshCcw } from "react-icons/fi";
import { MunieLogoBackX } from "../../../../img/_index";

const BeforeMunieAirDropSection = () => {
    const { account } = useSelector((state) => state.account);
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
            <div className="airDropMuniSection">
                <div className="airDropMunieLogoSection">
                    <img src={MunieLogoBackX} alt="MunieLogo" />
                </div>
                <div className="airDropMuniTxt">
                    <a>NFT Munie</a>
                </div>

                <div className="airDropMuniBtn">
                    <button className="cant-airdrop-munie-learn-more" disabled={true}>
                        Nothing to Claim
                    </button>
                </div>
                <div className="airDropMuniTimeStampSection">
                    <div className="airDropMuniTimeStampTitle">
                        <a>Remaining Duration</a>
                    </div>
                    <div className="airDropMuniTimeStampInfo">
                        <a className="muniDayDate">28D</a>
                        <a className="muniHoursDate">00H</a>
                        <a className="muniMinDate">00M</a>
                        <FiRefreshCcw
                            className="airDropMuniReFreshTimeStamp"
                            // onClick={changeTimeStampState}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BeforeMunieAirDropSection;
