import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../SprStakingPage/Loading";
import { networksAction } from "../../../../redux/actions/networksAction";
import { munieDepositListAction } from "../../../../redux/actions/munieStakingActions/munieDepositListAction";
import { munieSingleApproveStateAction } from "../../../../redux/actions/munieStakingActions/munieSingleApproveStateAction";
import { HanLogo } from "../../../../assets/_index";

const BeforeMunieDepositSection = () => {
    const dispatch = useDispatch();
    const [checkChainId, setCheckChainId] = useState("");
    const [stakingMunieTokenId, setStakingMunieTokenId] = useState(1);

    const { account } = useSelector((state) => state.account);
    const { munieAmountStaked } = useSelector((state) => state.munieStakingView);

    const changeEthereumNetWork = () => {
        dispatch(networksAction.changeEthereumNetWorkAct());
    };

    // add to Reward Token
    const addRewardToken = async () => {
        const tokenAddress = "0xC7483FbDB5c03E785617a638E0f22a08da10084B";
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

    useEffect(() => {
        dispatch(munieDepositListAction.munieDepositListAct(account));
        dispatch(munieSingleApproveStateAction.munieSingleApproveStateAct(account, Number(stakingMunieTokenId)));
    }, [account, Number(stakingMunieTokenId)]);

    return (
        <div>
            <div className="stakedMunieCanAmountSection">
                <p>STAKED : {munieAmountStaked}</p>
            </div>
            {munieAmountStaked ? (
                <div className="munieStakingDepositContainer">
                    <div className="munieStakingCantChoiceImgContainer">
                        <div className="munieStakingCantChoiceImgSection">
                            <a className="cantStakingMunieBtn" disabled={true}>
                                INSUFFICIENT BALANCE
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="munieStakingDepositContainer">
                    <div className="munieStakingCantChoiceImgContainer">
                        <Loading />
                    </div>
                </div>
            )}
            <div className="logoContainer">
                <img
                    src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
                    onClick={changeEthereumNetWork}
                    className="opIcon"
                    alt="EthereumIcon"
                />
                <img src={HanLogo} onClick={addRewardToken} className="hanIcon" alt="HanIcon" />
            </div>
        </div>
    );
};

export default BeforeMunieDepositSection;
