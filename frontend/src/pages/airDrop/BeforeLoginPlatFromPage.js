import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HanLogo } from "../../assets/_index";
import "./HanEPlatFromPage.scss";
import { connectAccount } from "../../redux/actions/connectAccount";
import {
    AirDropConnectWalletSection,
    AirDropFooter,
    BeforeHanAirDropSection,
    BeforeL1BridgeL2DepositSection,
    BeforeL2MintSection,
    BeforeL2RewardSection,
    BeforeL2SwapSection,
    BeforePrivateUniDepositSection ,
    BeforePrivateUniRewardSection ,
    BeforePrivateUniWithdrawSection,
    BeforeMunieAirDropSection,
    BeforeUSDCAirDropSection,
    BeforeMunieDepositSection,
    BeforeMunieRewardSection,
    BeforeMunieViewAdsSection,
    BeforeMunieWithdrawSection,
    BeforeMusiAirDropSection,
    BeforeRakis6DepositSection,
    BeforeRakis6RewardSection,
    BeforeRakis6WithdrawSection,
    BeforeUniV2DepositSection,
    BeforeUniV2RewardSection,
    BeforeUniV2WithdrawSection,
    BeforeWethAirDropSection,
    BeforeWithdrawSection,
    PrivateUniConnectWalletSection,
    MunieConnectWalletSection,
    MusiCompensationSection,
    MusiConnectWalletSection,
    MusiFooter,
    SignInUpTopSection,
    UniV2ConnectWalletSection,
} from "../../components/E-FlatFrom/index";
import { L2BridgeL1TokenInfoAction } from "../../redux/actions/musikhanActions/L2Actions/L2BridgeL1TokenInfoAction";
import { L2RewardTotalAction } from "../../redux/actions/musikhanActions/L2Actions/L2RewardTotalAction";
import { L2RewardViewAction } from "../../redux/actions/musikhanActions/L2Actions/L2RewardViewAction";
import { L2RewardResultAction } from "../../redux/actions/musikhanActions/L2Actions/L2RewardResultAction";
import { musiAirDropTimeStampAction } from "../../redux/actions/airdropActions/musiActions/musiAirDropTimeStampAction";
import { hanAirDropTimeStampAction } from "../../redux/actions/airdropActions/hanActions/hanAirDropTimeStampAction";
import { musiAirDropBackDataInfoAction } from "../../redux/actions/airdropActions/musiActions/musiAirDropBackDataInfoAction";
import { airDropPriceAction } from "../../redux/actions/airdropActions/wethActions/airDropPriceAction";
import { airDropViewAction } from "../../redux/actions/airdropActions/wethActions/airDropViewAction";
import { airDropTimeStampAction } from "../../redux/actions/airdropActions/wethActions/airDropTimeStampAction";
import { hanAirDropViewAction } from "../../redux/actions/airdropActions/hanActions/hanAirDropViewAction";
import { airDropClaimedAction } from "../../redux/actions/airdropActions/wethActions/airDropClaimedAction";
import { hanAirDropClaimedAction } from "../../redux/actions/airdropActions/hanActions/hanAirDropClaimedAction";
import { rakis6AirDropViewAction } from "../../redux/actions/airdropActions/rakis6Actions/rakis6AirDropViewAction";
import { tokenListViewAction } from "../../redux/actions/airdropActions/rakis6Actions/tokenListViewAction";
import { rakis6AirDropRewardViewAcion } from "../../redux/actions/airdropActions/rakis6Actions/rakis6AirDropRewardViewAction";
import { rakis6AirDropAprAction } from "../../redux/actions/airdropActions/rakis6Actions/rakis6AirDropAprAction";
import { rakis6TotalRewardViewAction } from "../../redux/actions/airdropActions/rakis6Actions/rakis6TotalRewardViewAction";
import { munieStakingViewAction } from "../../redux/actions/munieStakingActions/munieStakingViewAction";
import { munieDepositListAction } from "../../redux/actions/munieStakingActions/munieDepositListAction";
import { munieWithdrawListAction } from "../../redux/actions/munieStakingActions/munieWithdrawListAction";
import { munieStakingResultViewAction } from "../../redux/actions/munieStakingActions/munieStakingResultViewAction";
import { allMunieStakedViewAction } from "../../redux/actions/munieStakingActions/allMunieStakedViewAction";
import { munieSingleApproveStateAction } from "../../redux/actions/munieStakingActions/munieSingleApproveStateAction";
import { networksAction } from "../../redux/actions/networksAction";

const BeforeLoginPlatFromPage = () => {
    const dispatch = useDispatch();
    const [checkChainId, setCheckChainId] = useState("");
    const [stakingMunieTokenId, setStakingMunieTokenId] = useState(1);

    const { account } = useSelector((state) => state.account);

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

    useEffect(() => {
        dispatch(L2BridgeL1TokenInfoAction.L2BridgeL1TokenInfoAct(account));
        dispatch(L2RewardTotalAction.L2RewardTotalAct(account));
    }, [account]);

    useEffect(() => {
        dispatch(L2RewardViewAction.L2RewardViewAct());
        dispatch(L2RewardResultAction.L2RewardResultAct());
    }, []);

    useEffect(() => {
        dispatch(airDropPriceAction.airDropPriceAct(account));
        dispatch(airDropViewAction.airDropViewAct(account));
        dispatch(airDropTimeStampAction.airDropTimeStampAct());
        dispatch(hanAirDropViewAction.hanAirDropViewAct(account));
    }, [account]);

    useEffect(() => {
        dispatch(airDropClaimedAction.airDropClaimedAct(account));
        dispatch(hanAirDropClaimedAction.hanAirDropClaimedAct(account));
    }, [account]);

    useEffect(() => {
        dispatch(musiAirDropTimeStampAction.musiAirDropTimeStampAct());
        dispatch(hanAirDropTimeStampAction.hanAirDropTimeStampAct());
    }, []);

    useEffect(() => {
        dispatch(musiAirDropBackDataInfoAction.musiAirDropBackDataInfoAct(account));
    }, [account]);

    // Rakis6 UseEffect
    useEffect(() => {
        dispatch(rakis6AirDropViewAction.rakis6AirDropViewAct(account));
        dispatch(tokenListViewAction.tokenListViewAct(account));
        dispatch(rakis6AirDropRewardViewAcion.rakis6AirDropRewardViewAct(account));
        dispatch(rakis6TotalRewardViewAction.rakis6TotalRewardViewAct(account));
        dispatch(rakis6AirDropAprAction.rakis6AirDropAprAct());
    }, [account]);

    // //Munie UseEffect
    useEffect(() => {
        dispatch(munieStakingViewAction.munieStakingViewAct(account));
        dispatch(munieDepositListAction.munieDepositListAct(account));
        dispatch(munieWithdrawListAction.munieWithdrawListAct(account));
        dispatch(munieStakingResultViewAction.munieStakingResultViewAct(account));
        dispatch(allMunieStakedViewAction.allMunieStakedViewAct());
        dispatch(munieSingleApproveStateAction.munieSingleApproveStateAct(account, Number(stakingMunieTokenId)));
    }, [account, Number(stakingMunieTokenId)]);

    return (
        <div className="platFromPageMainContainer">
            <div className="platFromPageLogoContainer">
                <img className="platFromTopLogo" src={HanLogo} alt="HanLogo" />
                <a>HAN e-Platform</a>
            </div>
            <Tabs forceRenderTabPanel defaultIndex={1} className="mainTabs">
                <SignInUpTopSection />
                <TabList className="mainTabList">
                    {mainTabArr?.map((item, index) => {
                        return <Tab key={index}>{item}</Tab>;
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
                                    <BeforeHanAirDropSection />

                                    <BeforeMusiAirDropSection />

                                    <BeforeUSDCAirDropSection />
                                    {/* <BeforeWethAirDropSection /> */}

                                    <BeforeMunieAirDropSection />
                                </div>
                            </div>
                            <hr className="airDropTabHrSection" />
                            <AirDropFooter />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    {/* HanEp */}
                    <Tabs forceRenderTabPanel className="subTabs">
                        <PrivateUniConnectWalletSection />
                        <TabList className="subTabList">
                            {rakis6TabArr?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>;
                            })}
                        </TabList>
                        <TabPanel>
                            <BeforePrivateUniDepositSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforePrivateUniRewardSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforePrivateUniWithdrawSection />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    {/* UNI-V2 */}
                    <Tabs forceRenderTabPanel className="subTabs">
                        <UniV2ConnectWalletSection />
                        <TabList className="subTabList">
                            {rakis6TabArr?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>;
                            })}
                        </TabList>
                        <TabPanel>
                            <BeforeUniV2DepositSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeUniV2RewardSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeUniV2WithdrawSection />
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
                        {/* <TabList className="subTabList">
                            <Tab>DEPOSIT</Tab>
                            <Tab>REWARD</Tab>
                            <Tab>WITHDRAW</Tab>
                            <Tab>BRIDGE</Tab>
                            <Tab>SWAP</Tab>
                        </TabList> */}
                        <TabPanel>
                            {/* Musikhan L1Bridge, L2DePosit Section */}
                            <BeforeL1BridgeL2DepositSection />
                        </TabPanel>
                        <TabPanel>
                            {/* Musikhan L1EthX L2Reward Section*/}
                            <BeforeL2RewardSection />
                        </TabPanel>
                        <TabPanel>
                            {/* Musikhan L1EthX L2Withdraw Section */}
                            <BeforeWithdrawSection />
                        </TabPanel>
                        <TabPanel>
                            {/* Musikhan L2Brdige Section */}
                            <BeforeL2MintSection />
                        </TabPanel>
                        <TabPanel>
                            {/* Musikhan L2Swap Section */}
                            <BeforeL2SwapSection />
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
                            <BeforeRakis6DepositSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeRakis6RewardSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeRakis6WithdrawSection />
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
                            <BeforeMunieDepositSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeMunieRewardSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeMunieWithdrawSection />
                        </TabPanel>
                        <TabPanel>
                            <BeforeMunieViewAdsSection />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BeforeLoginPlatFromPage;
