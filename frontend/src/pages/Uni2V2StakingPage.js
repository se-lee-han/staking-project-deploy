import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Uni2V2StakingPage.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connectAccount } from "../redux/actions/connectAccount";
import { networksAction } from "../redux/actions/networksAction";
import { UniV2ConnectWalletSection, UniV2DepositSection, UniV2TopSection, UniV2RewardSection, UniV2WithdrawSection } from "../components";

const Uni2V2StakingPage = () => {
    const dispatch = useDispatch();

    const [checkChainId, setCheckChainId] = useState("");
    const setup = () => {
        dispatch(connectAccount.getAccount());
    };

    const networkChanged = (chainId) => {
        console.log({ chainId });
    };

    useEffect(() => {
        window.ethereum?.on("chainChanged", networkChanged);

        return () => {
            window.ethereum?.removeListener("chainChanged", networkChanged);
        };
    }, []);

    useEffect(() => {
        setup();
        window.ethereum?.on("accountsChanged", () => {
            setup();
        });
    }, []);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum?.on("chainChanged", () => {
                window.location.reload();
            });
            window.ethereum?.on("accountsChanged", () => {
                window.location.reload();
                setup();
            });
        }
    }, []);

    useEffect(() => {
        // dispatch(musikhanViewAction.getL1TokenListAct());
        dispatch(networksAction.networksAct());
    }, []);

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
        <div className="hanChainStakingMainContainer">
            <UniV2TopSection />
            <Tabs className="Tabs">
                <UniV2ConnectWalletSection />
                <TabList>
                    <Tab>DEPOSIT</Tab>
                    <Tab>REWARDS</Tab>
                    <Tab>WITHDRAW</Tab>
                </TabList>
                <TabPanel>
                    <UniV2DepositSection />
                </TabPanel>
                <TabPanel>
                    <UniV2RewardSection />
                </TabPanel>
                <TabPanel>
                    <UniV2WithdrawSection />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Uni2V2StakingPage;
