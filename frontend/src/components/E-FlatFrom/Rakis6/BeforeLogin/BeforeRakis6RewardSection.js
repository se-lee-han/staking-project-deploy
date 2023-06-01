import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FiRefreshCcw } from "react-icons/fi";
import { ArrakisBlackIcon, HanLogo, OptimismRedLogo } from "../../../../assets/_index";
import Swal from "sweetalert2";

const BeforeRakis6RewardSection = () => {
    const [checkChainId, setCheckChainId] = useState("");

    const { canStakedQuatoAmount, HanQuantityLpQuantityPerYear1HanValue } = useSelector((state) => state.rakis6AirDropView);
    const { rakis6UnClaimedRewardToEth, rakis6TotalRewardReceivedToEth, rakis6TotalRewardAmount } = useSelector((state) => state.rakis6AirDropReward);
    const { totalRewardView } = useSelector((state) => state.rakis6AirDropTotalRewardView);

    const changeOpNetwork = async () => {
        try {
            await window.ethereum?.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0xa" }],
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    Swal.fire({
                        title: "Switch Network",
                        html: "Project requires that you switch your wallet to the Optimism network to continue.",
                        showConfirmButton: false,
                    });
                } catch (addError) {
                    console.log(addError);
                }
            }
        }
    };

    // add to LP token
    const addStakingToken = async () => {
        const tokenAddress = "0x3fa8CEE6795220Ac25DD35D4d39ec306a3e4fb3f";
        const tokenSymbol = "LP";
        const tokenDecimals = 18;
        const tokenImage = "https://github.com/sieun95/develop_note/blob/main/Arrakis%20Icon%20(monochrome).png?raw=true";

        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await window.ethereum?.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20", // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            });

            if (wasAdded) {
                console.log("Thanks for your interest!");
            } else {
                console.log("Your loss!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    // add to Reward Token
    const addRewardToken = async () => {
        const tokenAddress = "0x50Bce64397C75488465253c0A034b8097FeA6578";
        const tokenSymbol = "HAN";
        const tokenDecimals = 18;
        const tokenImage = "https://raw.githubusercontent.com/hanchain-paykhan/hanchain/3058eecc5d26f980db884f1318da6c4de18a7aea/logo/logo.svg";

        try {
            const wasAdded = await window.ethereum?.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            });

            if (wasAdded) {
                console.log("Thanks for your interest!");
            } else {
                console.log("Your loss!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (window.ethereum?.chainId === "0x1") {
            setCheckChainId("0x1");
        }
        if (window.ethereum?.chainId === "0xa") {
            setCheckChainId("Oxa");
        }
    }, [window.ethereum?.chainId]);
    return (
        <div>
            <>
                <div className="rakis6-AirDrop-Reward-Quaota-Section">
                    <p>STAKED : {rakis6TotalRewardAmount}</p>
                </div>
                <div className="rakis6-AirDrop-Reward-StakeAmount-Section">
                    <p>Available Quota : {canStakedQuatoAmount}</p>
                </div>
                <div className="rakis6-AirDrop-Reward-APR-Container">
                    <div className="rakis6-AirDrop-Reward-APR-Title">
                        <a>APR</a>
                    </div>
                    <div className="rakis6-AirDrop-Reward-APR-Info">
                        <a>{HanQuantityLpQuantityPerYear1HanValue}%</a>
                    </div>
                </div>
                <div className="rakis6-AirDrop-Reward-EstSection">
                    <p>
                        Estimated Interest : {totalRewardView}
                        <FiRefreshCcw className="rakis6-AirDrop-Reward-RefreshIcon" />
                        HAN
                    </p>
                </div>
                <div className="rakis6-AirDrop-Reward-AccSection">
                    <p>Accumulated Interest : {rakis6UnClaimedRewardToEth} HAN</p>
                </div>
                <div className="rakis6-AirDrop-Reward-InterSection">
                    <p>Rewarded Interest : {rakis6TotalRewardReceivedToEth} HAN </p>
                    {/* <p>Rewarded Interest : {rakis6TotalRewardReceived}HAN </p> */}
                </div>
                <div className="rakis6-AirDrop-Rewards-ClaimBtnSection">
                    <button className="rakis6-AirDrop-Reward-CantBtn" disabled={true}>
                        NOTHING TO CLAIM
                    </button>
                </div>
            </>
            <div className="logoContainer">
                <img src={OptimismRedLogo} onClick={changeOpNetwork} className="opIcon" alt="OptimismIcon" />
                {/* <img src={OptimismRedLogo} onClick={() => handleNetworkSwitch("optimism")} className="opIcon" /> */}
                <img src={ArrakisBlackIcon} onClick={addStakingToken} className="arrakisIcon" alt="ArrakisIcon" />
                <img src={HanLogo} onClick={addRewardToken} className="hanIcon" alt="HanIcon" />
            </div>
        </div>
    );
};

export default BeforeRakis6RewardSection;
