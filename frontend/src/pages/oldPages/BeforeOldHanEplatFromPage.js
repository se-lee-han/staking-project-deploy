import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connectAccount } from "../../redux/actions/connectAccount";
import "./OldHanEPlatFromPage.scss";
import {
    MusiCompensationSection,
    MusiConnectWalletSection,
    BeforeL1BridgeL2DepositSection,
    BeforeL2RewardSection,
    BeforeWithdrawSection,
    BeforeL2MintSection,
    BeforeL2SwapSection,
    MusiFooter,
    MunieConnectWalletSection,
    BeforeMunieDepositSection,
    BeforeMunieRewardSection,
    BeforeMunieWithdrawSection,
    BeforeMunieViewAdsSection,
    SignInUpTopSection,
} from "../../components/E-FlatFrom";
import { HanLogo } from "../../assets/_index";
import {
    BeforeOldMunieDepositSection,
    BeforeOldMunieRewardSection,
    BeforeOldSprDepositSection,
    BeforeOldSprRewardSection,
    BeforeOldSprViewAsdSection,
    BeforeOldSprWithdrawSection,
    OldSignInUpTopSection,
} from "../../components/OldE-FlatFrom";
import { SprConnectWalletSection, SprDepositSection, SprRewardSection, SprViewAdsSection, SprWithdrawSection } from "../../components";

const BeforeOldHanEplatFromPage = () => {
    const dispatch = useDispatch();
    const [checkChainId, setCheckChainId] = useState("");
    const [stakingMunieTokenId, setStakingMunieTokenId] = useState(1);

    const { account } = useSelector((state) => state.account);

    const mainTabArr = ["Munie", "Sheepoori"];

    const musiL2TabArr = ["DEPOSIT", "REWARDS", "WITHDRAW", "MINT", "SWAP"];

    const musiOtherNetTabArr = ["DEPOSIT", "REWARDS", "WITHDRAW", "BRIDGE"];

    const munieTabArr = ["DEPOSIT", "REWARD", "WITHDRAW", "VIEW ADS"];

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
        <div className="platFromPageMainContainer">
            <div className="platFromPageNewChange">
                This is the previous Staking. New version is live at <a href="/hanep">staking.khans.io/hanep</a>
            </div>
            <div className="platFromPageLogoContainer">
                <img className="platFromTopLogo" src={HanLogo} alt="HanLogo" />
                <a>HAN e-Platform</a>
            </div>
            <Tabs forceRenderTabPanel defaultIndex={1} className="mainTabs">
                <OldSignInUpTopSection />
                <TabList className="mainTabList">
                    {mainTabArr?.map((item, index) => {
                        return <Tab key={index}>{item}</Tab>;
                    })}
                </TabList>

                <TabPanel>
                    <Tabs forceRenderTabPanel className="subTabs">
                        <MunieConnectWalletSection />
                        <TabList className="subTabList">
                            {munieTabArr?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>;
                            })}
                        </TabList>
                        <TabPanel>
                            <BeforeOldMunieDepositSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeOldMunieRewardSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeMunieWithdrawSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeMunieViewAdsSection />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel className="subTabs">
                        <SprConnectWalletSection />
                        <TabList className="subTabList">
                            {munieTabArr?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>;
                            })}
                        </TabList>
                        <TabPanel>
                            <BeforeOldSprDepositSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeOldSprRewardSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeOldSprWithdrawSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeOldSprViewAsdSection />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BeforeOldHanEplatFromPage;
