import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WethAirDropSection.scss";
import { FiRefreshCcw } from "react-icons/fi";
import { airDropClaimAction } from "../../../../redux/actions/airdropActions/wethActions/airDropClaimAction";
import { airDropTimeStampAction } from "../../../../redux/actions/airdropActions/wethActions/airDropTimeStampAction";
import { airDropPriceAction } from "../../../../redux/actions/airdropActions/wethActions/airDropPriceAction";
import { airDropViewAction } from "../../../../redux/actions/airdropActions/wethActions/airDropViewAction";
import { airDropClaimedAction } from "../../../../redux/actions/airdropActions/wethActions/airDropClaimedAction";
import { USDCLogo } from "../../../../assets/_index";

const WethAirDropSection = () => {
    const dispatch = useDispatch();

    const [checkChainId, setCheckChainId] = useState("");

    const { account } = useSelector((state) => state.account);
    const { getLatestPrice } = useSelector((state) => state.airDropLatestPrice);
    const { gasPriceResult } = useSelector((state) => state.gasPrice);
    const { canClaim, getProofToBack, getAmountToBack, claimed, claimDayDate, claimHoursDate, claimMinDate } = useSelector((state) => state.airDropView);

    // WethClaim
    const airDropClaim = () => {
        dispatch(airDropClaimAction.airDropClaimAct(account, getProofToBack, getAmountToBack, gasPriceResult));
    };

    const changeTimeStampState = () => {
        dispatch(airDropTimeStampAction.airDropTimeStampAct());
    };

    useEffect(() => {
        if (window.ethereum?.chainId === "0x1") {
            setCheckChainId("0x1");
        }
        if (window.ethereum?.chainId === "0xa") {
            setCheckChainId("Oxa");
        }
    }, [window.ethereum?.chainId]);

    useEffect(() => {
        dispatch(airDropPriceAction.airDropPriceAct(account));
        dispatch(airDropViewAction.airDropViewAct(account));
        dispatch(airDropClaimedAction.airDropClaimedAct(account));
        dispatch(airDropTimeStampAction.airDropTimeStampAct(account));
    }, [account]);

    return (
        <>
            {checkChainId === "Oxa" ? (
                <div className="airDropWethSection">
                    <div className="airDropWethLogoSection">
                        <img src={USDCLogo} alt="WethLogo" />
                    </div>
                    <div className="airDropWethTxt">
                        <a>USDC</a>
                    </div>
                    <div className="airDropWethBtn">
                        <button className="cant-weth-learn-more" disabled={true}>
                            COMING SOON
                        </button>
                    </div>
                    <div className="airDropWethTimeStampSection">
                        <div className="airDropWethTimeStampTitle">
                            <a>Remaining Duration</a>
                        </div>
                        <div className="airDropWethTimeStampInfo">
                            <a className="wethDayDate">N/A</a>
                            <a className="wethHoursDate">N/A</a>
                            <a className="wethMinDate">N/A</a>
                            {/* <a> */}
                            <FiRefreshCcw className="airDropWethReFreshTimeStamp" onClick={changeTimeStampState} />
                            {/* </a> */}
                        </div>
                        {/* <div className="airDropWethTimeStampInfo">
                            <a className="wethDayDate">{claimDayDate}D</a>
                            <a className="wethHoursDate">{claimHoursDate}H</a>
                            <a className="wethMinDate">{claimMinDate}M</a>
                            <FiRefreshCcw className="airDropWethReFreshTimeStamp" onClick={changeTimeStampState} />
                        </div> */}
                        <p></p>
                    </div>
                    {/* <div className="airDropWethPriceSection">
                        <a>1 WETH = {getLatestPrice} USD</a>
                    </div> */}
                </div>
            ) : (
                <div className="airDropWethSection">
                    <div className="airDropWethLogoSection">
                        <img src={USDCLogo} alt="WethLogo" />
                    </div>
                    <div className="airDropWethTxt">
                        <a>USDC</a>
                    </div>

                    <div className="airDropWethBtn">
                        <button className="switch-weth-learn-more" disabled={true}>
                            Switch to Optimism
                        </button>
                    </div>

                    <div className="airDropWethTimeStampSection">
                        <div className="airDropWethTimeStampTitle">
                            <a>Remaining Duration</a>
                        </div>
                        <div className="airDropWethTimeStampInfo">
                            <a className="wethDayDate">N/A</a>
                            <a className="wethHoursDate">N/A</a>
                            <a className="wethMinDate">N/A</a>
                            {/* <a> */}
                            <FiRefreshCcw className="airDropWethReFreshTimeStamp" onClick={changeTimeStampState} />
                            {/* </a> */}
                        </div>
                        <p></p>
                    </div>
                    <div className="airDropWethPriceSection">
                        <a>1 WETH = {getLatestPrice} USD</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default WethAirDropSection;
