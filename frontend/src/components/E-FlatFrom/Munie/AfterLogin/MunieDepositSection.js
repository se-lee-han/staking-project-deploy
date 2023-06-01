import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MunieDepositSection.scss";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { MunieStakingAddress } from "../../../../config/MunieConfig";
// import { MunieTokenContract, MunieStakingAddress, MunieTokenAddress } from "../../../../config/MunieConfigTest";
import { munieSingleApproveAction } from "../../../../redux/actions/munieStakingActions/munieSingleApproveAction";
import { munieStakingAction } from "../../../../redux/actions/munieStakingActions/munieStakingAction";
import Loading from "../../../SprStakingPage/Loading";
import Carousel from "react-multi-carousel";
import { networksAction } from "../../../../redux/actions/networksAction";
import { munieDepositListAction } from "../../../../redux/actions/munieStakingActions/munieDepositListAction";
import { munieSingleApproveStateAction } from "../../../../redux/actions/munieStakingActions/munieSingleApproveStateAction";
import { HanLogo } from "../../../../assets/_index";

const MunieDepositSection = () => {
    const dispatch = useDispatch();
    const [checkChainId, setCheckChainId] = useState("");
    const [stakingMunieTokenId, setStakingMunieTokenId] = useState(1);

    const { account } = useSelector((state) => state.account);
    const { getMyMunieTokenIds, getMunieSingleApproved, depositStakedAmount, successMunieApprove } = useSelector((state) => state.munieStakingView);

    const { mainTabArr } = useSelector((state) => state.networks);
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

    // const munieMint = async () => {
    //     const munieMint = await MunieTokenContract.methods.Mint().send({ from: account });
    //     console.log(munieMint);
    // };

    // const munieTest = async () => {
    //     const getTotalMunieTokenIdsApi = await MunieTokenContract.methods.getTotalTokenIds(account).call();
    //     console.log(getTotalMunieTokenIdsApi);
    // };

    const munieSingleApprove = () => {
        dispatch(munieSingleApproveAction.munieSingleApproveAct(Number(stakingMunieTokenId), account));
    };

    const munieStaking = () => {
        dispatch(munieStakingAction.munieStakingAct(Number(stakingMunieTokenId), account));
    };

    const stakingMunieCheckOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName("munieStakingId");
        // console.log(checkboxes);
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false;
            } else {
                setStakingMunieTokenId(checkThis.value);
                // console.log(typeof Number(checkThis.value));
            }
        }
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            // partialVisibilityGutter: 96,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const {
            carouselState: { currentSlide },
        } = rest;
        return (
            <div className="carousel-button-group">
                <SlArrowRight id="sliderRightBtn" onClick={() => next()} />
                <SlArrowLeft id="sliderLeftBtn" className={currentSlide === 0 ? "disable" : ""} onClick={() => previous()} />
                {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
            </div>
        );
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
        if (account) {
            dispatch(munieDepositListAction.munieDepositListAct(account));
        }
    }, [mainTabArr]);
    // useEffect(() => {
    //     if (account) {
    //         dispatch(munieDepositListAction.munieDepositListAct(account));
    //         console.log("123412");
    //         console.log("Deposit", getMyMunieTokenIds);
    //         console.log("DepositAmount", depositStakedAmount);
    //     }
    // }, [account, dispatch]);

    useEffect(() => {
        dispatch(munieSingleApproveStateAction.munieSingleApproveStateAct(Number(stakingMunieTokenId), account));
    }, [Number(stakingMunieTokenId), account]);

    // useEffect(() => {
    //     if (account && stakingMunieTokenId) {
    //         dispatch(munieSingleApproveStateAction.munieSingleApproveStateAct(account, Number(stakingMunieTokenId)));
    //     }
    // }, [account, Number(stakingMunieTokenId), dispatch]);

    // console.log("test1");

    return (
        <div>
            <div className="stakingMunieAmountContainer">
                <div className="stakingMunieAmountTitle">
                    <div className="stakingMunieAmountTxt">
                        <a>0.000001157407407407 HAN</a>
                    </div>

                    {/* <div className="tooltip-container">
                            <i className="info-icon material-icons">
                                <HelpIcon />
                            </i>
                            <div className="tooltip-content">
                                <span>
                                    The right to possess digital content forever and get yourself a Sheepoori card -Ms. Caring one of three sheep siblings
                                    characters from Sewoori Union for AdKhan: Advertising Platform
                                </span>
                                <span className="align-right">
                                    {" "}
                                    <a href="https://medium.com/@HanIdentity/as-the-second-staking-of-the-hanchain-project-e29da8da25e3" target="_blank">
                                        Read More
                                    </a>
                                </span>
                            </div>
                        </div> */}
                </div>
                <div className="stakingMunieAmountNum">
                    <a>for each NFT per second</a>
                </div>
            </div>
            <div className="stakedMunieCanAmountSection">
                <p>STAKED : {depositStakedAmount}</p>
            </div>
            {getMyMunieTokenIds !== null ? (
                getMyMunieTokenIds.length === 0 ? (
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
                        <div className="munieStakingBeforeChoiceImgContainer">
                            {getMyMunieTokenIds !== "" ? (
                                <Carousel
                                    responsive={responsive}
                                    arrows={false}
                                    className="mainUnSlider"
                                    partialVisible
                                    customButtonGroup={<ButtonGroup />}
                                    renderButtonGroupOutside
                                >
                                    {getMyMunieTokenIds.map((item, index) => {
                                        return (
                                            <div className="munieStakingSlider" key={index}>
                                                <div className="munieStakingImgContainer">
                                                    <div
                                                        className="munieStakingImgCard"
                                                        style={{
                                                            backgroundImage: `url(https://gateway.pinata.cloud/ipfs/${item.nft.image})`,
                                                        }}
                                                    >
                                                        <input
                                                            className="imgCheckBox"
                                                            name="munieStakingId"
                                                            type="radio"
                                                            // key={item.id}
                                                            value={item.tokenId}
                                                            // onClick={() => handleMunieClickButton}
                                                            onChange={(e) => stakingMunieCheckOnlyOne(e.target)}
                                                        ></input>
                                                    </div>
                                                    <div className="munieStakingImgTokenId">
                                                        <p>{item.nft.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Carousel>
                            ) : null}

                            {/* {getMyMunieTokenIds.map((item, index) => {
                                return <div>{item.tokenId}</div>;
                            })} */}

                            {/* <div className="munieStakingSelectBtnSection">
                                <button onClick={munieMint}>Test Minting</button>
                                <button onClick={munieTest}>Test Token</button>
                            </div> */}
                        </div>

                        <div className="depositMunieStakeBtnSection">
                            <button className="cant-munie-com-learn-more" disabled={true}>
                                COMING SOON
                            </button>
                        </div>
                    </div>
                )
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

export default MunieDepositSection;
