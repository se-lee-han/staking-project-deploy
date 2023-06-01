import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { networksAction } from "../../../../redux/actions/networksAction";
import { USDCLogo } from "../../../../assets/_index";
import { FiRefreshCcw } from "react-icons/fi";

const BeforeUniV2RewardSection = () => {
    const dispatch = useDispatch();
    const [checkChainId, setCheckChainId] = useState("");
    const { account } = useSelector((state) => state.account);

    const changeEthereumNetWork = () => {
        dispatch(networksAction.changeEthereumNetWorkAct());
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
        if (window.ethereum?.chainId === "0x5") {
            setCheckChainId("0x5");
        }
        if (window.ethereum?.chainId === "0x1a4") {
            setCheckChainId("0x1a4");
        }
    }, [window.ethereum?.chainId]);
    return (
        <div>
            <>
                <div className="eplat-UniV2-Reward-Quaota-Section">
                    <p>TOTAL STAKED : </p>
                </div>
                <div className="eplat-UniV2-Reward-StakeAmount-Section">
                    <p>STAKED : </p>
                </div>
                <div className="eplat-UniV2-Deposit-APR-Container">
                    <div className="eplat-UniV2-Deposit-APR-Title">
                        <a>APR</a>
                    </div>
                    <div className="eplat-UniV2-Deposit-APR-Info">
                        <a>%</a>
                    </div>
                </div>
                <div className="eplat-UniV2-Reward-EstSection">
                    <p>
                        Estimated Interest :
                        <FiRefreshCcw className="eplat-UniV2-Reward-RefreshIcon" />
                        HAN
                    </p>
                </div>
                {/* <div className="eplat-UniV2-Reward-AccSection">
<p>Accumulated Interest : {hanRewardPerSecondView} HAN</p>
</div> */}
                <div className="eplat-UniV2-Reward-InterSection">
                    <p>Rewarded Interest : HAN </p>
                </div>

                {/* 리워드 안될때 상태 추가 */}
                {/* {hanRewardPerSecondView === "0" ? (
    <div className="eplat-UniV2-Rewards-ClaimBtnSection">
        <button className="eplat-UniV2-Reward-CantBtn" disabled={true}>
            NOTHING TO CLAIM
        </button>
    </div>
) : ( */}
                <div className="eplat-UniV2-Rewards-ClaimBtnSection">
                    <button className="eplat-UniV2-Reward-CantBtn" disabled={true}>
                        COMING SOON
                    </button>
                </div>
                {/* )} */}
            </>
            <div className="logoContainer">
                <img
                    src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
                    onClick={changeEthereumNetWork}
                    className="opIcon"
                    alt="EthereumIcon"
                />
                <img src={USDCLogo} onClick={addRewardToken} className="hanIcon" alt="HanIcon" />
            </div>
        </div>
    );
};

export default BeforeUniV2RewardSection;
