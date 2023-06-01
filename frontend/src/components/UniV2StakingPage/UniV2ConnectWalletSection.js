import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UniV2ConnectWalletSection.scss";
import { networksAction } from "../../redux/actions/networksAction";
import { connectAccount } from "../../redux/actions/connectAccount";
import { FcCancel } from "react-icons/fc";

const UniV2ConnectWalletSection = () => {
    const dispatch = useDispatch();

    const [checkChainId, setCheckChainId] = useState("");
    const { account } = useSelector((state) => state.account);

    const changeEthereumNetWork = () => {
        dispatch(networksAction.changeEthereumNetWorkAct());
    };

    const setup = () => {
        dispatch(connectAccount.getAccount());
    };

    const handleConnectWallet = async () => {
        if (window.ethereum === undefined) {
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn");
        } else {
            setup();
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
            {account === "" ? (
                <div className="connect-UniV2-WalletSection">
                    <a className="social-button button--social-login button--google" href="#">
                        <img
                            width="20px"
                            height="20px"
                            src="https://static.coingecko.com/s/metamask_fox-99d631a5c38b5b392fdb2edd238a525ba0657bc9ce045077c4bae090cfc5b90a.svg"
                            className="social-icon fa fa-google"
                            alt="MetamaskIcon"
                        ></img>
                        <p onClick={handleConnectWallet}>Connect Wallet</p>
                    </a>
                </div>
            ) : checkChainId === "0x1" ? (
                <div className="connect-UniV2-ComWalletSection">
                    <a className="social-button button--social-login button--google" href="#">
                        <img
                            width="20px"
                            height="20px"
                            src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
                            className="social-icon fa fa-google"
                            alt="EthereumIcon"
                        ></img>
                        {account.substr(0, 6)}...{account.slice(-6)}
                    </a>
                </div>
            ) : (
                <div className="cantConnect-UniV2-WalletSection">
                    <p className="cantConnet-UniV2-Txt">Please swith to mainnet</p>
                    <a className="social-button button--social-login button--google" href="#" onClick={changeEthereumNetWork}>
                        <FcCancel className="social-icon fa fa-google" />
                        {account.substr(0, 6)}...{account.slice(-6)}
                    </a>
                </div>
            )}
        </div>
    );
};

export default UniV2ConnectWalletSection;
