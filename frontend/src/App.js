import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUpAction } from "./redux/actions/airdropActions/signUpActions/signUpAction";
import { connectAccount } from "./redux/actions/connectAccount";

import "./App.css";
import {
    MainPage,
    StakingPage,
    SprStakingPage,
    AirDropSignInPage,
    AirDropSignUpPage,
    HanEPlatFromPage,
    BeforeLoginPlatFromPage,
    InspectionPage,
    HanStakingPage,
    Uni2V2StakingPage,
    BeforeOldHanEplatFromPage,
    OldHanEPlatFromPage,
    OldHanEplatSignInPage,
    OldHanEplatSingUpPage,
} from "./pages/_index";

function App() {
    const dispatch = useDispatch();
    const { account } = useSelector((state) => state.account);
    // const { email } = useSelector((state) => state.signUpEmail);
    const [loginState, setLoginState] = useState(false);
    const [email, setEmail] = useState("");
    const sessionEmail = sessionStorage.getItem(account);

    useEffect(() => {
        // dispatch(connectAccount.getAccount());
        dispatch(signUpAction.getEmailAct(account));
        if (sessionEmail === null) {
            setLoginState(true);
        } else {
            setLoginState(false);
        }
    }, [account, loginState, email, sessionEmail]);

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/rakis6" element={<StakingPage />} />
            <Route path="/spr" element={<SprStakingPage />} />
            <Route path="/hanbonus" element={<HanStakingPage />} />
            <Route path="/univ2" element={<Uni2V2StakingPage />} />
            {loginState === false ? <Route path="/hanep" element={<HanEPlatFromPage />} /> : <Route path="/hanep" element={<BeforeLoginPlatFromPage />} />}
            {loginState === false ? <Route path="/hanep/old" element={<OldHanEPlatFromPage />} /> : <Route path="/hanep/old" element={<BeforeOldHanEplatFromPage />} />}
            <Route path="/hanep/signin" element={<AirDropSignInPage />} />
            <Route path="/hanep/signup" element={<AirDropSignUpPage />} />
            <Route path="/hanep/old/signin" element={<OldHanEplatSignInPage />} />
            <Route path="/hanep/old/signup" element={<OldHanEplatSingUpPage />} />
        </Routes>
    );
}

export default App;
