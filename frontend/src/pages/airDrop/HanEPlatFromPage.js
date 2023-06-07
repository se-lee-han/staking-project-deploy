import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HanLogo } from "../../assets/_index";
import "./HanEPlatFromPage.scss";
import { connectAccount } from "../../redux/actions/connectAccount";
import {
    AirDropConnectWalletSection,
    AirDropFooter,
    HanAirDropSection,
    L1BridgeL2DepositSection,
    L2MintSection,
    L2RewardSection,
    L2SwapSection,
    L2WithdrawSection,
    MunieAirDropSection,
    MunieConnectWalletSection,
    MunieDepositSection,
    MunieRewardSection,
    MunieViewAdsSection,
    MunieWithdrawSection,
    MusiAirDropSection,
    USDCAirDropSection,
    MusiCompensationSection,
    MusiConnectWalletSection,
    MusiFooter,
    PrivateUniDepositSection,
    PrivateUniWithdrawSection,
    PrivateUniRewardSection,
    PrivateUniV2TopSection,
    PrivateUniConnectWalletSection,
    Rakis6DepositSection,
    Rakis6RewardSection,
    Rakis6WithdrawSection,
    SignInUpTopSection,
    UniV2ConnectWalletSection,
    UniV2DepositSection,
    UniV2RewardSection,
    UniV2WithdrawSection,
    WethAirDropSection,
} from "../../components/E-FlatFrom/index";

import { networksAction } from "../../redux/actions/networksAction";

const HanEPlatFromPage = () => {
    const dispatch = useDispatch();
    const [checkChainId, setCheckChainId] = useState("");
    const [changeMainTab, setChangeMainTab] = useState(1);

    const mainTabArr = ["AirDrop", "UNI-V2", "HANeP", "MusiKhan", "Rakis6", "Munie"];

    const musiL2TabArr = ["DEPOSIT", "REWARDS", "WITHDRAW", "MINT", "SWAP"];

    const musiOtherNetTabArr = ["DEPOSIT", "REWARDS", "WITHDRAW", "BRIDGE"];

    const munieTabArr = ["DEPOSIT", "REWARD", "WITHDRAW", "VIEW ADS"];

    const rakis6TabArr = ["DEPOSIT", "REWARD", "WITHDRAW"];

    const setup = () => {
        dispatch(connectAccount.getAccount());
    };

    const networkChanged = (chainId) => {
        console.log({ chainId });
    };

    const mainTabChange = () => {
        setChangeMainTab(changeMainTab + 1);
        console.log("123142");
        dispatch({ type: "MAIN_TAB_CHANGE", payload: changeMainTab });
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

    useEffect(() => {
        // dispatch(musikhanViewAction.getL1TokenListAct());
        dispatch(networksAction.networksAct());
    }, []);
    return (
        <div className="platFromPageMainContainer">
            <div className="platFromPageNewChange">
                This is the formally Staking. Old Version is live at <a href="/hanep/old">staking.khans.io/hanep/old</a>
            </div>
            <div className="platFromPageLogoContainer">
                <img className="platFromTopLogo" src={HanLogo} alt="HanLogo" />
                <a>HAN e-Platform</a>
            </div>
            <Tabs forceRenderTabPanel defaultIndex={1} className="mainTabs">
                <SignInUpTopSection />
                <TabList className="mainTabList">
                    {/* <Tab>AirDrop</Tab>
                    <Tab>MusiKhan</Tab>
                    <Tab>Rakis6</Tab>
                    <Tab>Munie</Tab> */}
                    {mainTabArr?.map((item, index) => {
                        return (
                            <Tab key={index} onClick={mainTabChange}>
                                {item}
                            </Tab>
                        );
                    })}
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel className="subTabs">
                        <AirDropConnectWalletSection />
                        <TabList className="subTabList">{/* <Tab>Tab1-1</Tab> */}</TabList>
                        {/* AirDrop Section */}
                        <TabPanel>
                            <div className="airDropTabContainer">
                                <div className="airDropTabSection">
                                    <HanAirDropSection />

                                    <MusiAirDropSection />

                                    <USDCAirDropSection />
                                    {/* <WethAirDropSection /> */}

                                    <MunieAirDropSection />
                                </div>
                            </div>
                            <hr className="airDropTabHrSection" />
                            <AirDropFooter />
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    {/* UNI-V2 */}
                    <Tabs forceRenderTabPanel className="subTabs">
                        {/* <PrivateUniV2TopSection /> */}
                        <PrivateUniConnectWalletSection />
                        <TabList className="subTabList">
                            {rakis6TabArr?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>;
                            })}
                        </TabList>
                        <TabPanel>
                            <PrivateUniDepositSection />
                        </TabPanel>
                        <TabPanel>
                            <PrivateUniRewardSection />
                        </TabPanel>
                        <TabPanel>
                            <PrivateUniWithdrawSection />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    {/* HanEp */}
                    <Tabs forceRenderTabPanel className="subTabs">
                        <UniV2ConnectWalletSection />
                        <TabList className="subTabList">
                            {rakis6TabArr?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>;
                            })}
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
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel className="subTabs">
                        <MusiCompensationSection />
                        <MusiConnectWalletSection />
                        {checkChainId === "0x1" ? (
                            // Ethereum
                            <TabList className="subTabList"></TabList>
                        ) : checkChainId === "Oxa" ? (
                            // Optimsim
                            <TabList className="subTabList">
                                {musiL2TabArr?.map((item, index) => {
                                    return <Tab key={index}>{item}</Tab>;
                                })}
                            </TabList>
                        ) : (
                            // Others NetWork
                            <TabList className="subTabList">
                                {musiOtherNetTabArr?.map((item, index) => {
                                    return <Tab key={index}> {item}</Tab>;
                                })}
                            </TabList>
                        )}
                        <TabPanel>
                            {/* Musikhan L1Bridge, L2DePosit Section */}
                            <L1BridgeL2DepositSection />
                        </TabPanel>
                        <TabPanel>
                            {/* Musikhan L1EthX L2Reward Section*/}
                            <L2RewardSection />
                        </TabPanel>
                        <TabPanel>
                            {/* Musikhan L1EthX L2Withdraw Section */}
                            <L2WithdrawSection />
                        </TabPanel>
                        <TabPanel>
                            {/* Musikhan L2Brdige Section */}
                            <L2MintSection />
                        </TabPanel>
                        <TabPanel>
                            {/* Musikhan L2Swap Section */}
                            <L2SwapSection />
                        </TabPanel>
                        <MusiFooter />
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel className="subTabs">
                        <AirDropConnectWalletSection />
                        <TabList className="subTabList">
                            {rakis6TabArr?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>;
                            })}
                        </TabList>
                        <TabPanel>
                            <Rakis6DepositSection />
                        </TabPanel>
                        <TabPanel>
                            <Rakis6RewardSection />
                        </TabPanel>
                        <TabPanel>
                            <Rakis6WithdrawSection />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel className="subTabs">
                        <MunieConnectWalletSection />
                        <TabList className="subTabList">
                            {munieTabArr?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>;
                            })}
                        </TabList>
                        <TabPanel>
                            <MunieDepositSection />
                        </TabPanel>
                        <TabPanel>
                            <MunieRewardSection />
                        </TabPanel>
                        <TabPanel>
                            <MunieWithdrawSection />
                        </TabPanel>
                        <TabPanel>
                            <MunieViewAdsSection />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default HanEPlatFromPage;
