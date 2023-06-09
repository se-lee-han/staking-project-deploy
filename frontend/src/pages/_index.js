import * as React from "react";

const MainPage = React.lazy(() => import("./MainPage"));
const StakingPage = React.lazy(() => import("./StakingPage"));
const SprStakingPage = React.lazy(() => import("./SprStakingPage"));
const HanStakingPage = React.lazy(() => import("./HanStakingPage"));
const AirDropSignInPage = React.lazy(() => import("./airDrop/AirDropSignInPage"));
const AirDropSignUpPage = React.lazy(() => import("./airDrop/AirDropSignUpPage"));
const InspectionPage = React.lazy(() => import("./InspectionPage"));
const HanEPlatFromPage = React.lazy(() => import("./airDrop/HanEPlatFromPage"));
const BeforeLoginPlatFromPage = React.lazy(() => import("./airDrop/BeforeLoginPlatFromPage"));
const Uni2V2StakingPage = React.lazy(() => import("./Uni2V2StakingPage"));
const BeforeOldHanEplatFromPage = React.lazy(() => import("./oldPages/BeforeOldHanEplatFromPage"));
const OldHanEPlatFromPage = React.lazy(() => import("./oldPages/OldHanEPlatFromPage"));
const OldHanEplatSignInPage = React.lazy(() => import("./airDrop/OldHanEplatSignInPage"));
const OldHanEplatSingUpPage = React.lazy(() => import("./airDrop/OldHanEplatSingUpPage"));

// import MainPage from "./MainPage";
// import StakingPage from "./StakingPage";
// import SprStakingPage from "./SprStakingPage";
// import HanStakingPage from "./HanStakingPage";
// import AirDropSignInPage from "./airDrop/AirDropSignInPage";
// import AirDropSignUpPage from "./airDrop/AirDropSignUpPage";
// import InspectionPage from "./InspectionPage";
// import HanEPlatFromPage from "./airDrop/HanEPlatFromPage";
// import BeforeLoginPlatFromPage from "./airDrop/BeforeLoginPlatFromPage";
// import Uni2V2StakingPage from "./Uni2V2StakingPage";
// import BeforeOldHanEplatFromPage from "./oldPages/BeforeOldHanEplatFromPage";
// import OldHanEPlatFromPage from "./oldPages/OldHanEPlatFromPage";
// import OldHanEplatSignInPage from "./airDrop/OldHanEplatSignInPage";
// import OldHanEplatSingUpPage from "./airDrop/OldHanEplatSingUpPage";

export {
    MainPage,
    StakingPage,
    SprStakingPage,
    HanStakingPage,
    AirDropSignInPage,
    AirDropSignUpPage,
    InspectionPage,
    HanEPlatFromPage,
    BeforeLoginPlatFromPage,
    Uni2V2StakingPage,
    BeforeOldHanEplatFromPage,
    OldHanEPlatFromPage,
    OldHanEplatSignInPage,
    OldHanEplatSingUpPage,
};
