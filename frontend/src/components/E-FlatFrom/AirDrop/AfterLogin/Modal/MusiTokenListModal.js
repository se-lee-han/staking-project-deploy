import React, { useEffect, useState } from "react";
import "./MusiTokenListModal.scss";
import { BsX } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { musiAirDropTokenListAction } from "../../../../../redux/actions/airdropActions/musiActions/musiAirDropTokenListAction";
import { musiAirDropViewAction } from "../../../../../redux/actions/airdropActions/musiActions/musiAirDropViewAction";
import { musiAirDropTimeStampAction } from "../../../../../redux/actions/airdropActions/musiActions/musiAirDropTimeStampAction";
import { musiAirDropClaimedAction } from "../../../../../redux/actions/airdropActions/musiActions/musiAirDropClaimedAction";
import { musiAirDropBackDataInfoAction } from "../../../../../redux/actions/airdropActions/musiActions/musiAirDropBackDataInfoAction";
import { MusiLogoXBack } from "../../../../../assets/_index";
const MusiTokenListModal = (props) => {
    const { open, close, header } = props;
    const dispatch = useDispatch();
    const [searchMusiAirDropTokenData, setSearchMusiAirDropTokenData] = useState("");
    const { account } = useSelector((state) => state.account);
    const { musiAirDropTokenList } = useSelector((state) => state.musiAirDropView);

    const selectAirDropMusiTokenListToPage = (musiAirDropTokenList) => {
        const musiTokenRoot = musiAirDropTokenList.root;
        const musiTokenName = musiAirDropTokenList.name;
        const musiTokenSymbol = musiAirDropTokenList.symbol;
        const musiTokenl2Ca = musiAirDropTokenList.l2Ca;
        dispatch(musiAirDropViewAction.musiAirDropViewAct(musiTokenRoot, musiTokenName, musiTokenSymbol, musiTokenl2Ca, account));
        dispatch(musiAirDropTimeStampAction.musiAirDropTimeStampAct(musiTokenl2Ca));
        dispatch(musiAirDropClaimedAction.musiAirDropClaimedAct(account, musiTokenRoot, musiTokenl2Ca));
        dispatch(musiAirDropBackDataInfoAction.musiAirDropBackDataInfoAct(account, musiTokenRoot, musiTokenl2Ca));
        // dispatch(musiAirDropClaimedAction.musiAirDropClaimedAct(account, musiTokenRoot));
    };

    // useEffect(() => {
    //     dispatch(musiAirDropTokenListAction.musiAirDropTokenListAct());
    //     dispatch(musiAirDropBackDataInfoAction.musiAirDropBackDataInfoAct(account));
    // }, [account]);

    // useEffect(() => {
    //     dispatch(musiAirDropClaimedAction.musiAirDropClaimedAct());
    //     dispatch(musiAirDropBackDataInfoAction.musiAirDropBackDataInfoAct());
    // }, []);

    return (
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <section>
                    <header>
                        <div className="musikhan-ModalTopTitleContainer">
                            <div className="musikhan-ModalTopTitleSection">
                                <a>Select token</a>
                                <BsX className="close" onClick={close} />
                            </div>

                            {/* <div className="musikhan-ModalTokensTxtSection">
                                <a>Tokens</a>
                            </div> */}
                        </div>
                    </header>
                    <div className="musikhan-ModalTokenInfoContainer">
                        <div className="musikhan-ModalTokensSearchInputSection">
                            <FaSearch className="musikhan-ModalSearchIcon" />
                            <input
                                placeholder="Search name or symbol"
                                className="musikhan-ModalTokensSearchInput"
                                onChange={(e) => setSearchMusiAirDropTokenData(e.target.value.toLowerCase())}
                            ></input>
                        </div>
                        <div className="musikhan-ModalTokenListSection">
                            <ul className="musikhan-TokenList_PickerToken">
                                {musiAirDropTokenList
                                    .filter(
                                        (musiAirDropTokenList) =>
                                            musiAirDropTokenList.name.toLowerCase().includes(searchMusiAirDropTokenData) ||
                                            musiAirDropTokenList.symbol.toLowerCase().includes(searchMusiAirDropTokenData)
                                    )
                                    .map((musiAirDropTokenList, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                selectAirDropMusiTokenListToPage(musiAirDropTokenList);
                                                close();
                                            }}
                                        >
                                            <div className="musikhan-TokenListTokenImgTextSection">
                                                <img src={MusiLogoXBack} alt="MusikhanLogo"></img>
                                                <div className="musikhan-TokenListNameSymbolSection">
                                                    <div className="musikhan-TokenListNameSection">
                                                        <h2>{musiAirDropTokenList.name} </h2>
                                                    </div>
                                                    <div className="musikhan-TokenListSymbolSection">
                                                        <h2>{musiAirDropTokenList.symbol} </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
};

export default MusiTokenListModal;
