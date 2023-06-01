import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UniV2WithdrawModal.scss";
import { BsX } from "react-icons/bs";

const UniV2WithdrawModal = (props) => {
    const { open, close } = props;
    const dispatch = useDispatch();
    const { account } = useSelector((state) => state.account);
    return (
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <section>
                    <header>
                        <div className="musikhan-ModalTopTitleContainer">
                            <div className="eplat-UniV2-ModalTopTitleSection">
                                <a>Select</a>
                                <BsX className="close" onClick={close} />
                            </div>
                        </div>
                    </header>
                    <div className="eplat-UniV2-ModalTokenInfoContainer">
                        {/* <div className="eplat-UniV2-ModalTokensSearchInputSection">
            <FaSearch className="eplat-UniV2-ModalSearchIcon" />
            <input placeholder="Search name or symbol" className="eplat-UniV2-ModalTokensSearchInput"></input>
        </div> */}
                        <div className="eplat-UniV2-ModalTokenListSection">
                            <ul className="eplat-UniV2-TokenList_PickerToken">
                                <div className="eplat-UniV2-Modal-Title">
                                    {/* <div className="eplat-UniV2-Modal-Title-Num">
                        <a>Logo</a>
                    </div> */}
                                    <div className="eplat-UniV2-Modal-Title-Amount">
                                        <a>Amount</a>
                                    </div>
                                    <div className="eplat-UniV2-Modal-Title-Date">
                                        <a>Withdrawal Date</a>
                                    </div>
                                </div>
                                <hr />
                                {/* {stakerDataArray.map((stakerDataArray, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    selectRakis6AirDropTokenToPage(stakerDataArray, index);
                                    close();
                                }}
                            >
                                <div className="eplat-UniV2-TokenListTokenImgTextSection">
                                    <img src={ArrakisBlackIcon} alt="ArrakisIcon"></img>
                                    <div className="eplat-UniV2-TokenListNameSymbolSection">
                                        <div className="eplat-UniV2-TokenListNameSection">
                                            <h2>{stakerDataArray[8]}</h2>
                                        </div>
                                        <div className="eplat-UniV2-TokenListSymbolSection">
                                            <h2>
                                                {stakerDataArray[5]}Y {stakerDataArray[6]}D {stakerDataArray[7]}H
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))} */}
                            </ul>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
};

export default UniV2WithdrawModal;
